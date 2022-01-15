import { LoadFlashcardPort } from "../../../application/port/out/loadFlashcardPort";
import { Flashcard } from "../../../domain/generated/core";

export class MockPersistanceAdapter implements LoadFlashcardPort {
  getFlashcards() {
    return books;
  }
}

const books: Flashcard[] = [
  {
    title: "The first flashcard",
  },
  {
    title: "The second flashcard",
  },
];
