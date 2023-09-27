import React from "react";
import { PokemonOuputType } from "~/types";
import PokemonRow from "./PokemonRow";
import { Box, Typography } from "@mui/material";

type Props = {
  pokemonData: PokemonOuputType | undefined;
  error: string | undefined;
};

export default function FormResult({ pokemonData, error }: Props) {
  return (
    <Box style={{}} display="flex" justifyContent="center" alignItems="center">
      {pokemonData ? (
        <PokemonRow pokemon={pokemonData} />
      ) : (
        <Typography variant="h5" sx={{ textAlign: "center", my: 5 }}>
          Pokemon Not Found
          {/* I can use This Error As we as */}
          {/* {error} */}
        </Typography>
      )}
    </Box>
  );
}
