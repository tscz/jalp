import { Entry } from "../../../domain/generated/core";

export interface GetDictionaryQuery {
  getDictionary: () => Promise<Entry[]>;
}
