// importação moderna com ESM (import)
import express from 'express'

const app = express() // instanciar Express

app.get('/', (req, res) => {
    res.send(
        `<h3>Página Inicial</h3>\n<p>`)
})

app.get('/sobre', (req, res) => {
    res.send('Sobre... Nada ainda :)')
})

app.listen(3000, () => {console.log('Servidor está vivo!')})