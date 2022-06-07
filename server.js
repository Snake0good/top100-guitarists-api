const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors')

const guitarists = require('./lists/guitarists')
const { response } = require('express')

app.use(cors())
app.use(express.json())

// guitaristRepo = guitarists

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/guitarists', (req, res) => {
    res.json(guitarists)
})

app.get('/api/guitarists/:guitaristName', (req, res) => {
    const guitarist = req.params.guitaristName.toLowerCase()
    if(guitarists[guitarist]) {
        res.json(guitarists[guitarist])
    } else {
        res.json(guitarists['no name'])
    }

    res.json(guitarists)
})

app.listen(PORT, () => {
    console.log(`Yes, the server is running on port ${PORT}`)
})