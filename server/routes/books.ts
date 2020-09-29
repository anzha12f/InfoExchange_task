import * as Book from '../model/book';
import * as Author from '../model/author';

export function getBooksList(req: any, res: any) {
  let { sort } = req.query;
  sort = sort ? sort.toLowerCase() : "desc";
  if (!(sort === "asc" || sort === "desc")) {
    return res.status(400).send("Invalid sort Params");
  }
  const books = Book.getBooks(sort);
  res.json({ books });
}

export function getBookId(req: any, res: any) {
  const { id } = req.params;
  const book = Book.getBook(id);
  res.json({ book });
}

export function getAuthorsList(req: any, res: any) {
  let { sort } = req.query;
  sort = sort ? sort.toLowerCase() : "desc";
  if (!(sort === "asc" || sort === "desc")) {
    return res.status(400).send("Invalid sort Params");
  }
  const authors = Author.getAuthors(sort);
  res.json({ authors });
}

export function getAuthor(req: any, res: any) {
  const { id } = req.params;
  const author = Author.getAuthor(id);
  res.json({ author });
}

export async function addAuthor(req: any, res: any) {
  const { fname, lname } = req.body;
  if (fname === undefined || lname === undefined) {
    return res.status(400).send("Missing name");
  }
  const author = await Author.createAuthor({ fname, lname });
  console.log({ author });
  res.send({ author });
}


export async function addBook(req: any, res: any) {
  const { isbn, name, author } = req.body;
  if (isbn === undefined || name === undefined) {
    return res.status(400).send("Missing isbn or name");
  }
  const book = await Book.createBook({ isbn, name, author });
  console.log({ book });
  res.send({ book });
}

export async function editAuthor(req: any, res: any) {
  const { id } = req.params;
  const { fname, lname } = req.body;
  if (fname === undefined || lname === undefined) {
    return res.status(400).send("Missing  name");
  }
  const author = await Author.updateAuthor(id, { fname, lname });
  console.log({ author });
  res.send({ author });
}

export async function editBook(req: any, res: any) {
  const { id } = req.params;
  const { isbn, name, author } = req.body;
  if (isbn === undefined || name === undefined) {
    return res.status(400).send("Missing isbn or name");
  }
  const book = await Book.updateBook(id, { isbn, name, author });
  console.log({ book });
  res.send({ book });
}


