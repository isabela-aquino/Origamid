export default function initFetchBitcoin(){
  
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(json => {
    const valorBitcoin = document.querySelector('.btc-preco')
    valorBitcoin.innerText = (1000 / json.BRL.sell).toFixed(4)
  }).catch(erro =>{
    console.log(Error(erro))
  })
}