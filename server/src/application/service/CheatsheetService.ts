import { GetCheatsheetsQuery } from "../port/in/GetCheatsheetQuery";
import { LoadCheatsheetPort } from "../port/out/loadCheatsheetPort";

export class CheatsheetService implements GetCheatsheetsQuery {
  constructor(private readonly loadCheatsheetPort: LoadCheatsheetPort) {}

  getCheatsheets() {
    return this.loadCheatsheetPort.getCheatsheets();
  }
}
