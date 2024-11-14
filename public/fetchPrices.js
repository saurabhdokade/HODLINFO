async function fetchPrices() {
    try {
      const response = await fetch('/api/crypto-prices');
      const prices = await response.json();
  
      // Update the page with fetched prices
      document.getElementById('btc-price').textContent = `$${prices.BTC}`;
      document.getElementById('eth-price').textContent = `$${prices.ETH}`;
    } catch (error) {
      console.error("Error fetching prices:", error);
    }
  }
  
  // Fetch prices when the page loads
  fetchPrices();
  