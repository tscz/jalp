import { container } from "tsyringe";
import { Config } from "./adapter/in/web/GraphQLController";
import { MockPersistenceAdapter } from "./adapter/out/persistence/MockPersistenceAdapter";
import {
  LoadCheatsheetPort,
  LoadCheatsheetPortInjectionToken,
} from "./application/port/out/loadCheatsheetPort";
import { LoadDictionaryPort } from "./application/port/out/loadDictionaryPort";
import { LoadFlashcardPort } from "./application/port/out/loadFlashcardPort";
import { CheatsheetService } from "./application/service/CheatsheetService";
import { DictionaryService } from "./application/service/DictionaryService";
import { FlashcardService } from "./application/service/FlashcardService";

export const createMockConfig: () => Config = () => {
  const inMemoryPersistenceMock = new MockPersistenceAdapter();

  container.register<LoadCheatsheetPort>(LoadCheatsheetPortInjectionToken, {
    useValue: inMemoryPersistenceMock,
  });
  container.register<LoadDictionaryPort>("LoadDictionaryPort", {
    useValue: inMemoryPersistenceMock,
  });
  container.register<LoadFlashcardPort>("LoadFlashcardPort", {
    useValue: inMemoryPersistenceMock,
  });

  return {
    getFlashcardsQuery: container.resolve(FlashcardService),
    getCheatsheetsQuery: container.resolve(CheatsheetService),
    getDictionaryQuery: container.resolve(DictionaryService),
  };
};
