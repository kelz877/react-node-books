
const express = require('express')
const app = express();
const models = require('./models');

const PORT = process.env.PORT || 8080


app.use(express.json())

//create a GET route



app.listen(PORT, () => {
    console.log("Port is running")
})

app.get('/express_backend', (req, res) => {
    res.send({ express: "The backend is almsot connected to REACT"})
})

// let book = models.Book.build({
//     title: "Test 2",
//     genre: "Test 2",
//     publisher: "My Test 2",
//     year: "2017",
//     imageURL: "test.com"
// })

// book.save()