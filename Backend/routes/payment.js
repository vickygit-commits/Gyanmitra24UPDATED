const express=require('express');
const { isAuthenticatedUser } = require('../middlewares/authenticate');
const { sendStripeApi,processPayment, success, failed,eventfailure,eventsuccess } = require('../controllers/paymentController');
const router=express.Router();
router.route('/payment/process').post(isAuthenticatedUser,processPayment);
router.route('/payment/success').post(success);
router.route('/payment/failure').post(failed);
router.route('/payment/event/success').post(eventsuccess);
router.route('/payment/event/failure').post(eventfailure);



module.exports=router;