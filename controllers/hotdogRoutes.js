const router = require('express').Router()
const { Hotdog } = require('../models')

router.post('/hotdogs', async (req, res) => {
  try {
    const hotdog = await Hotdog.create(req.body)
    res.status(200).json(hotdog)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, please try again.', error: err })
  }
})

router.get('/hotdogs', async (req, res) => {
  try {
    let hotdogs = await Hotdog.findAll({ })
    hotdogs = hotdogs.map(hotdog => hotdog.get({ plain: true }))
    res.render('hotdogs', { hotdogs })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, please try again.', error: err })
  }
})

router.get('/hotdogs/:id', async ({ params: { id } }, res) => {
  try {
    let hotdog = await Hotdog.findOne({ where: { id } })
    hotdog = hotdog.get({ plain: true })
    res.render('hotdog', hotdog)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong, please try again.', error: err })
  }
})

module.exports = router
