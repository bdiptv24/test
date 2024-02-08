const express = require('express');
const app = express();
const port = 3000; // Change the port number if needed

// Define a route to handle M3U8 requests
app.get('/live/:path*', (req, res) => {
    const path = req.params.path;
    const originalUrl = `http://176.119.29.52/live/${path}${req.params[0]}`;
    const proxiedUrl = `http://freeiptv25.netlify.app/live/${path}${req.params[0]}`;

    // Redirect to the proxied URL
    res.redirect(proxiedUrl);
});

// Start the server
app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
