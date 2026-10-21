const express = require('express');
const path = require('path');

const app = express() // instanciar Express

app.use(express.static(path.join(__dirname, 'src', 'publico')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/publico/paginas/index.html'))
})

app.get('/produtos', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/publico/paginas/produtos.html'))
})

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/publico/paginas/sobre.html'))
})

    app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/publico/paginas/contato.html'))
})

app.listen(6767, () => {console.log('Servidor está vivo!')})