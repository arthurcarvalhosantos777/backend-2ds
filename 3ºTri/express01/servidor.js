// importação moderna com ESM (import)
import express from 'express'

const app = express() // instanciar Express

app.get('/', (req, res) => {
    res.sendFile('')
})

app.listen(3000, () => {console.log('Servidor está vivo!')})