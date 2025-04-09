const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

// Proxy route for your API
app.get('/api/proxy', async (req, res) => {
  try {
    const response = await axios.get('YOUR_API_ENDPOINT', {
      headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});