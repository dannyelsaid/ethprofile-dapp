async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const balance = await provider.getBalance(address);
    const ethBalance = ethers.utils.formatEther(balance);

    document.getElementById("walletAddress").innerText = `Address: ${address}`;
    document.getElementById("walletBalance").innerText = `Balance: ${ethBalance} ETH`;
  } else {
    alert("MetaMask not detected.");
  }
}
