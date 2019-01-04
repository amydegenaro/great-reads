const router = require('express').Router()
const axios = require('axios')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const OLID = req.body.openLibID
    const worksID = req.body.worksID

    const responseOLID = await axios.get(`https://openlibrary.org/api/books?bibkeys=OLID:${OLID}&format=json&jscmd=data`)
    const responseWorksID = await axios.get(`https://openlibrary.org${worksID}.json`)

    const dataOLID = responseOLID.data[`OLID:${OLID}`]
    const dataWorksID = responseWorksID.data

    const bookInfo = {
      isbn: dataOLID.identifiers.isbn_13[0],
      title: dataOLID.title,
      url: dataOLID.url,
      cover: dataOLID.cover,
      author: dataOLID.by_statement,
      date: dataOLID.publish_date,
      pages: dataOLID.number_of_pages,
      description: dataWorksID.description
    }

    res.json(bookInfo)
  } catch (err) {
    next(err)
  }
})

// gets one book's description using the works key number
// router.post('/description', async (req, res, next) => {
//   try {
//     const worksID = req.body.worksID
//     const {data} = await axios.get(`https://openlibrary.org${worksID}.json`)
//     res.json(data.description)
//   } catch (err) {
//     next(err)
//   }
// })
