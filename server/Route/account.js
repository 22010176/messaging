const router = require("express").Router()

router.get('/login', (req, res, next) => {
  res.send("Hello")
})

router.post('/register/', (req, res, next) => {
  console.log(req.body)
  res.json(req.body)
})

// router.route('register')

module.exports = router