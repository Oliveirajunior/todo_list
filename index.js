const express = require('express')
const app = express()
const router = require('./routes/Router')
const cors = require('cors')
require('./config/config.js')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)
app.use(cors())
app.use((err, req, res, next) => {
  return res.json({ message: err.message })
})

app.listen(5000, () => console.log('Server Online'))
