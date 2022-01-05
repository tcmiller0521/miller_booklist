import mongoose from 'mongoose'

import Books from '../models/books.js'

export const getBooks = async (req, res) => {
    try {
        console.log("Books Gotten")
        res.send('/books/get')
    }   catch (error) {
        next(error)
    }
}

export const addBook = async (req, res) => {
    try {
        console.log(req.body)
        console.log("Book Added")

        const newBooks = new Books(req.body.newBooks)
        res.status(201).json({
            newBooks
        })
    }   catch (error) {
        next(error)
    }
}