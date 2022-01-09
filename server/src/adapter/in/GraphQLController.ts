import { ApolloServer } from "apollo-server";
import { loadSchema } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import { Resolvers } from "../../domain/generated/books";
import { GetBooksQuery } from "../../application/port/in/GetBooksQuery";

export class GraphQLController {
  public static start(getBooksQuery: GetBooksQuery) {
    const resolvers: Resolvers = {
      Query: {
        books: () => getBooksQuery.getBooks(),
      },
    };

    loadSchema("**/*.graphql", { loaders: [new GraphQLFileLoader()] }).then(
      (schema) => {
        const schemaWithResolvers = addResolversToSchema({
          schema,
          resolvers,
        });

        const server = new ApolloServer({ schema: schemaWithResolvers });

        server.listen().then(({ url }) => {
          console.log(`🚀  Server ready at ${url}`);
        });
      }
    );
  }
}
