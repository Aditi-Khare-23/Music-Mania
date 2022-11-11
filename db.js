const mongoose= require('mongoose'); //object modelling library for mongodb and nodejs
module.exports= async ()=>{
     const connectionParams ={
        useNewUrlParser: true,
        useUnifiedTopology: true
     }
     try {
        await mongoose.connect(process.env.DB,connectionParams);
        console.log("connected to database successfully")
     } catch (error) {
        console.log(error);
         console.log("couldn't connect to database!")
        
     }
}// async function because handling api calls here