import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
const PORT = 5000

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.listen(PORT, () => console.log(`server is running on ${PORT}`))

app.get('/get', (req, res) => {
    console.log("successful get")
    res.send("Get displayed")
})

app.post('/post', (req, res) => {
    console.log("successful post")
    res.send("Post saved")
})