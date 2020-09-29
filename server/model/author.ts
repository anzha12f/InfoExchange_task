import { v4 as uuid } from 'uuid';
import { IAuthor } from './author.model';
// class Author(Model):
//     first_name = models.TextField()
//     last_name = models.TextField()

const AUTHORS = new Map();

//get All books
export function getAuthors(sort: string) {
    const authors = Array.from(AUTHORS.values());
    authors.sort((a, b) => {
        if (sort === "asc") {
            return a.fname + a.lname - b.fname + b.lname;
        } else {
            return b.fname + b.lname - a.fname + a.lname;
        }
    });
    return authors;
}

//get Book by Id

export function getAuthor(id: string) {
    if (!AUTHORS.has(id)) {
        return null;
    }
    const author = AUTHORS.get(id);
    return { ...author };
}

// Add a Book
export async function createAuthor({ fname, lname }: IAuthor) {
    const id = uuid();
    const author = {
        id,
        fname,
        lname,
    };
    AUTHORS.set(id, author);
    // await store.save(AUTHORS);
    return author;
}

export async function updateAuthor(id: string, { fname, lname }: IAuthor) {
    if (!AUTHORS.has(id)) {
        return null;
    }
    const author = AUTHORS.get(id);
    author.fname = fname ?? author.fname;
    author.lname = lname ?? author.lname;
    //await store.save(AUTHORS);
    return { ...author };
}