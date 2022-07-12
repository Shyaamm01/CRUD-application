const mongoose= require('mongoose');

const connectDB= process.env.MONGO_URI;
mongoose.connect(connectDB).then(()=>{
  console.log(`connection successful`);
}).catch((err)=>console.log(err)); 

module.exports=connectDB