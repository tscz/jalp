import { Cheatsheet } from "../../../domain/generated/core";

export const LoadCheatsheetPortInjectionToken = "LoadCheatsheetPort";

export interface LoadCheatsheetPort {
  getCheatsheets: () => Promise<Cheatsheet[]>;
}
