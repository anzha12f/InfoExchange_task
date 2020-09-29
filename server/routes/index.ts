import express from 'express';
import * as books from './books'

const router = express.Router();

router.get('/', (req, res) => res.send('testing default routes'));

router.get('/books', books.getBooksList);

router.get('/book/:id', books.getBookId);

router.get('/authors', books.getAuthorsList);

router.get('/authors/:id', books.getAuthor);

router.post('/author', books.addAuthor);

router.post('/book', books.addBook);

router.put('/author/:id', books.editAuthor);

router.put('/book/:id', books.editBook);









export default router;