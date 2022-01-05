import express from 'express'

// import { getBooks, addBook } from '../controllers/books.js';

const router = express.Router();

router.get('/get', (req, res) => {
    console.log("Books Gotten")
    res.send("Get Books")
})

router.post('/post', (req, res) => {
    console.log("Books posted")
    res.send("Post Books")
})

export default router;