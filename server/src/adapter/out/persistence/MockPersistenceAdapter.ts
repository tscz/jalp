import { LoadCheatsheetPort } from "../../../application/port/out/loadCheatsheetPort";
import { LoadFlashcardPort } from "../../../application/port/out/loadFlashcardPort";
import { Cheatsheet, Flashcard } from "../../../domain/generated/core";

export class MockPersistanceAdapter
  implements LoadFlashcardPort, LoadCheatsheetPort
{
  getCheatsheets() {
    return cheatsheets;
  }
  getFlashcards() {
    return books;
  }
}

const cheatsheets: Cheatsheet[] = [
  {
    title: "The first cheatsheet",
  },
  {
    title: "The second cheatsheet",
  },
];
const books: Flashcard[] = [
  {
    title: "The first flashcard",
  },
  {
    title: "The second flashcard",
  },
];
