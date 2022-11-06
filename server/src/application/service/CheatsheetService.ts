import { inject, injectable } from "tsyringe";
import { GetCheatsheetsQuery } from "../port/in/GetCheatsheetQuery";
import { LoadCheatsheetPort } from "../port/out/loadCheatsheetPort";

@injectable()
export class CheatsheetService implements GetCheatsheetsQuery {
  constructor(
    @inject("LoadCheatsheetPort")
    private readonly loadCheatsheetPort: LoadCheatsheetPort
  ) {}

  getCheatsheets() {
    return this.loadCheatsheetPort.getCheatsheets();
  }
}
