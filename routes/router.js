const  express = require('express')
const router = express.Router()
//conn
const conexion = require('../database/db')


router.get('/',(req,res) => {

    res.render('index')
   
})


module.exports = router