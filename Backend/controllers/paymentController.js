const crypto=require('crypto')
const Payment=require('../models/payment_integration');
const workshopModel=require('../models/workshop_registration')
const eventModel=require('../models/event_registration')
const user=require('../models/user')
const catchAsyncError = require('../middlewares/catchAsyncError');

exports.processPayment = catchAsyncError(async (req, res, next) => {
    const{name,email,phone,amount}=req.body
    const apiEndpoint = "https://secure.payu.in/_payment";

        // Set the merchant key and salt
        const merchantKey = process.env.PAYU_MERCHANT_KEY;

        // Set the order details
        const saltKey=process.env.PAYU_SALT_KEY;
        const productInfo = "Gyanmitra_Entry";
        const timestamp=Date.now();
        const randomNum=Math.floor(Math.random()*1000000);
        const merchantPrefix='T'
        const txnId=`${merchantPrefix}${timestamp}${randomNum}`;
        

        // Create a map of parameters to pass to the PayU API
        const data = {
        key: merchantKey,
        salt:saltKey,
        txnid: txnId,
        amount: amount,
        productinfo: productInfo,
        firstname: name,
        email: email,
        phone: phone,
       
        
        };
        // const cryp=crypto.createHash('sha512');
        // const string = data.key + '|' + data.txnid + '|' + data.amount + '|' + data.productinfo + '|' + data.firstname + '|' + data.email +  '|||||||||||' + data.salt;
        // cryp.update(string)
        // const hash=cryp.digest('hex');

        const cryp = crypto.createHash('sha512');
const string = `${data.key}|${data.txnid}|${data.amount}|${data.productinfo}|${data.firstname}|${data.email}|||||||||||${data.salt}`;
cryp.update(string);
const hash = cryp.digest('hex');



        // const payment= await Payment.create({
        //     hash:hash,
        //     transactionID:txnId
        // }
        //     )
        //     console.log(payment)

  
        //     res.status(201).json({
        //         success:true,
        //         payment
        //        })
                return res.status(201).send({
                hash:hash,
                transactionID:txnId
               })


});

exports.success = catchAsyncError(async (req, res, next) => {
  const user_id = req.query.userId;
  const user_name = req.query.userName;
  const userEmail = req.query.userEmail;
  const workshop_event_id = req.query.workshopId;
  const workshopid=workshop_event_id;
  const workshop_event_name = req.query.workshopName;
  const workshopname=workshop_event_name;
  const status = req.query.status;
  const timeStamp = req.query.timestamp;
  const hash = req.query.hash;
  const transactionID = req.query.transactionId;
  const PaymentStatus=await Payment.create({
    workshop_event_id,
    workshop_event_name,
    user_id,
    user_name,
    timeStamp,
    hash,
    transactionID,status
    
});
  // Handle the data as needed
    const workshopReg=await workshopModel.create({
        workshopid,
        workshopname,
        user_id,
        user_name,
        
    });
    await user.updateOne(
      { user_id: user_id },
      { $set: { workshopPayed: 'Payed' } }
    );
    


  //console.log(`Success! User ID: ${userId}, User Name: ${userName}, User Email: ${userEmail}, Workshop ID: ${workshopId}, Workshop Name: ${workshopName}, Status: ${status}, Timestamp: ${timestamp}, Hash: ${hash}, TransID: ${tid}`);
  return res.redirect("https://gyanmitra24.onrender.com/success");


});

exports.failed = catchAsyncError(async (req, res, next) => {
  const user_id = req.query.userId;
  const user_name = req.query.userName;
  const userEmail = req.query.userEmail;
  const workshop_event_id = req.query.workshopId;
  const workshop_event_name = req.query.workshopName;
  const status = req.query.status;
  const timeStamp = req.query.timestamp;
  const hash = req.query.hash;
  const transactionID = req.query.transactionId;
  const PaymentStatus=await Payment.create({
    workshop_event_id,
    workshop_event_name,
    user_id,
    user_name,
    timeStamp,
    hash,
    transactionID,status
    
});
   return res.redirect("https://gyanmitra24.onrender.com/failure");


});


exports.eventsuccess = catchAsyncError(async (req, res, next) => {
  
  const user_id = req.query.userId;
  const user_name = req.query.userName;
  const userEmail = req.query.userEmail;
  const workshop_event_id = req.query.eventId;
  const eventid=workshop_event_id;

  const workshop_event_name = req.query.eventName;
  const eventname=workshop_event_name;

  const status = req.query.status;
  const timeStamp = req.query.timestamp;
  const hash = req.query.hash;
  const transactionID = req.query.transactionId;
  const PaymentStatus=await Payment.create({
    workshop_event_id,
    workshop_event_name,
    user_id,
    user_name,
    timeStamp,
    hash,
    transactionID,status
    
});
   // Handle the data as needed
     const eventReg=await eventModel.create({
         eventid,
         eventname,
         user_id,
         user_name,
         
     });
     await user.updateOne(
      { user_id: user_id },
      { $set: { eventPayed: 'Payed' } }
    );
     
 
   //console.log(`Success! User ID: ${userId}, User Name: ${userName}, User Email: ${userEmail}, Workshop ID: ${workshopId}, Workshop Name: ${workshopName}, Status: ${status}, Timestamp: ${timestamp}, Hash: ${hash}, TransID: ${tid}`);
   return res.redirect("https://gyanmitra24.onrender.com/success");
 
 
 });
exports.eventfailure = catchAsyncError(async (req, res, next) => {
  const user_id = req.query.userId;
  const user_name = req.query.userName;
  const userEmail = req.query.userEmail;
  const workshop_event_id = req.query.eventId;
  const workshop_event_name = req.query.eventName;
  const status = req.query.status;
  const timeStamp = req.query.timestamp;
  const hash = req.query.hash;
  const transactionID = req.query.transactionId;
  const PaymentStatus=await Payment.create({
    workshop_event_id,
    workshop_event_name,
    user_id,
    user_name,
    timeStamp,
    hash,
    transactionID,status
    
});
   return res.redirect("https://gyanmitra24.onrender.com/failure");


});
