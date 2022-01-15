import { GraphQLController } from "./adapter/in/web/GraphQLController";
import { mockConfig } from "./config.mock";
import yargs from "yargs/yargs";
import { prodConfig } from "./config.prod";

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

let config = mockConfig;

switch (argv.config) {
  case "mock":
    config = mockConfig;
    break;
  case "prod":
    config = prodConfig;
    break;
  default:
    throw new Error(`unknown config profile "${argv.config}"`);
}

GraphQLController.start(config);
