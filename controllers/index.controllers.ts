import {
  Body,
  Request,
  Response,
  RouteParams,
} from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std@0.82.0/uuid/mod.ts";

interface Book {
  id: string;
  name: string;
  author: string;
  originalLanguage: string;
}

let books: Book[] = [
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
};

export const getBook = (
  { params, response }: { params: RouteParams; response: Response },
) => {
  const bookFound = books.find((book) => book.id === params.id);
  if (bookFound) {
    response.status = 200;
    response.body = {
      message: "You got a single book",
      bookFound,
    };
    return;
  }
  response.status = 404;
  response.body = {
    message: "Book not found.",
  };
};

export const createBook = async (
  { request, response }: { request: Request; response: Response },
) => {
  const body: Body = await request.body();

  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      message: "Body is required",
    };
    return;
  }

  const newBook: Book = await body.value;
  newBook.id = v4.generate();

  books.push(newBook);

  response.status = 200;

  response.body = {
    message: "New book created",
    newBook,
  };
};

export const updateBook = async (
  { request, response, params }: {
    request: Request;
    response: Response;
    params: RouteParams;
  },
) => {
  const bookFound = books.find((book) => book.id === params.id);

  if (!bookFound) {
    response.status = 404;
    response.body = {
      message: "Book not found",
    };
    return;
  }

  const body: Body = await request.body();
  const updatedBook: Book = await body.value;
  console.log(updatedBook)
  books = books.map((book) =>
    book.id === params.id ? { ...book, ...updatedBook } : book
  );
  response.status = 200;
  response.body = {
    books,
  }
};

export const deleteBook = (
  { params, response }: { params: RouteParams; response: Response },
) => {
  books = books.filter((book) => book.id !== params.id);
  response.status = 200;
  response.body = {
    message: "Book deleted successfully",
    books,
  };
};
