import { Book } from "../../../domain/generated/books";

export interface LoadBookPort {
  getBooks: () => Book[];
}
