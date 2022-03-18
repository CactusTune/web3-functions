const Web3 = require('web3')
const rpcURL = 'http://127.0.0.1:7545' //using ganache
const web3 = new Web3(rpcURL)

web3.eth.getBlockNumber().then(console.log)

//send ether from one account to another
const account1 = '0xa40180b9Aa61F7E820549253baFD8cB36f51e9d3'
const account2 = '0xD015913Ed34F6Ae9951D9d4d5AdE993332deb781'

web3.eth.sendTransaction({
    from: account1, 
    to: account2, 
    value: web3.utils.toWei('1', 'ether')},
    (err, result)=>{
    console.log(result)
})
