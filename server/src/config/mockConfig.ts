import { Config } from "../adapter/in/web/GraphQLController";
import { MockPersistanceAdapter } from "../adapter/out/persistence/MockPersistenceAdapter";
import { CheatsheetService } from "../application/service/CheatsheetService";
import { FlashcardService } from "../application/service/FlashcardService";

const inMemoryPersistenceMock = new MockPersistanceAdapter();
const flashcardServiceMock = new FlashcardService(inMemoryPersistenceMock);
const cheatsheetServiceMock = new CheatsheetService(inMemoryPersistenceMock);

export const mockConfig: Config = {
  getFlashcardsQuery: flashcardServiceMock,
  getCheatsheetsQuery: cheatsheetServiceMock,
};
