require('dotenv').config();
const express = require("express");
require("./conn");
const Router = require("./routers");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => res.send("Hello!"));
app.use(Router);

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})
