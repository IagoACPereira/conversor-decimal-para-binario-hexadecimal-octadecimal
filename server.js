const express = require('express')
const binario = require('./modules/binario.js')
const hexadecimal = require('./modules/hexadecimal.js')
const octadecimal = require('./modules/octadecimal.js')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200).send('API para conversão de número decimal para binário e hexadecimal.')
})

app.get('/:numero', (req, res) => {
    
    const { numero } = req.params

    res.status(200).json({
        decimal: Number( numero ),
        binario: Number( binario(numero) ),
        octadecimal: Number( octadecimal(numero) ),
        hexadecimal: hexadecimal( numero ),
        status: 200
    })
    
})

app.listen(port, () => {
    console.log('Api rodando ok!');
})