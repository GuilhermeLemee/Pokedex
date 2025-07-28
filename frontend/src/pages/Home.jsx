import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <main>
      <h1>Pokédex 151</h1>
      <div className="grid">
        {pokemons.map((pokemon, index) => (
          <PokemonCard
            key={pokemon.name}
            id={index + 1}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
          />
        ))}
      </div>
    </main>
  );
}