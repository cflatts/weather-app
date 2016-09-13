const express = require('express')
const app = express()
const port = 3000
const renderFile = require('ejs').renderFile
console.log(renderFile)
app.use(express.static(__dirname + '/styles'))
app.use(express.static(__dirname + '/dist'))

app.get('/',function(request,response){
  response.sendFile('index.html');
})

app.listen(port, (error) => {
    if(error) {
        return console.log('error', error)
    }

    console.log(`server is listening on ${port}`)
})