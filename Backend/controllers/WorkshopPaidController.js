const catchAsyncError = require("../middlewares/catchAsyncError");
const workreg=require('../models/workshop_registration');
const ErrorHandler = require("../utils/errorHandler");
exports.getPaidWorkshop=catchAsyncError(async(req,res,next)=>
{
    const workshop = await workreg.find({ user_id: req.user.user_id });
    res.status(200).json(
        {
            success:true,
            workshop
        }
    )
})