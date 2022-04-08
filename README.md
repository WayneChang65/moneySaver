# moneySaver

moneySaver 是一個超超超簡單的以太智能合約。  

moneySaver is a quite simple smart contract of Ethereum.  

## truffle commands
```bash
truffle compile
truffle test
truffle develop >> migrate --reset

let instance = await MoneySaver.deployed();
instance.setGoal(222);
instance.getGoal();
instance.getGoal({value: web3.utils.toWei('3', 'ether')});
web3.eth.getAccounts();
```

## Reference
[EatTheBooks](https://www.youtube.com/c/EatTheBlocks)  
[Hung-Ying Tai](https://www.youtube.com/c/%E6%88%B4%E5%AE%8F%E7%A9%8E)  
[Moralis Web3](https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw)  