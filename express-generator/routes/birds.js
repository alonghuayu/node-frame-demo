const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const timeStart = (req, res, next) => {
  console.log('Time Start: ', Date.now())
  next()
}
router.use(timeStart)

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router