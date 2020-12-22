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

interface bookBody {
  name: string;
  author: string;
  originalLanguage: string;
}

export const createBook = async (
  { request, response }: { request: Request; response: Response },
) => {
  const body: Body = await request.body();
  const newBook: bookBody = await body.value;
  books.push({
    id: v4.generate(),
    name: newBook.name,
    author: newBook.author,
    originalLanguage: newBook.originalLanguage,
  });
  response.body = {
    message: "received",
  };
};

export const updateBook = () => {};

export const deleteBook = () => {};
