
const express = require('express')
const app = express();
const models = require('./models');
const cors = require('cors');

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())

app.get('/books', (req, res) => {
    models.Book.findAll().then(books =>{
        res.json(books)
    })
})

app.post('/books', (req, res) => {
    
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imageURL = req.body.imageURL

    let book = models.Book.build({
        title, genre, publisher, year, imageURL
    })

    book.save().then(savedBook => {
        res.json({success: true})
    })

})

















app.post('/books', (req, res) => {
    let book_id = req.body.id
    models.Book.destroy({
        where: {
            id: book_id
        }
    }).then(result => console.log(result))
    res.send("Deleted")
})
















app.listen(PORT, () => {
    console.log("Port is running")
})