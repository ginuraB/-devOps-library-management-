const express = require('express');
const { getBooks, addBook, deleteBook, updateBook } = require('../controllers/bookController');
const router = express.Router();

router.get('/', getBooks); // Fetch all books
router.post('/', addBook); // Add a new book
router.delete('/:id', deleteBook); // Delete a book by ID
router.put('/:id', updateBook); // Update a book by ID

module.exports = router;
