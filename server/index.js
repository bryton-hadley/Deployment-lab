const express = require('express')

require('dotenv').config()

const path = require('path')

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())

//THIS ENDPOINTS TO SEND ALL FILES 
app.use('/', express.static(path.join(__dirname, '../client/index.html')))

app.use(express.static(path.join(__dirname, '../client')))









app.listen(port, () =>{

    console.log('Docked at port' + port)
})