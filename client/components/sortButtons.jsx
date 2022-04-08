import React from 'react';
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

const SortButtons = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={props.sort}
        exclusive
        onChange={props.handleSort}
      >
        <ToggleButton value="relevance">Relevance</ToggleButton>
        <ToggleButton value="year">Year Published</ToggleButton>
        <ToggleButton value="editions">Most Editions</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default SortButtons;
