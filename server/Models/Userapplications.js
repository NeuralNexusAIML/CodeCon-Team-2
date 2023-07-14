const mongoose = require('../Config/Connection')

const ApplySchema = mongoose.Schema({
    orgname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    },
    exp:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }
    ,
    resume:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('apply',ApplySchema)