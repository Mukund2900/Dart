const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const MyContract = require('./build/contracts/DartContract.json');
const address = '';
const privateKey = '';
const infuraUrl = ''; 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Dart Project!')
})


app.get('/newProduct', (req, res) => {
  res.send('new!');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})