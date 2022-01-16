import { Config } from "./adapter/in/web/GraphQLController";
import { MockPersistanceAdapter } from "./adapter/out/persistence/MockPersistenceAdapter";
import { CheatsheetService } from "./application/service/CheatsheetService";
import { FlashcardService } from "./application/service/FlashcardService";

export const createMockConfig: () => Config = () => {
  const inMemoryPersistenceMock = new MockPersistanceAdapter();
  const flashcardServiceMock = new FlashcardService(inMemoryPersistenceMock);
  const cheatsheetServiceMock = new CheatsheetService(inMemoryPersistenceMock);

  return {
    getFlashcardsQuery: flashcardServiceMock,
    getCheatsheetsQuery: cheatsheetServiceMock,
  };
};
