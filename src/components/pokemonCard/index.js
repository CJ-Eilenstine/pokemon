"use client";
import { useState } from "react";
import pokemonStyles from "./pokemonCard.module.css";
import { PokemonProvider } from "@/hooks/usePokemonApi";
import usePokemonApi from "@/hooks/usePokemonApi";

export default function PokemonCard({ img = "", name = "", types = [] }) {
  const typesJsx = types.map((typeObj) => typeObj.type.name).join(", ");
  const { favs, addFav, removeFav } = usePokemonApi();

  const isFavorite = favs.some((pokemon) => pokemon.name === name);

  const [favButton, setFavButton] = useState("Add to Favorites");

  const handleFavoriteToggle = () => {
    const pokemonData = { img, name, types };
    if (isFavorite) {
      removeFav(name);
      setFavButton("Add to Favorites");
    } else {
      addFav(pokemonData);
      setFavButton("Remove to Favorites");
    }
  };

  return (
    <div className={pokemonStyles.pokeCard}>
      <img src={img} alt={`${name} image`} />
      <div>
        <h4>{name}</h4>
        <p>
          <i>Types: {typesJsx}</i>
        </p>
        <button onClick={handleFavoriteToggle}>{favButton}</button>
      </div>
    </div>
  );
}
