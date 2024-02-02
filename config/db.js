var mongoose = require('mongoose');


const connectDB = async () => {
    
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connection db successfull");
        
       
    }catch(error){
        console.log("Connection db error");
    }
}

module.exports = connectDB;
