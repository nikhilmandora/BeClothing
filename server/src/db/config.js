const mongoose = require("mongoose");
require("env").config();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}.biwvpw8.mongodb.net/${process.env.DB_NAME}retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`;

mongoose.connect(url)
.then(()=>{
    console.log("Database Connected");
})
.catch((error)=>{
    console.log(error);
});