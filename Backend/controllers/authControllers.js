const catchAsyncError = require("../middlewares/catchAsyncError");
const User=require('../models/user');
const sendEmail = require("../utils/email");
const ErrorHandler = require("../utils/errorHandler");
const sendToken=require('../utils/jwt');
const crypto=require('crypto')
//Register_User 
exports.registerUser=catchAsyncError(async(req,res,next)=>
{
    const{name,email,gender,password,phone,cname,ccity}=req.body
    const user_id = `GM${await User.countDocuments()}`;
    const user=await User.create({
        user_id,
        name,
        email,
        gender,
        password,
        phone,
        cname,
        ccity
    });
    sendToken(user,201,res)

})
//login_User
exports.loginUser=catchAsyncError(async(req,res,next)=>
{
    const {email,password}=req.body
    //if email or password is empty
    if (!email || !password)
    {
        return next(new ErrorHandler('Please enter email & password',400))
    }
    //finding the user database
    const user=await User.findOne({email}).select('+password');
    if(!user)
    {
        return next(new ErrorHandler('Invalid Email or password',401))//Using 'or' to confuse the hackers whether email or password is wrong

    }
    if(!await user.isValidPassword(password))
    {
        return next(new ErrorHandler('Invalid Email or password',401))

    }
    sendToken(user,201,res)
});
//Logout_User
exports.logoutUser= (req,res,next)=>
{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    }).status(200).json(
        {
            success:true,
            message:"Logged Out Successfully"
        }
    )

}
//ForgotPassword
exports.forgotPassword=catchAsyncError(async(req,res,next)=>
{
    const user=await User.findOne({email:req.body.email});
    if(!user)
    {
        return next(new ErrorHandler("User doesnot exist",404))
    }

    const resetToken=user.getResetToken();
    await user.save({validateBeforeSave:false})

    //Create reset url
    let BASE_URL=process.env.FRONTEND_URL;
    if(process.env.NODE_ENV==="production")
    {
        BASE_URL=`${req.protocol}://${req.get('host')}`
    }
    const resetUrl=`${BASE_URL}/password/reset/${resetToken} `
    const message =`Your password reset url is as follows \n\n ${resetUrl}\n\n If you have not requested this email, then please ignore it.`

    //Sending Email
    try
    {
        sendEmail(
            {
                email:user.email,
                subject:"Gyanmitra Password Recovery Acquistion",
                message
            }
        )
        res.status(200).json(
            {
                success:true,
                message:`Email send to ${user.email}`
            }
        )
    }
    catch(error)
    {
        user.resetPasswordToken=undefined;
        user.resetPasswordTokenExpire=undefined;
        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(error.message),500) //Internal Server Error
    }
});
//resetPassword
exports.resetPassword=catchAsyncError(async(req,res,next)=>
{
    const resetPasswordToken=req.params.token
    // const resetPasswordToken=crypto.createHash('sha256').update(req.params.token).digest('hex');
    const user=await User.findOne({resetPasswordToken,
    resetPasswordTokenExpire:
    {
        $gt:Date.now()
    }})
if(!user)
{
    return next(new ErrorHandler('Password reset token is invalid or expired'));
}
if(req.body.password!=req.body.confirmPassword)
{
    return next(new ErrorHandler('Password doesnot match with confirm password'));

}

user.password=req.body.password;
user.resetPasswordToken=undefined;
user.resetPasswordTokenExpire=undefined;
await user.save({validateBeforeSave:false})

sendToken(user,201,res)

})

//Get User Profile
exports.getUserProfile=catchAsyncError(async(req,res,next)=>
{
    const user = await User.findOne({ user_id: req.user.user_id });
    res.status(200).json(
        {
            success:true,
            user
        }
    )
})

//change password
exports.changePassword = catchAsyncError(async(req,res,next)=>
{
    const user = await User.findOne({ user_id: req.user.user_id }).select('+password');

    //check old password
    if(!await user.isValidPassword(req.body.oldPassword))
    {
        return next(new ErrorHandler('Old password is incorrect',401))
    }
    //assigning new password
    user.password=req.body.password;
    await user.save();
    res.status(200).json(
        {
            success:true,
        }
    )

})
// exports.payedEvent = catchAsyncError(async(req,res,next)=>
// {
//     const user = await User.findOne({ user_id: req.user.user_id });

   
//     user.eventPayed="Payed";
//     await user.save();
//     res.status(200).json(
//         {
//             success:true,
//         }
//     )

// })
// exports.payedWorkshop = catchAsyncError(async(req,res,next)=>
// {
//     const user = await User.findOne({ user_id: req.user.user_id });

    
//     user.workshopPayed="Payed";
//     await user.save();
//     res.status(200).json(
//         {
//             success:true,
//         }
//     )

// })

//Count of the users:


//ADMIN: Get all Users
exports.getAllUser=catchAsyncError(async(req,res,next)=>
{
    const users=await User.find();
    res.status(200).json({
        success:true,
        users
    })
})



//ADMIN: Get Specific Users
exports.getUser=catchAsyncError(async(req,res,next)=>
{
    const user = await User.findOne({ user_id: req.user.user_id });
    if(!user)
    {
        return next(new ErrorHandler(`User not found with this id ${req.params.user_id}`))
    }
    res.status(200).json({
        success:true,
        user
    })

});
//Admin