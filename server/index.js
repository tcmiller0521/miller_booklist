import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import bookRoutes from './routes/books.js';

const app = express();
const PORT = 5000

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/books', bookRoutes)

app.listen(PORT, () => console.log(`server is running on ${PORT}`))
