"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.editBook = exports.editAuthor = exports.addBook = exports.addAuthor = exports.getAuthor = exports.getAuthorsList = exports.getBookId = exports.getBooksList = void 0;
const Book = __importStar(require("../model/book"));
function getBooksList(req, res) {
    let { sort } = req.query;
    sort = sort ? sort.toLowerCase() : "desc";
    if (!(sort === "asc" || sort === "desc")) {
        return res.status(400).send("Invalid sort Params");
    }
    const books = Book.getBooks(sort);
    res.json({ books });
}
exports.getBooksList = getBooksList;
function getBookId(req, res) {
    const { id } = req.params;
    const book = Book.getBook(id);
    res.json({ book });
}
exports.getBookId = getBookId;
function getAuthorsList(req, res) {
    res.json([]);
}
exports.getAuthorsList = getAuthorsList;
function getAuthor(req, res) {
    res.json([]);
}
exports.getAuthor = getAuthor;
function addAuthor(req, res) {
    const { author } = req.body;
    console.log(`Add author ${author} in database`);
    res.send("OK");
}
exports.addAuthor = addAuthor;
function addBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { isbn, name, author } = req.body;
        if (isbn === undefined || name === undefined) {
            return res.status(400).send("Missing isbn or name");
        }
        const book = yield Book.createBook({ isbn, name, author });
        console.log({ book });
        res.send("ok");
    });
}
exports.addBook = addBook;
function editAuthor(req, res) {
    const { id } = req.params;
    const { author } = req.body;
    console.log(`Edit Author ${author} in database`);
    res.send("OK");
}
exports.editAuthor = editAuthor;
function editBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { isbn, name, author } = req.body;
        if (isbn === undefined || name === undefined) {
            return res.status(400).send("Missing isbn or name");
        }
        const book = yield Book.updateBook(id, { isbn, name, author });
        console.log({ book });
        res.send("ok");
    });
}
exports.editBook = editBook;
