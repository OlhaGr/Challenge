const express = require('express')
const app = express()
const router = require('./config/router')
app.set ('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

require('./config/mongoose')

app.use(router)

const port =7000;
app.listen(port, ()=> console.log('Server work in ${port}')); 