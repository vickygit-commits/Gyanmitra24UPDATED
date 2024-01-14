const User=require('../models/user');
const ErrorHandler = require('../utils/errorHandler');
const CatchAsyncError =require('../middlewares/catchAsyncError');

//Get Users - Get all users
exports.getUsers=async(req,res,next)=>
{
    const Users=await User.find();
    res.status(200).json({
        success:true,
        Users
    }
    )
}
//creating users - /api/v1/users/new
exports.newUser =CatchAsyncError(async(req,res,next) =>
{
   const user= await User.create(req.body)

   res.status(201).json({
    success:true,
    user
   })
});