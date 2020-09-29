import { v4 as uuid } from 'uuid';
import { IBook } from './book.model';
// class Book(Model):
//     name = models.TextField()
//     isbn = models.TextField()
//     author = models.ForeignKey(Author)

const BOOKS = new Map();

//get All books
export function getBooks(sort: string) {
    const books = Array.from(BOOKS.values());
    books.sort((a, b) => {
        if (sort === "asc") {
            return a.name - b.name;
        } else {
            return b.name - a.name;
        }
    });
    return books;
}

//get Book by Id

export function getBook(id: string) {
    if (!BOOKS.has(id)) {
        return null;
    }
    const book = BOOKS.get(id);
    return { ...book };
}

// Add a Book
export async function createBook({ isbn, name, author }: IBook) {
    const id = uuid();
    const book = {
        id,
        name,
        isbn,
        author,
    };
    BOOKS.set(id, book);
    // await store.save(BOOKS);
    return book;
}

export async function updateBook(id: string, { isbn, name, author }: IBook) {
    if (!BOOKS.has(id)) {
        return null;
    }
    const book = BOOKS.get(id);
    book.isbn = isbn ?? book.isbn;
    book.name = name ?? book.name;
    book.author = author ?? book.author;
    //await store.save(BOOKS);
    return { ...book };
}