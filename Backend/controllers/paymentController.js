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
  //const salt = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCu1yWLiKNADzvIYXcza9D0ygVPB5u5Drx9XJbXcB/Jgi8jtb1q38IAmqLTzq5lvuwYOFhdfjedbAPH2X8LjZynsoZZbRgY8ik9fOLPilIFaEFIJGraflEHr9ofy6InUnyUYQ5SdhovKyZPlekJB1S+4e8Smr6NTe2tEiiCCvLe/jw80XXojcdYWpD+Krpb9mRWjXUOiPmrGdqeZvpC6mMdTTIww/mTYGRgDIJIxXFKXT31b7a7Yuc5288s13Swp6HTW+1WvF+dOlU4xj2ZPpdWITnJrEq3LplyP6Dgrtu7UAnzuDmycsgrFraoXbpACTSpbObYNCxsnGYsdxXV8S5lAgMBAAECggEAcGydksyIlJ93BJFPkbwJP+5LXZb51hQYtc98mwlZFzzjzOWG6Br7Z2IHw4SJ9Zi/vY81muCXKF2VTMOZArfLfLW51/TjYt8MD6KnQWai+SEhoR7xqo9A0V2NN5a8LObIfqyuBe41RhFL8C7oCssw/hDPprnkP35Vj002yO/7XdExk2BiuH9s8jA1myfyvz2P+a2/xczIGS7VATfsNlvqp6DRCyMiHggEvmZN9NwFKDMEXsme9SCPC+EnWBn6b6yoP+vTQQadM8F6VG3uyhenTg5f/3NwDR+ftzsEDHBBwUic0iNJRep6m0Ifuo2Vaj0m8IHJSQ5i9CqNxbFwTZR5YQKBgQDm1yDbyYtV6oHO4uVWSQu9WPZsenMnOj9MjbETZjiEvTFg7QxaEAEhWk17ZIusr/ihLPocOQrV+++5wJgrpburFGirlGyMjj+/no/ko2WNe5XP66t3zxGO2RZiJHlksfEy44E47ScaRf3SUx+b/u6+9M9AwKQfAu/adZO/y5oWSQKBgQDB5YRXEuOr2mvkZyLsPxdLhrmlLbPY+kLUGIRlMV19LkFw4Z6fojgnQHWS5b6YJvIUdvizQnUzhQJBaMOtXWABiAPT9pSgcl2AI/nb5CxjlkPpjKDHC5F174K1JK6h9Up25N023a56NKYh0xM3w38Wp457Ligz76Ozfz9MDy7nPQKBgQChU/Qo5uA0OWJjHnu9I+vKdyQxiBp2beTTMatxrV0Ol9KstL6PKuQ/VQcVl51uIMWYjwB1PQBvsFVH8mvnBTr1Q5wrXd3HFZtD5iMWXYOZr6dx2njJkLPqq5lTGb6lOx8gu5MSH9vWJthPZ7yNn0tntVwrGvcYnUrX2Jhb0IVt0QKBgEx26+K+00Qxhfzz42TRWKlzPwDx7gvyXapw5L1XY2v7ctlGUJzZh1WLaRJ+QdSU/0CszlU7LycbHBGZdBmJSlQwRHoxstk3YMIo7d8Ws56uYqfWyozUdg/RXXV8OtYp+qy6grahY65T1vRd3iVOlm7jsx/Gyxn4NlGSK+8dybxtAoGBAJLKnnnLbc75EDJYaGgyP6Rg41g9HYu2zSAmnHV47QUjP1ml68RnMzziXcuwc+DSPfQzs8B+orvtuSbJkjg1UhO8zLwLeVk/9cjwOEqKLkoVadXdslPp22R72Ja9vG3AJe0s72u46FUvmEeOGlwJtdZRrXFXScuk/pAPdQ2bhgxD";
  // const saltKey="MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQB5hDQhkawze7s4dGtwYW1B0js4RoooRqW/WBl0IwTXZM8ct6QE9EdX2R72lNMFNynnukVz88V/HnDXAiZqvVkZjVzKGaWTU1PcHscI3vK85s00tzM/h+9xhdnPnHQk90r+WfYe3DwhS/y7QZMA4hrk3MnAEDHIfCR7OCpPLutd64kiwIGYdtVkYGVgYXqx4u12U4Ws2D4yZNBHlpsx3LQ03CCzLZlOWoGasELfHfh7mGTuEPqSvDdwTpOiwuOqKdl+/jMwrfKtEEU/zcNZhaLIdHFMuZ6g+5auMid8benMyJ54GWNq9Pve/cjMyVZaFv2DlqIFwgn9KzWsFT+YXZAgMBAAECggEBAMyE2vYs0p+UE4QO0Uz9fRgOe4Nw5xkzxbkHJYu9WI5Caa7l/OT4urWUSNqjpEQF4dSK6QW93OaHk8RTWs4HYKJ8HOT85FfpojzwtWmtkmz0BWLKLKBbFNBGP4cxYAO9Nn6Cu96BGY9ejKWvMCWfMBV+1u/0463aa8HeWiZz4n45OuXbWYa0O/T8KZQd8rBXm26e6jBaIeXztcTrX6uZypr2cWXs1XqLb0Zjw/buJbtdPdJ22ndzIMr2uaihhibRbkxJz0JXIl0aHIruOghHqGHJ2T+YJ3Ef9olH1OGYNDXAQmGPJ+w7M4BlKD7MMyOpv70GYSrIK6Nt9DTXKRxR0IECgYEA9QIxr4zMN6kRoRff7U8LxaiXxFA7XwtDy8a3wU8IQbZanG7oCM5sYlZMk9NfpbVVMCo4jNujMcEawNYdvBaayFo9GrWm/cWY4xfkq61rJiEGlx6St0zH1xKHGlDgWCmBxi3aeHL8mHJT9drVJlXY4a6JP2uzSMe/pgr+oE3+FCkCgYEA2Vy3OX8dAJVCnqD6HdQboDFe6iP2Zx/Tdrts415w79uD6PHY/XlmctbXTexbvQTPLlBkK0MABxa5ponDaANpBHTB983bn93WoM+K1gCWUpMX8rwwH4I7APZECR2y20bHVwJZTuDeifahKI2tU8GeShCI1IWE2pAsRHhZh9tfmjECgYAvq1idbkiBf9yVOj7wPhPtRisZH/8dM+Th7ezsqILTvjYM/6sXo4oE7AOEM3kFla1YbK6KAWXUFV0uLbqlUMSWvK/s1XEDKQHhFVIBcQFK7twIZQNotIChQNKWdSvhG1pLg7pg+wZYZs4dJJGaHtPOvRWpCDxeqbaJCNSXvfT0WQKBgQCqwcCbJbYGCDwu3C3BkykkvsRe0mO3ffQlOXaAZGf6tou5S415C48lNowsBjvHkWilbLhUmC0EZKDyKRXet5cfzg23e/xGagM7j+/00L9HHZFZuudfSXLK/axTMQaaZs8hFpJMejG5VowijLKWsuuEKdskgcPt5Acyvw0uwnMncQKBgBUtfvw390WC90Sm+iSZszsp4dZBgXCJPb5trhxotL7JMv5s6V5sraLV6E9AiDvtMSrzOPhbYV1UDyYcXIICuwQi2fkFZvgmM+qWdNaSZMyDG+6HG5gtqfhDOgePITtuwt07xoV4RD6KBjy6M/09m4eWGiRaOLPYNumvpOjmnU1b";
        //const saltKey="wia56q6O"
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