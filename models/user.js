const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
// alternatively youu can use validator instead of match 
const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required:[true,'please provide a name'],
        minlenght:[3,'the minimum lenght for name is 3']
    },
    email:{
        type: String,
        required:[true,'please provide a email'],
        unique: true,
        match:[/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,"please provide a email"]

    },

    password:{
        type: String,
        required:[true,'please provide a password'],
        minlenght:[7,'the minimum lenght for password is 7']
    }
})

userSchema.pre('save', async function (next){
    const salt = await bcrypt.genSalt()
    this.password= await bcrypt.hash(this.password,salt);
    next();

})

userSchema.methods.generateToken=function (){
    return jwt.sign({userId: this._id,name:this.name},process.env.JWT_SECRET,{expiresIn:"3d"})

}

userSchema.methods.comparePassword = async function (userPassword){
    const iscorrect = await bcrypt.compare(userPassword,this.password)
    return iscorrect
}
module.exports= mongoose.model('user',userSchema) 