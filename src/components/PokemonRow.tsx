import React from "react";
import { TableRow, TableCell, Chip, Avatar } from "@mui/material";
import { PokemonOuputType } from "~/types";

type Props = {
  pokemon: PokemonOuputType;
};

const PokemonRow: React.FC<Props> = ({ pokemon }) => {
  return (
    <TableRow>
      <TableCell>{pokemon?.id}</TableCell>
      <TableCell>{pokemon?.name}</TableCell>
      <TableCell>
        {pokemon?.types.map((type) => (
          <Chip
            key={type.name}
            label={type.name}
            avatar={<Avatar>{type.name.charAt(0)}</Avatar>}
            variant="outlined"
          />
        ))}
      </TableCell>
      <TableCell>
        <img
          src={pokemon?.sprite}
          alt={pokemon?.name}
          style={{ maxWidth: "50px" }}
        />
      </TableCell>
    </TableRow>
  );
};

export default PokemonRow;
