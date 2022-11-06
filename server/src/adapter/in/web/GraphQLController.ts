import { ApolloServer } from "apollo-server";
import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import { Resolvers } from "../../../domain/generated/core";
import { GetFlashcardsQuery } from "../../../application/port/in/GetFlashcardsQuery";
import { GetCheatsheetsQuery } from "../../../application/port/in/GetCheatsheetQuery";
import { GetDictionaryQuery } from "../../../application/port/in/GetDictionaryQuery";

export type Config = {
  getFlashcardsQuery: GetFlashcardsQuery;
  getCheatsheetsQuery: GetCheatsheetsQuery;
  getDictionaryQuery: GetDictionaryQuery;
};

export class GraphQLController {
  public static start(config: Config) {
    const resolvers: Resolvers = {
      Query: {
        flashcards: () => config.getFlashcardsQuery.getFlashcards(),
        cheatsheets: () => config.getCheatsheetsQuery.getCheatsheets(),
        entries: () => config.getDictionaryQuery.getDictionary(),
      },
    };

    loadSchema("src/domain/**/*.graphql", {
      loaders: [new GraphQLFileLoader()],
    })
      .then((schema) => {
        const schemaWithResolvers = addResolversToSchema({
          schema,
          resolvers,
        });

        const server = new ApolloServer({ schema: schemaWithResolvers });

        server
          .listen()
          .then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
