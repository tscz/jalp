import { Db, MongoClient } from "mongodb";
import { LoadCheatsheetPort } from "../../../application/port/out/loadCheatsheetPort";
import { LoadFlashcardPort } from "../../../application/port/out/loadFlashcardPort";
import { Cheatsheet, Flashcard } from "../../../domain/generated/core";

export class MongodbPersistanceAdapter
  implements LoadFlashcardPort, LoadCheatsheetPort
{
  private db: Db | undefined;

  constructor(uri: string) {
    const client = new MongoClient(uri);

    async function connect(adapter: MongodbPersistanceAdapter) {
      await client.connect();
      adapter.db = client.db();
      await adapter.db.command({ ping: 1 });
      console.log("🗄️   Server connected successfully to MongoDB backend");
    }
    connect(this).catch(console.dir);
  }

  getCheatsheets() {
    return !this.db
      ? Promise.resolve([])
      : this.db
          .collection<Cheatsheet>("cheatsheets")
          .find()
          .map<Cheatsheet>((doc) => ({
            id: doc._id.toString(),
            title: doc.title,
          }))
          .toArray();
  }
  getFlashcards() {
    return !this.db
      ? Promise.resolve([])
      : this.db
          .collection<Flashcard>("flashcards")
          .find()
          .map<Flashcard>((doc) => ({
            id: doc._id.toString(),
            title: doc.title,
          }))
          .toArray();
  }
}
