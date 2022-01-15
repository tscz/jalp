import "./App.css";
import {
  useGetCheatsheetsQuery,
  useGetFlashcardsQuery,
} from "./api/generated/core";

function App() {
  return (
    <>
      <Flashcards />
      <Cheatsheets />
    </>
  );
}

function Flashcards() {
  const { loading, error, data } = useGetFlashcardsQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>Flashcards</h1>
      {data!.flashcards!.map((flashcard) => (
        <div key={flashcard?.title}>
          <p>{flashcard?.title}</p>
        </div>
      ))}
    </>
  );
}

function Cheatsheets() {
  const { loading, error, data } = useGetCheatsheetsQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>Cheatsheets</h1>
      {data!.cheatsheets!.map((cheatsheet) => (
        <div key={cheatsheet?.title}>
          <p>{cheatsheet?.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;
