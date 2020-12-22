import { Response } from "https://deno.land/x/oak/mod.ts";

interface Book {
    id: string,
    name: string,
    author: string
    originalLanguage: string
}

const books: Book[] = [
    {
        id: "1",
        name: "Clean code: Style guide for agile development",
        author: "Robert C. Martin book",
        originalLanguage: "English"
    },
    {
        id: "2",
        name: "Eloquent JavaScript: A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        originalLanguage: "English"
    },
    {
        id: "3",
        name: "Design Patterns",
        author: "Erich Gamma, John Vlissides, Richard Helm, Ralph Johnson",
        originalLanguage: "English"
    },
];

export const getBooks = ({response}: {response: Response}) => {
    response.body = {
        message: 'successful Query',
        books
    }
}
export const getBook = () => {}
export const createBook = () => {}
export const updateBook = () => {}
export const deleteBook = () => {}
