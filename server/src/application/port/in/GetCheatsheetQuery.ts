import { Cheatsheet } from "../../../domain/generated/core";

export interface GetCheatsheetsQuery {
  getCheatsheets: () => Promise<Cheatsheet[]>;
}
