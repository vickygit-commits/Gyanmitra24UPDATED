const catchAsyncError = require('../middlewares/catchAsyncError');
const Order = require('../models/workshop_registration');
const ErrorHandler = require('../utils/errorHandler');

exports.newworkReg = catchAsyncError(async (req, res, next) => {
    const {
        workshopid,
      workshopname,
      userid,
      username,
    } = req.body;

    const order = await Order.create({
        workshopid,
        workshopname,
        user_id: userid,
        user_name:username  // Corrected: use req.user.user_id
    });

    res.status(200).json({
        success: true,
        message: 'Successfully registered'
    });
});


//Get Registered Workshop
exports.getRegisteredWorkshop=catchAsyncError(async(req,res,next)=>
{
    const Workshop=await Order.find({'user_id':req.params.id})
    if(!Workshop.length)
    {
        return next(new ErrorHandler('You have not registered in any Workshop yet'),404)
    }
    res.status(200).json({
        success:true,
        Workshop
    })

})