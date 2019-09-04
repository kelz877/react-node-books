
const express = require('express')
const app = express();
const models = require('./models');
const cors = require('cors');

const PORT = process.env.PORT || 8080


app.use(express.json())
app.use(cors())

//create a GET route

app.get('/books', (req, res) => {
    models.Book.findAll().then(books =>{
        res.json(books)
    })
})

// let book = models.Book.build({
    //     title: "Test 2",
    //     genre: "Test 2",
    //     publisher: "My Test 2",
    //     year: "2017",
    //     imageURL: "test.com"
    // })
    
    // book.save()

app.listen(PORT, () => {
    console.log("Port is running")
})