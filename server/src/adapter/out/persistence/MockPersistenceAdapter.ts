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
  { id: "1", title: "The first cheatsheet" },
  {
    id: "2",
    title: "The second cheatsheet",
  },
];
const books: Flashcard[] = [
  { id: "1", title: "The first flashcard" },
  { id: "2", title: "The second flashcard" },
];
