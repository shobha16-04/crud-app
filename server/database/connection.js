const mongoose = require('mongoose');
// const MONGOURI = "mongodb+srv://sharmashobha6096:shobha7809@cluster0.hg3lhjg.mongodb.net/?retryWrites=true&w=majority";
 require("dotenv").config();
 console.log(process.env.MONGOURI);
const connectDB = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGOURI);
         console.log(`MongoDB connect:${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB ;