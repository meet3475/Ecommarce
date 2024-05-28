const express = require("express");
const routes = require("./routes/api/v1/index");
const connectDB = require("./db/mongodb");

const app = express();
connectDB();


//localhost:3000/api/v1
app.use("/api/v1", routes);

app.listen(3000, () => {
    console.log("Server Starte at port 3000.");
})