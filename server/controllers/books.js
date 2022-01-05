
import Books from '../models/books.js'

export const getBooks = async (req, res) => {
    try {
        console.log("Books Gotten")
        const booksList = await Books.find();

        res.status(200).json({ booksList })
    } catch (e) {
        res.status(400).json({ message: e })
    }
}

export const addBook = async (req, res) => {
    const book = req.body;
    const newBook = new Books({ ...book })
    try {
        await newBook.save();
        res.status(201).json(newBook)
    } catch (e) {
        res.status(400).json({ message: e })
    }
}