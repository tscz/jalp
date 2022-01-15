import { Flashcard } from "../../../domain/generated/core";

export interface GetFlashcardsQuery {
  getFlashcards: () => Flashcard[];
}
