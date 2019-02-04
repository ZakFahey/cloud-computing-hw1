const express = require('express');
const axios = require('axios');
const router = express.Router();

// Check if a website is down
router.get('/status', (request, response) => {
    var url = request.query.url;
    // Add the http prefix if it isn't there already
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }
    // Try and fetch the URL
    axios.get(url)
        .then((res) => response.json({ success: true }))
        .catch((res) => response.json({ success: false }));
});

module.exports = router;