// PokedexTable.tsx
import React from "react";
import { api } from "~/utils/api";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import { Chip, Avatar } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";

type PokedexTableProps = {
  selectedType: string[] | [];
};

const PokedexTable: React.FC<PokedexTableProps> = ({ selectedType }) => {
  const array = [
    "Bulbasaur",
    "Charmander",
    "Squirtle",
    "Pikachu",
    "Jigglypuff",
    "Gengar",
    "Machop",
    "Geodude",
    "Eevee",
    "Snorlax",
  ];
  const { data, isLoading: arrayLoading } =
    api.pokemon.getPokemonArray.useQuery({
      array: array,
      filter: selectedType,
    });

  return (
    <>
      {arrayLoading ? (
        <div>Loading...</div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Pokemon Name</TableCell>
                <TableCell align="right">Pokemon Types</TableCell>
                <TableCell align="right">Pokemon Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((pok) => (
                <TableRow
                  key={pok.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {pok.id}
                  </TableCell>
                  <TableCell align="right">{pok.name}</TableCell>
                  <TableCell align="right">
                    {pok.types.map((type) => (
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
                      src={pok.sprite}
                      alt={pok.name}
                      style={{ maxWidth: "50px" }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default PokedexTable;
