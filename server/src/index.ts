import { GraphQLController } from "./adapter/in/GraphQLController";
import { MockPersistanceAdapter } from "./adapter/out/persistence/MockPersistenceAdapter";
import { GetBooksService } from "./application/service/GetBooksService";

const persistenceAdapter = new MockPersistanceAdapter();
const getBooksService = new GetBooksService(persistenceAdapter);

GraphQLController.start(getBooksService);
