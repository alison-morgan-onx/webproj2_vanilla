const express = require('express')
const path = require('path')
const port = 1234
const app = express()

app.listen(port, () => {
    console.log('listening on port: ', port)
})

app.use(express.static(path.join(__dirname, "public")))