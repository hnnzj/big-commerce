const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/api/products', require('./routes/products'));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.listen(port, () => {
    console.log(`Servidor andando en el puerto 3000`);
});
