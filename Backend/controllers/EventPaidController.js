const catchAsyncError = require("../middlewares/catchAsyncError");
const eventreg=require('../models/event_registration');
const ErrorHandler = require("../utils/errorHandler");
exports.getPaidEvent=catchAsyncError(async(req,res,next)=>
{
    const event = await eventreg.find({ user_id: req.user.user_id });
    res.status(200).json(
        {
            success:true,
            event
        }
    )
})