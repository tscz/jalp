import { Entry } from "../../../domain/generated/core";

export interface LoadDictionaryPort {
  getDictionary: () => Promise<Entry[]>;
}
