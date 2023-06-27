const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://pranjalsingh1702:558HIkzBRwRIU3QY@cluster0.gy6owwt.mongodb.net/",{useUnifiedTopology: true,useNewUrlParser: true});
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
