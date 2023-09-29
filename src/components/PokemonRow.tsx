import React from "react";
import { TableRow, TableCell, Chip, Avatar } from "@mui/material";
import { PokemonOuputType } from "~/types";

type Props = {
  pokemon: PokemonOuputType;
};

const PokemonRow: React.FC<Props> = ({ pokemon }) => {
  return (
    <TableRow
      key={pokemon?.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {pokemon?.id}
      </TableCell>
      <TableCell align="right">{pokemon?.name}</TableCell>
      <TableCell align="right">
        {pokemon?.types.map((type) => (
          <Chip
            key={type.name}
            label={type.name}
            variant="outlined"
            sx={{ marginRight: "5px" }}
            avatar={<Avatar>{type.name.charAt(0)}</Avatar>}
          />
        ))}
      </TableCell>
      <TableCell align="right">
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
