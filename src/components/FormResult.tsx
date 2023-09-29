import React from "react";
import { PokemonOuputType } from "~/types";
import PokemonRow from "./PokemonRow";
import { Box, Typography } from "@mui/material";
import TableLayout from "./table/Container";

type Props = {
  pokemonData: PokemonOuputType | undefined;
  error: string | undefined;
};

export default function FormResult({ pokemonData, error }: Props) {
  return (
    <Box style={{}} display="flex" justifyContent="center" alignItems="center">
      {pokemonData ? (
        <TableLayout>
          <PokemonRow pokemon={pokemonData} />
        </TableLayout>
      ) : (
        <Typography variant="h5" sx={{ textAlign: "center", my: 5 }}>
          Pokemon Not Found
          {/* I can use This Error  */}
        </Typography>
      )}
    </Box>
  );
}
