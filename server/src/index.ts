import { GraphQLController } from "./adapter/in/web/GraphQLController";
import { MockPersistanceAdapter } from "./adapter/out/persistence/MockPersistenceAdapter";
import { FlashcardService } from "./application/service/FlashcardService";

const persistenceAdapter = new MockPersistanceAdapter();
const flashcardService = new FlashcardService(persistenceAdapter);

GraphQLController.start(flashcardService);
