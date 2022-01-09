import { GetBooksQuery } from "../port/in/GetBooksQuery";
import { LoadBookPort } from "../port/out/loadBookPort";

export class GetBooksService implements GetBooksQuery {
  constructor(private readonly loadBooksPort: LoadBookPort) {}

  getBooks() {
    return this.loadBooksPort.getBooks();
  }
}
