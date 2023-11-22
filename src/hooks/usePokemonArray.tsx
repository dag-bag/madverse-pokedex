// usePokemonData.ts
import { useEffect } from "react";
import { api } from "~/utils/api";

interface UsePokemonDataProps {
  array: string[];
  selectedType: string[];
}

export function usePokemonArray({ array, selectedType }: UsePokemonDataProps) {
  const { data, isLoading: arrayLoading } =
    api.pokemon.getPokemonArray.useQuery({
      array: array,
      filter: selectedType,
    });

  return { data, arrayLoading };
}
