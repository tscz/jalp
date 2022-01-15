import { GetFlashcardsQuery } from "../port/in/GetFlashcardsQuery";
import { LoadFlashcardPort } from "../port/out/loadFlashcardPort";

export class FlashcardService implements GetFlashcardsQuery {
  constructor(private readonly loadFlashcardPort: LoadFlashcardPort) {}
  getFlashcards() {
    return this.loadFlashcardPort.getFlashcards();
  }
}
