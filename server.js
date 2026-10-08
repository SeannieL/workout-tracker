import express from 'express';
import dotenv from "dotenv";

dotenv.config()

const app = express();
const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("Test, Express!");
})

app.listen(port, () => {
    console.log(`This is running on ${port}`);
})