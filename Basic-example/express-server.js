const http = require('http');
const url = require('url');
const express = require('express');
const WebSocket = require('ws');

const app = express();

app.use((req, res) => {
  res.send({
    msg: 'hi there'
  });
});

const server = http.createServer(app);
const wss = new WebSocket.Server({server});

wss.on('connection', (ws, req) => {
  const location = url.parse(req.url, true);

  ws.on('message', (message) => {
    console.log(`here is your message: ${message}`);
  });

  ws.send('something');
});

server.listen(8000, () => {
  console.log('Listening on port 8000');
});