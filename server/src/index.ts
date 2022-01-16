import { Config, GraphQLController } from "./adapter/in/web/GraphQLController";
import { createMockConfig } from "./config.mock";
import yargs from "yargs/yargs";
import { createProdConfig } from "./config.prod";

const dbUri = process.env.DB_URI;

const argv = yargs(process.argv.slice(2))
  .options({
    config: {
      choices: ["prod", "mock"],
      default: "mock",
      describe: "Select a pre-defined config of adapters for the app",
    },
  })
  .parseSync();

console.log(`🎛️   Server started with config profile "${argv.config}"`);

let config: Config;

switch (argv.config) {
  case "mock":
    config = createMockConfig();
    break;
  case "prod":
    if (!dbUri) {
      throw new Error(
        "No DB uri is given. Please set environment variable DB_URI."
      );
    }

    config = createProdConfig(dbUri);
    break;
  default:
    throw new Error(`unknown config profile "${argv.config}"`);
}

GraphQLController.start(config);
