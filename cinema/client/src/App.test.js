import React from "react";
import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("CASE#1 show all 3 movies", async () => {
  render(<App />);

  expect(
    await screen.findByText("The Shawshank Redemption")
  ).toBeInTheDocument();
  expect(await screen.findByText("The Godfather")).toBeInTheDocument();
  expect(await screen.findByText("The Dark Knight")).toBeInTheDocument();
});

it("CASE#2 search for a movie", async () => {
  render(<App />);

  const searchInput = await screen.findByPlaceholderText("Search...");
  userEvent.type(searchInput, "Shawshank");

  expect(await screen.findByText("The Shawshank Redemption")).toBeInTheDocument();

  await waitFor(() => {
    expect(
      screen.queryByText("The Godfather")
    ).not.toBeInTheDocument();
  });

  await waitFor(() => {
    expect(
      screen.queryByText("The Dark Knight")
    ).not.toBeInTheDocument();
  });
});
