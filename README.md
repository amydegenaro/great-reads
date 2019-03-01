# GreatReads.

_Search the Open Library API for books_

Deployed on Heroku at https://greatreads-app.herokuapp.com

## About

In building GreatReads, I wanted to write only one 'stateful' class component connected to a Redux store and as many additional 'dumb' components as needed for the React front end. I wanted to keep my code as organized as possible by breaking down components and extracting utility functions into a separate file. One side effect of having just the single stateful component meant that I ended up with a lot of conditional rendering using ternary operators for things that could also have been accomplished with React Router. Despite this, I'm very pleased with the outcome and cleanliness of the Main component and smaller breakout components. I ran into a few issues with Open Library API and inconsistent data formatting, but was able to solve most of the issues by checking for content and providing fallbacks when necessary. Overall, I had a lot of fun building GreatReads and hope you enjoy walking through it.

### Wish-List Features

Due to time constraints, there were a few features that I was unable to implement in GreatReads. Further work on this app would include:

- [ ] Refactor to use React Router
- [ ] Add a "Search by Author" option
- [ ] Add additional filters and book details
- [ ] Paginate search results
- [ ] Toggle sort order upon button re-click
- [ ] Write tests, especially for Express routes

## Built With

GreatReads was built using HTML, CSS, React, Redux, Node, Express, and the Open Library API.

## Set-Up & Installation

Fork and/or clone this repository and install dependencies with `npm install`. Start a local development environment with `npm run start-dev` and navigate to `http://localhost:8080/`.

## Developed by

[Amy De Genaro](https://github.com/amydegenaro)
