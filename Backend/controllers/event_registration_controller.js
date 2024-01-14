const catchAsyncError = require('../middlewares/catchAsyncError');
const Order = require('../models/event_registration');
const ErrorHandler = require('../utils/errorHandler');

exports.neweventReg = catchAsyncError(async (req, res, next) => {
    const {
        eventid,
      eventname,
      userid,
      username,
    } = req.body;
    const existingUserEvent = await Order.findOne({
        user_id: userid,
        eventid: eventid
    });
if (!existingUserEvent) {
    // User exists in the Order collection, proceed to create a new order
    const order = await Order.create({
        eventid,
        eventname,
        user_id: userid,
        user_name: username
    });

    res.status(200).json({
        success: true,
        message: 'Successfully registered'
    });
}
else
{
    res.status(200).json({
        success: true,
        message: 'Not payed'
    });
}


});


//Get Registered Event
exports.getRegisteredEvent=catchAsyncError(async(req,res,next)=>
{
    const Event=await Order.find({'user_id':req.params.id})
    if(!Event.length)
    {
        return next(new ErrorHandler('You have not registered in Any Events'),404)
    }
    res.status(200).json({
        success:true,
        Event
    })

})
