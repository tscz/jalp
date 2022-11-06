import { LoadCheatsheetPort } from "../../../application/port/out/loadCheatsheetPort";
import { LoadDictionaryPort } from "../../../application/port/out/loadDictionaryPort";
import { LoadFlashcardPort } from "../../../application/port/out/loadFlashcardPort";
import {
  Category,
  Cheatsheet,
  Difficulty,
  Entry,
  Flashcard,
} from "../../../domain/generated/core";
import jsonDictionary from "./word-list.json";

export class MockPersistenceAdapter
  implements LoadFlashcardPort, LoadCheatsheetPort, LoadDictionaryPort
{
  constructor() {
    console.log(
      "🗄️   Server connected successfully to InMemory Persistence Mock DB"
    );
  }
  getDictionary() {
    // eslint-disable-next-line
    const data: Entry[] = jsonDictionary.map<Entry>((value, index) => ({
      id: "1",
      category: Category.Adjective,
      difficulty: Difficulty.Easy,
    }));

    return Promise.resolve(data);
  }

  getCheatsheets() {
    return Promise.resolve(cheatsheets);
  }
  getFlashcards() {
    return Promise.resolve(books);
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
