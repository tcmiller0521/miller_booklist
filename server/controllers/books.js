import mongoose from 'mongoose'

// import Books from '../models/books.js'

export const getBooks = async (req, res) => {
    console.log("Books gotten")
    res.send("Get books")
}

export const addBook = async (req, res) => {
    console.log("Books Posted")
    res.send("Add Book")
}