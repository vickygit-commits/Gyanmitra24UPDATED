const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
  workshop_event_id: {
    type: mongoose.Schema.Types.String,
    required: true,
    ref: 'workshop'
},
workshop_event_name: {
    type: mongoose.Schema.Types.String,
    required: true,
    ref: 'workshop'
},
user_id: {
    type: mongoose.Schema.Types.String,
    required: true,

    ref: 'user'
},
user_name: {
    type: mongoose.Schema.Types.String,
    required: true,

    ref: 'user'
},
timeStamp:{
  type:mongoose.Schema.Types.String,
  required:true
},

    hash: { type: String, required: true },
  transactionID: { type: String,required: true },
  status:{
    type:String,required:true
  }
});

let payment_registration = mongoose.model('Payment', paymentSchema);
module.exports = payment_registration;
