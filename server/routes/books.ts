import * as Book from '../model/book';

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
  res.json([]);
}

export function getAuthor(req: any, res: any) {
  res.json([]);
}

export function addAuthor(req: any, res: any) {
  const { author } = req.body;
  console.log(`Add author ${author} in database`);
  res.send("OK");
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

export function editAuthor(req: any, res: any) {
  const { id } = req.params;
  const { author } = req.body;
  console.log(`Edit Author ${author} in database`);
  res.send({ status: 'OK' });
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


