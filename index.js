$(document).ready(() => {
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const interface = JSON.parse('[ { "constant": false, "inputs": [], "name": "bid", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "whoWins", "type": "uint256" } ], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "first", "outputs": [ { "name": "", "type": "address", "value": "0x0ac1e7df59e6f1ba52489a1e0a50368dd0fa72ff" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "second", "outputs": [ { "name": "", "type": "address", "value": "0x81b139de66aee3f690a1bcc3f9b8cf62b85ae1ef" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "bids", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [ { "name": "f", "type": "address", "index": 0, "typeShort": "address", "bits": "", "displayName": "f", "template": "elements_input_address", "value": "" }, { "name": "s", "type": "address", "index": 1, "typeShort": "address", "bits": "", "displayName": "s", "template": "elements_input_address", "value": "" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "addr", "type": "address" }, { "indexed": false, "name": "val", "type": "uint256" } ], "name": "Bid", "type": "event" } ]');
const MyContract = web3.eth.contract(interface);
const contractInstance = MyContract.at("0x235329860FF57de1606d46E3866461e677f6cE4F");
console.log(contractInstance.methods);
console.log(contractInstance._eth.mining)
// Default account is used if you don't specify from in function call.
//web3.eth.defaultAccount = web3.eth.accounts[0];
//web3.eth.sendTransaction({to:"0x235329860FF57de1606d46E3866461e677f6cE4F",from: web3.eth.coinbase, value: 2000000000000000000},function(err,transactionHash){console.log(err + " " + transactionHash)});
$("#sendFirst").click(function(){
  console.log(web3.eth.accounts[3]);
    web3.personal.unlockAccount(web3.eth.accounts[3],"123");
    var value_ = $("#firstBid").val()+"000000000000000000";
    contractInstance.bid.sendTransaction({from: web3.eth.accounts[3], value: value_},function(err,hash){console.log(hash);});
});
$("#sendSecond").click(function(){

    web3.personal.unlockAccount(web3.eth.accounts[4],"123");
    var value = $("#secondBid").val()+"000000000000000000";
    contractInstance.bid.sendTransaction({from: web3.eth.accounts[4], value: value},function(err,hash){console.log(hash)});
});
$("#isMining").html(JSON.stringify(contractInstance));
});
