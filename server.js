require('dotenv').config()

const exphbs = require('express-handlebars')
const express = require('express')
const { join } = require('path')

const hbs = exphbs.create({ })
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(require('./controllers'))

app.get('/', async (req, res) => {
  res.render('test')
})

async function init () {
  await require('./config').sync()
  app.listen(process.env.PORT || 3000)
}

init()