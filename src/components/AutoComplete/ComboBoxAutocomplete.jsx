import React from "react";

import { TextField } from "@mui/material";

import Autocomplete from '@mui/material/Autocomplete';

import BaseCard from "../BaseCard/BaseCard";

const ComboBoxAutocomplete = () => {
  return (
    <BaseCard title="Urugendo rwawe/your journey">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Combo Box" />}
      />
    </BaseCard>
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  ];

export { ComboBoxAutocomplete };
