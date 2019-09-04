const express = require('express')
const app = express();

const PORT = process.env.PORT || 8080


app.use(express.json())

//create a GET route



app.listen(PORT, () => {
    console.log("Port is running")
})

app.get('/express_backend', (req, res) => {
    res.send({ express: "The backend is almsot connected to REACT"})
})