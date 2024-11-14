const express = require('express');
const axios = require('axios'); // for making API calls to fetch crypto prices
const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// API endpoint to fetch crypto prices (replace with real API later)
app.get('/api/crypto-prices', async (req, res) => {
  try {
    // Placeholder API response with dummy prices
    const prices = {
      BTC: 50000,
      ETH: 3000
    };
    res.json(prices);
  } catch (error) {
    console.error("Error fetching prices:", error);
    res.status(500).send("Error fetching prices");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
