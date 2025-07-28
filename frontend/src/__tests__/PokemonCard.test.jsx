import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

describe("PokemonCard", () => {
  test("renderiza imagem e nome capitalizado", () => {
    render(
      <MemoryRouter>
        <PokemonCard
          id="1"
          name="bulbasaur"
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        />
      </MemoryRouter>
    );

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      expect.stringContaining("1.png")
    );

    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
  });
});