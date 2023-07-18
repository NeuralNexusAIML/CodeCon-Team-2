const mongoose = require('../Config/Connection')

const JobSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    orgname:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    capacity:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    exp:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('job',JobSchema)