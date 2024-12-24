const mongoose = require('mongoose')
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:[isEmail, 'Write the correct username']
    },
    
    password:{
        type:String,
        required: [true, ' Password is not definied'],
        minlength: [6, 'Password should contain more than 6 letters'],
    },
})

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt()
    this.password= await bcrypt.hash(this.password, salt)
    next()
})
userSchema.statics.login = async function(){
    const user = await this.findOne({email, password})
    if(user){
       const auth= await bcrypt.compare(password, this.password)

       if(auth){
           return user
       }
       throw Error ('This password is incorrect')
    }
    
    throw Error ('This account is unvaliable')
}
const User = mongoose.model('user', userSchema)

module.exports= User;