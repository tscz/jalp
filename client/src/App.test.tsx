import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MockedProvider } from "@apollo/client/testing";
import {
  GetCheatsheetsDocument,
  GetFlashcardsDocument,
} from "./api/generated/core";
import { act } from "react-dom/test-utils";

test("renders and contains flashcards and cheatsheets", async () => {
  //GIVEN
  const mocks = [
    {
      request: {
        query: GetFlashcardsDocument,
        variables: {},
      },
      result: {
        data: {
          flashcards: [{ title: "Flashcard 1" }],
        },
      },
    },
    {
      request: {
        query: GetCheatsheetsDocument,
        variables: {},
      },
      result: {
        data: {
          cheatsheets: [{ title: "Cheatsheet 1" }],
        },
      },
    },
  ];

  // WHEN
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  await act(async () => new Promise((resolve) => setTimeout(resolve, 0)));

  // THEN
  const titleFlashcards = screen.getByText("Flashcards");
  expect(titleFlashcards).toBeInTheDocument();

  const titleCheatsheets = screen.getByText("Cheatsheets");
  expect(titleCheatsheets).toBeInTheDocument();
});
