const router = require("express").Router()

router.get('/login', (req, res, next) => {
  res.send("Hello")
})

// router.route('register')

module.exports = router