import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { api } from "~/utils/api";

export function useForm() {
  const [pokemonName, setPokemonName] = useState("Bulbasaur");
  const [debounced] = useDebouncedValue(pokemonName, 500);

  const {
    data: pokemonData,
    isLoading,
    error,
  } = api.pokemon.getPokemon.useQuery(debounced);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleClean = () => {
    setPokemonName("");
  };

  const handleSubmit = () => {
    console.log("Saved");
  };

  return {
    pokemonName,
    debounced,
    pokemonData,
    isLoading,
    error,
    handleOnChange,
    handleClean,
    handleSubmit,
  };
}
