// note asysnc functions are for handling promises
//bcrypt is used for hashing purpose
const router=require("express").Router();
const{User,validate}=require("../models/user");
const bcrypt = require("bcrypt");

// create user
router.post("/",async(req,res) =>{
    const{error}=validate(req.body);
    if(error) return res.status(400).send({message:error.details[0].message});
    const user=await User.findOne({email:req.body.email});
    if(user)
    return res.status(403).send({message:"User with given email alreasy exist!"});
    const salt=await bcrypt.genSalt(Number(process.env.SALT));
    //for converting env string to number
    const hashPassword=await bcrypt.hash(req.body.password,salt);
    let newUser = await new User({
		...req.body,
		password: hashPassword,
	}).save();

	newUser.password = undefined;
	newUser.__v = undefined;
    res.status(200).send({data:newUser, message:"Account created successfully"});
})
module.exports=router;