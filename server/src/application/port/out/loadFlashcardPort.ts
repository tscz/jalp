import { Flashcard } from "../../../domain/generated/core";

export interface LoadFlashcardPort {
  getFlashcards: () => Flashcard[];
}
