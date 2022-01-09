import { LoadBookPort } from "../../../application/port/out/loadBookPort";
import { Book } from "../../../domain/generated/books";

export class MockPersistanceAdapter implements LoadBookPort {
  getBooks() {
    return books;
  }
}

const books: Book[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];
