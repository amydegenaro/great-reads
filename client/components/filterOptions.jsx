import React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import {
  generateTagList,
  generateAuthorList,
  generateYearList,
} from '../utilityFunctions';

const FilterOptions = (props) => {
  const { results } = props;
  const tagList = generateTagList(results);
  const authorList = generateAuthorList(results);
  const yearList = generateYearList(results);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="author">Author</InputLabel>
        <Select
          labelId="author"
          label="Author"
          onChange={props.handleChange}
          value={props.author}
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="All">All</MenuItem>
          {authorList.map((author, idx) => (
            <MenuItem key={idx} value={author}>
              {author}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="tags">Tags</InputLabel>
        <Select
          labelId="tags"
          label="Tags"
          onChange={props.handleChange}
          value={props.tags}
        >
          <MenuItem value="All">All</MenuItem>
          {tagList.map((tag, idx) => (
            <MenuItem key={idx} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="year">Year Published</InputLabel>
        <Select
          labelId="year"
          label="Year Published"
          onChange={props.handleChange}
          value={props.year}
        >
          <MenuItem value="All">All</MenuItem>
          {yearList.map((year, idx) => (
            <MenuItem key={idx} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
    // <form id="filters">
    //   <label name="author">Author</label>
    //   <select name="author" onChange={props.handleChange} value={props.author}>
    //     <option value='All'>All</option>
    //     {
    //       authorList.map((author, idx) => <option key={idx} value={author}>{author}</option>)
    //     }
    //   </select>

    //   <label name="tags">Tags</label>
    //   <select name="tags" onChange={props.handleChange} value={props.tags}>
    //     <option value='All'>All</option>
    //     {
    //       tagList.map((tag, idx) => <option key={idx} value={tag}>{tag}</option>)
    //     }
    //   </select>

    //   <label name="year">Year Published</label>
    //   <select name="year" onChange={props.handleChange} value={props.year}>
    //     <option value='All'>All</option>
    //     {
    //       yearList.map((year, idx) => <option key={idx} value={year}>{year}</option>)
    //     }
    //   </select>

    //   <button type="button" className="btn btn-clear" onClick={props.clearFilters}>Clear Filters</button>
    // </form>
  );
};

export default FilterOptions;
