const router = require('express').Router();
const axios = require('axios');
module.exports = router;

router.post('/', async (req, res, next) => {
  try {
    const OLID = req.body.openLibID;
    const { data } = await axios.get(
      `https://openlibrary.org/api/books?bibkeys=OLID:${OLID}&format=json&jscmd=data`
    );

    const dataOLID = data[`OLID:${OLID}`];
    const bookInfo = {
      // isbn: dataOLID.identifiers.isbn_13[0] || dataOLID.identifiers.isbn_10[0], // removed due to inconsistencies in returned data
      title: dataOLID.title,
      url: dataOLID.url,
      cover: dataOLID.cover.large || '/images/cover_placeholder.jpg',
      author: dataOLID.authors || 'Unknown author',
      date: dataOLID.publish_date,
      pages: dataOLID.number_of_pages,
    };
    res.json(bookInfo);
  } catch (err) {
    next(err);
  }
});

// gets one book's description using the works key number
router.post('/description', async (req, res, next) => {
  try {
    const worksID = req.body.worksID;
    const { data } = await axios.get(`https://openlibrary.org${worksID}.json`);

    if (typeof data.description === 'string') {
      res.json(data.description);
    } else if (typeof data.description === 'object') {
      res.json(data.description.value);
    } else {
      res.json('No description');
    }
  } catch (err) {
    next(err);
  }
});
