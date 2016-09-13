const express = require('express')
const app = express()
const port = 3000
var path = require('path')

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(port, (error) => {
    if(error) {
        return console.log('error', error)
    }

    console.log(`server is listening on ${port}`)
})