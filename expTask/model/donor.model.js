import mongoose from "mongoose"

const donorSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    phone:{type:Number},
    blood:{type:String},
    gender:{type:String},
})

export default mongoose.model.Donors||mongoose.model('Donor',donorSchema)