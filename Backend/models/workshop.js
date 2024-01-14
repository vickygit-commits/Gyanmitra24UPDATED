const mongoose = require("mongoose");
const { Schema } = mongoose;

const workshop = new Schema({
    workshopid: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    description:{type:String,required:true},
    organizing_department: { type: String, required: true },
    contact_number:{type:String,required:true},
    registration_fee: { type: Number, required: true },
    incharge_id:{
      type:String,required:true
    },
    images:{type:String,required:true}
  });

const workshopModel = mongoose.model("Workshop", workshop);

module.exports = workshopModel;
