"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.createBook = exports.getBook = exports.getBooks = void 0;
const uuid_1 = require("uuid");
// class Book(Model):
//     name = models.TextField()
//     isbn = models.TextField()
//     author = models.ForeignKey(Author)
const BOOKS = new Map();
//get All books
function getBooks(sort) {
    const books = Array.from(BOOKS.values());
    books.sort((a, b) => {
        if (sort === "asc") {
            return a.name - b.name;
        }
        else {
            return b.name - a.name;
        }
    });
    return books;
}
exports.getBooks = getBooks;
//get Book by Id
function getBook(id) {
    if (!BOOKS.has(id)) {
        return null;
    }
    const book = BOOKS.get(id);
    return Object.assign({}, book);
}
exports.getBook = getBook;
// Add a Book
function createBook({ isbn, name, author }) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = uuid_1.v4();
        const book = {
            id,
            name,
            isbn,
            author,
        };
        BOOKS.set(id, book);
        // await store.save(BOOKS);
        return book;
    });
}
exports.createBook = createBook;
function updateBook(id, { isbn, name, author }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!BOOKS.has(id)) {
            return null;
        }
        const book = BOOKS.get(id);
        book.isbn = isbn !== null && isbn !== void 0 ? isbn : book.isbn;
        book.name = name !== null && name !== void 0 ? name : book.name;
        book.author = author !== null && author !== void 0 ? author : book.author;
        //await store.save(BOOKS);
        return Object.assign({}, book);
    });
}
exports.updateBook = updateBook;
