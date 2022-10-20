const  express = require('express')
const router = express.Router()
//invoke database for connection
const conexion = require('../database/db')

router.get('/',(req,res) => {
    //res.send('contact')
    res.render('index')
   
})


module.exports = router