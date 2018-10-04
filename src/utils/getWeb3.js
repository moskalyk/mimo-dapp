import Web3 from 'web3'

const getWeb3 = () => new Promise((resolve, reject) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', () => {
    let web3 = window.web3

    // Checking if Web3 has been injected by the browser (Mist/MetaMask).
    const alreadyInjected = typeof web3 !== 'undefined'

    if (alreadyInjected) {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(web3.currentProvider)
      resolve(web3)
    } else {
      // Fallback to localhost if no web3 injection. We've configured this to
      // use the development console's port by default.
      const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
      web3 = new Web3(provider)
      resolve(web3)
    }
  })
})

export default getWeb3
