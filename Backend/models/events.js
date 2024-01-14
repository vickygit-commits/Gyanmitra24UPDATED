const mongoose = require("mongoose");
const { Schema } = mongoose;

const event = new Schema({
    eventid: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    description:{type:String,required:true},
    
    rule:[String],
    eventtype:{type:String,required:true},
    venue:{type:String,required:true},
    duration:{type:String,required:true},

    organizing_department: { type: String, required: true },
    incharge_id:{
      type:String,required:true
    },
    registration_fee: { type: Number, required: true },
    images:{type:String,required:true}
  });

const eventModel = mongoose.model("Events", event);

module.exports = eventModel;
