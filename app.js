const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.set('views', __dirname + '/views')
const router = require('./routes/router')
app.use('/', router)

app.listen(3000 , () => {
    console.log('server is running');
})

