const http = require('http');

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  console.error("Missing required env: API_KEY");
  process.exit(1);
}

const server = http.createServer(async (req, res) => {
    if(req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ status: 'ok' }));
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "w3-api running" }));
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});