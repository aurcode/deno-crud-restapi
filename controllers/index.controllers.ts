import { Body, Request, Response } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std@0.82.0/uuid/mod.ts";

interface Book {
  id: string;
  name: string;
  author: string;
  originalLanguage: string;
}

const books: Book[] = [
  {
    id: "1",
    name: "Clean code: Style guide for agile development",
    author: "Robert C. Martin book",
    originalLanguage: "English",
  },
  {
    id: "2",
    name: "Eloquent JavaScript: A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    originalLanguage: "English",
  },
  {
    id: "3",
    name: "Design Patterns",
    author: "Erich Gamma, John Vlissides, Richard Helm, Ralph Johnson",
    originalLanguage: "English",
  },
];

export const getBooks = ({ response }: { response: Response }) => {
  response.body = {
    message: "successful Query",
    books,
  };
  console.log("New user getBooks");
};

export const getBook = () => {};

export const createBook = async (
  { request, response }: { request: Request; response: Response },
) => {

  const body: Body = await request.body();

  if(!request.hasBody) {
      response.status = 404;
      response.body = {
          message: 'Body is required'
      };
      return;
    };

  const newBook: Book = await body.value;
  newBook.id = v4.generate()

  books.push(newBook);

  response.status = 200;

  response.body = {
    message: "New book created",
    newBook
  };
};

export const updateBook = () => {};

export const deleteBook = () => {};
