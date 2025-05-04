import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({label, options, value}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={"demo-simple-select-label"}>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options.map((option)=>(
            <MenuItem key = {option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          <MenuItem value={10}>Total Points</MenuItem>
          <MenuItem value={20}>Round Points</MenuItem>
          <MenuItem value={30}>Price</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
