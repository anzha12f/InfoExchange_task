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
exports.updateAuthor = exports.createAuthor = exports.getAuthor = exports.getAuthors = void 0;
const uuid_1 = require("uuid");
// class Author(Model):
//     first_name = models.TextField()
//     last_name = models.TextField()
const AUTHORS = new Map();
//get All books
function getAuthors(sort) {
    const authors = Array.from(AUTHORS.values());
    authors.sort((a, b) => {
        if (sort === "asc") {
            return a.fname + a.lname - b.fname + b.lname;
        }
        else {
            return b.fname + b.lname - a.fname + a.lname;
        }
    });
    return authors;
}
exports.getAuthors = getAuthors;
//get Book by Id
function getAuthor(id) {
    if (!AUTHORS.has(id)) {
        return null;
    }
    const author = AUTHORS.get(id);
    return Object.assign({}, author);
}
exports.getAuthor = getAuthor;
// Add a Book
function createAuthor({ fname, lname }) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = uuid_1.v4();
        const author = {
            id,
            fname,
            lname,
        };
        AUTHORS.set(id, author);
        // await store.save(AUTHORS);
        return author;
    });
}
exports.createAuthor = createAuthor;
function updateAuthor(id, { fname, lname }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!AUTHORS.has(id)) {
            return null;
        }
        const author = AUTHORS.get(id);
        author.fname = fname !== null && fname !== void 0 ? fname : author.fname;
        author.lname = lname !== null && lname !== void 0 ? lname : author.lname;
        //await store.save(AUTHORS);
        return Object.assign({}, author);
    });
}
exports.updateAuthor = updateAuthor;
