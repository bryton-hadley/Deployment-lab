const express = require('express')

require('dotenv').config()

const path = require('path')

const cors = require('cors')

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '14fbe4c9eb76482ba6130112925169ca',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('YOU ARE DOING GREAT!')

//THIS ENDPOINTS TO SEND ALL FILES 
app.use('/', express.static(path.join(__dirname, '../client/index.html')))

app.use(express.static(path.join(__dirname, '../client')))

try {
    nonExistentFunction ();
} catch (error) {
    console.error(error.message)
};








app.listen(port, () =>{

    console.log('Docked at port' + port)
})