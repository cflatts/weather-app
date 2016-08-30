const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    reponse.send('Hello!')
})

app.listen(port, (error) => {
    if(error) {
        return console.log('error', error)
    }

    console.log(`server is listening on ${port}`)
})