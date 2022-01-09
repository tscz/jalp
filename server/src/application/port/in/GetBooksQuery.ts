import { Book } from "../../../domain/generated/books";

export interface GetBooksQuery {
  getBooks: () => Book[];
}
