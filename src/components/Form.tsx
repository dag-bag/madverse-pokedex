import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import Search from "./Search";
import { api } from "~/utils/api";
import FormResult from "./FormResult";
import { useDebouncedValue } from "@mantine/hooks";
import Load from "./skeleton";
export default function Form() {
  const [pokemonName, setPokemonName] = useState("Bulbasaur");
  const [debounced] = useDebouncedValue(pokemonName, 500);
  const {
    data: pokemonData,
    isLoading,
    error,
  } = api.pokemon.getPokemon.useQuery(debounced);
  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="h5" sx={{ textAlign: "center", my: 5 }}>
        PokemonRow
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 5 }}>
        <Search
          onChange={handleOnchange}
          onClean={() => void setPokemonName("")}
          onSubmit={() => console.log("Saved")}
          value={pokemonName}
        />
      </Box>
      <Divider sx={{ marginBottom: 6 }} />
      {isLoading ? (
        <CircularProgress
          style={{
            margin: "auto",
            display: "block",
          }}
        />
      ) : (
        <FormResult pokemonData={pokemonData} error={error?.message} />
      )}
    </Box>
  );
}
