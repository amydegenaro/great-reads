const router = require('express').Router()
const axios = require('axios')
module.exports = router

const replaceSpaces = string => string.split(' ').join('+')

// returns an array of objects containing the Open Library ID and works key ID for each search result
router.post('/title', async (req, res, next) => {
  try {
    const searchTerms = replaceSpaces(req.body.search) // separate by + signs
    const {data} = await axios.get(`http://openlibrary.org/search.json?title=${searchTerms}`)
    const resultKeys = data.docs.map(result => {
      return {
        openLibID: result.cover_edition_key,
        worksID: result.key
      }
    })
    res.json(resultKeys)
  } catch (err) {
    next(err)
  }
})

// router.post('/author', async (req, res, next) => {
//   try {
//     const searchTerms = replaceSpaces(req.body.search)
//     const {data} = await axios.get(`http://openlibrary.org/search.json?author=${searchTerms}`)
//     res.json(resultKeys)
//   } catch (err) {
//     next(err)
//   }
// })
