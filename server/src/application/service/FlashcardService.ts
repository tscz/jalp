import { inject, injectable } from "tsyringe";
import { GetFlashcardsQuery } from "../port/in/GetFlashcardsQuery";
import { LoadFlashcardPort } from "../port/out/loadFlashcardPort";

@injectable()
export class FlashcardService implements GetFlashcardsQuery {
  constructor(
    @inject("LoadFlashcardPort")
    private readonly loadFlashcardPort: LoadFlashcardPort
  ) {}
  getFlashcards() {
    return this.loadFlashcardPort.getFlashcards();
  }
}
