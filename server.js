import express from 'express';
import dotenv from "dotenv";

let test = dotenv.config()
console.log(test)

const app = express();
const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("Test, Express!");
})

app.listen(port, () => {
    console.log(`This is running on ${port}`);
})