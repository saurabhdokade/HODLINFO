const express = require('express');
const axios = require('axios');
const router = express.Router();

// Replace this URL with the actual API endpoint for cryptocurrency prices
const API_URL = 'https://api.coingecko.com/api/v3/simple/price';

router.get('/', async (req, res) => {
  try {
    // Fetch the price data for specific cryptocurrencies (e.g., Bitcoin)
    const response = await axios.get(API_URL, {
      params: {
        ids: 'bitcoin',             // Specify cryptocurrency
        vs_currencies: 'inr'        // Specify currency (INR)
      }
    });

    // Return the price data to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from CoinGecko:", error.message);
    res.status(500).json({ message: 'Failed to retrieve prices' });
  }
});

module.exports = router;
