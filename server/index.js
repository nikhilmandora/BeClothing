const express = require("express");
const path = require("path");
const allRoutes = require("./src/app");

const app = express();

app.use(express.json());
app.use("/uploads" , express.static(path.join(__dirname , "src" , "uploads")));

app.use(allRoutes);

app.listen(process.env.PORT , ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
});