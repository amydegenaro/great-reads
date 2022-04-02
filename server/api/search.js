const router = require('express').Router();
const axios = require('axios');
module.exports = router;

const replaceSpaces = (string) => string.split(' ').join('+');

// returns an array of objects for each search query
router.post('/title', async (req, res, next) => {
  try {
    const searchTerms = replaceSpaces(req.body.search); // separate by + signs
    const { data } = await axios.get(
      `http://openlibrary.org/search.json?title=${searchTerms}`
    );
    const results = data.docs.map((result) => {
      return {
        title: result.title,
        author: result.author_name || 'Unknown author',
        year: result.first_publish_year || null,
        editions: result.edition_count,
        tags: result.subject || [],
        openLibID: result.cover_edition_key,
        worksID: result.key,
      };
    });
    res.json(results);
  } catch (err) {
    next(err);
  }
});

// router.post('/author', async (req, res, next) => {
//   try {
//     const searchTerms = replaceSpaces(req.body.search)
//     const {data} = await axios.get(`http://openlibrary.org/search.json?author=${searchTerms}`)
//     res.json(resultKeys)
//   } catch (err) {
//     next(err)
//   }
// })
