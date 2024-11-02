"use client";
import { useState } from "react";
import searchStyles from "./search.module.css";
import PokemonCard from "@/components/pokemonCard";
import usePokemonApi from "@/hooks/usePokemonApi";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { singlePokemon, fetchPokemonByName } = usePokemonApi();

  function changeSearchTerm(e) {
    setSearchTerm(e.currentTarget.value.toLowerCase());
  }

  const handleSearch = () => {
    fetchPokemonByName(searchTerm);
  };

  return (
    <main className={searchStyles.mainContent}>
      <input
        type="search"
        id="search"
        name="search"
        value={searchTerm}
        onChange={changeSearchTerm}
        placeholder="Search for a Pokémon"
      />
      <input type="button" value="Search" onClick={handleSearch} />

      {singlePokemon && (
        <div className={searchStyles.result}>
          <PokemonCard
            img={singlePokemon.img}
            name={singlePokemon.name}
            types={singlePokemon.types}
          />
        </div>
      )}
    </main>
  );
}
