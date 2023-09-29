// PokemonTypeSelection.tsx

type PokemonTypeSelectionProps = {
  selectedType: [] | string[];
  selectType: (type: string[]) => void;
};

import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { api } from "~/utils/api";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  // We can use Static Data or api
  const names = [
    "Grass",
    "Fire",
    "Water",
    "Electric",
    "Fairy",
    "Fighting",
    "Ghost",
    "Ground",
    "Rock",
    "Normal",
  ];
  // Api Version
  const { data, isLoading, error } = api.types.getPokemonTypes.useQuery();

  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof selectedType>) => {
    const {
      target: { value },
    } = event;
    selectType(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">
          Select Pokémon Type
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={selectedType}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {isLoading ? (
            <CircularProgress
              style={{
                margin: "auto",
                display: "block",
              }}
            />
          ) : (
            data?.map(({ name, id }) => (
              <MenuItem
                key={id}
                value={name}
                style={getStyles(name, selectedType, theme)}
              >
                {name}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default PokemonTypeSelection;
