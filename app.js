const express = require('express')

const app = express()
app.use(express.static("./public"))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/about', (req, res) => {
    res.sendFile('about.html')
})


app.listen(port = 2000, () => {
    console.log("Server is running on port 2000")
})