const express = require('express')
const app = express()
const router = require('./routes/Router')
const cors = require('cors')
require('./config/config.json')

//app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)
app.use(cors())

app.listen(5000, () => console.log('Server Online'))
