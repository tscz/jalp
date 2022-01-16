import { Config } from "./adapter/in/web/GraphQLController";
import { MongodbPersistanceAdapter } from "./adapter/out/persistence/MongodbPersistenceAdapter";
import { CheatsheetService } from "./application/service/CheatsheetService";
import { FlashcardService } from "./application/service/FlashcardService";

export const createProdConfig: (dbUri: string) => Config = (dbUri) => {
  const mongodbPersistenceAdapter = new MongodbPersistanceAdapter(dbUri);
  const flashcardService = new FlashcardService(mongodbPersistenceAdapter);
  const cheatsheetService = new CheatsheetService(mongodbPersistenceAdapter);

  return {
    getFlashcardsQuery: flashcardService,
    getCheatsheetsQuery: cheatsheetService,
  };
};
