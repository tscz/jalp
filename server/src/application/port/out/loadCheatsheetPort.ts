import { Cheatsheet } from "../../../domain/generated/core";

export interface LoadCheatsheetPort {
  getCheatsheets: () => Promise<Cheatsheet[]>;
}
