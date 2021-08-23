const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const axios = require('axios');
require('dotenv').config();
const PORT = process.env.PORT || 8003
const { getColors, createFav, favColors, deleteFav, updateFav } = require('./controller/colors')

mongoose.connect(`${process.env.MONGO_DB_URL}/Jamal`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => { res.send('Hello from 301 Classmates') })

app.get('/colors', getColors)
app.get('/favColors', favColors)
app.post('/createFav', createFav)
app.delete('/deleteFav/:id', deleteFav)
app.put('/updateFav/:color_id', updateFav)

app.listen(PORT, () => { console.log(`listening on port ${PORT}`) })