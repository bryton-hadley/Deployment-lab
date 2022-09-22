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

//setting an empty arr to put the comments 
const comments = []

app.get('/', (res, req) => {

    res.sendFile(path.join(__dirname, '../client/index.html'))
})
app.get('/api/comments', (req, res) => {
    res.status(200).send(comments)
})
app.post('/api/comments', (req, res) => {
    
    let {post} = req.body
    comments.push(post)

    try {
        if (index === -1 && post !== '') {
         rollbar.log('Your comment was added successfully')
            comments.push(post)
            res.status(200).send(comments)
        } else if (post === ''){
         rollbar.error('No comment was provided')
            res.status(400).send('You must enter a name.')
        } else {
         rollbar.critical('comment is already in array')
            res.status(400).send('That student already exists.')
        }
    } catch (err) {
        console.log(err)
    }
 })
 
 app.delete('/api/comments/:index', (req, res) => {
     const targetIndex = +req.params.index
     
     comments.splice(targetIndex, 1)
 
     rollbar.info("Your comment was deleted")
 
     res.status(200).send(comments)
 })








app.listen(port, () =>{

    console.log('Docked at port' + port)
})