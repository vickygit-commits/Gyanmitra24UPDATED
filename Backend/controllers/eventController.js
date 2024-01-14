const Event=require('../models/events');
const ErrorHandler=require('../utils/errorHandler')
const catchAsyncError=require('../middlewares/catchAsyncError')
const APIFeatures=require('../utils/apiFeatures')
//Get Users - Get all event
exports.getEvents=catchAsyncError(async(req,res,next)=>
{
    const apiFeatures=new APIFeatures(Event.find(),req.query).search()
    const event=await apiFeatures.query;
    res.status(200).json({
        success:true,
        event
    }
    )
});
//creating users - /api/v1/event/new
exports.newEvent =catchAsyncError(async(req,res,next) =>
{
    req.body.incharge_id= req.user.user_id;
   const event= await Event.create(req.body)
   res.status(201).json({
    success:true,
    event
   })
});
exports.getSingleEvent=catchAsyncError(async(req,res,next)=>
{
    const event = await Event.findOne({ eventid: req.params.id});
    res.status(200).json(
        {
            success:true,
            event
        }
    )
})
exports.getDepartmentEvent=catchAsyncError(async(req,res,next)=>
{
    const event = await Event.find({ organizing_department: req.params.id});
    res.status(200).json(
        {
            success:true,
            event
        }
    )
})