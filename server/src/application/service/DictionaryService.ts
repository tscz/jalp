import { inject, injectable } from "tsyringe";
import { GetDictionaryQuery } from "../port/in/GetDictionaryQuery";
import { LoadDictionaryPort } from "../port/out/loadDictionaryPort";

@injectable()
export class DictionaryService implements GetDictionaryQuery {
  constructor(
    @inject("LoadDictionaryPort")
    private readonly loadDictionaryPort: LoadDictionaryPort
  ) {}

  getDictionary() {
    return this.loadDictionaryPort.getDictionary();
  }
}
