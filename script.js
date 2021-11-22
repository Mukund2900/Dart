const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const MyContract = require('./build/contracts/DartContract.json');
const address = '0xE01AC7daDe40658850E9e976978a6e847BBCfdb3';
const privateKey = '0xa0d2a1e0a4bb05630795e059a47e64c0343fe199791b3c46f3ee02ef82ab91d9';
const infuraUrl = 'https://rinkeby.infura.io/v3/26b17999fdb04ae78a3fd470a08acdbd'; 
const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  console.log("basic page; ");
  //Easy way (Web3 + @truffle/hdwallet-provider)
  const init3 = async () => {
    const provider = new Provider(privateKey, 'https://rinkeby.infura.io/v3/26b17999fdb04ae78a3fd470a08acdbd'); 
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    const myContract = new web3.eth.Contract(
      MyContract.abi,
      MyContract.networks[networkId].address
    );

    // console.log(await myContract.methods.data().call());
    // console.log(`Old data value: ${await myContract.methods.data().call()}`);
    const receipt = await myContract.methods.addProduct("1" , "2" , "3" , "4").send({ from: address });
    console.log(`Transaction hash: ${receipt.transactionHash}`);
    // console.log(`New data value: ${await myContract.methods.data().call()}`);
  }

  init3();

  res.send('Dart Project!')
})


app.get('/newProduct', (req, res) => {
  res.send('new!');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})