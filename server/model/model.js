const mongoose=require('mongoose');

var Schema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
        maxlength: 32
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    gender:{
        type:String
    },
    status:{
        type:String
    }
})

const Userdb=mongoose.model('userdb',Schema);

module.exports=Userdb