const router = require('express').Router()

router.use('/api', require('./hotdogRoutes.js'))

module.exports = router
