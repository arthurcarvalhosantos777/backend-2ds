// importação moderna com ESM (import)
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Home Ok!')
})

app.get('/sobre', (req, res) => {
    res.send('Sobre... Nada ainda :)')
})

app.listen(3000, () => {console.log('Servidor está vivo!')})