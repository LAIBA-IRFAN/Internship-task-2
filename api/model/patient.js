const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstname:String,
    lastname:String,
    email:String,
    phone:Number
})

module.exports = mongoose.model('Patient',patientSchema)
