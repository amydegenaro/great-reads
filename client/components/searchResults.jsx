import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

const SearchResults = (props) => {
  return (
    <Stack spacing={2}>
      {props.results.map((result, idx) => {
        return (
          <Card key={`result-${idx}`}>
            <CardContent>
              <Typography
                component="h4"
                variant="h6"
                onClick={() => props.selectBook(result)}
              >
                {result.title}
              </Typography>
              <Typography component="h3" variant="subtitle1" gutterbottom>
                by {result.author}
              </Typography>
              <Typography component="p" variant="subtitle2">
                First published in {result.year}, Editions: {result.editions}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" onClick={() => props.selectBook(result)}>
                View Details
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
};

export default SearchResults;
