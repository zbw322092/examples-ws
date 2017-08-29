const WebSocket = require('ws');

const ws = new WebSocket('wss://echo.websocket.org/', {
  origin: 'https://websocket.org'
});

ws.on('open', () => {
  console.log('connected');
  ws.send(Date.now());
});

ws.on('close', () => {
  console.log('disconnect');
});

ws.on('message', (data) => {
  console.log(`Roundtrip time: ${Date.now() - data} ms`);
  
  setTimeout(() => {
    ws.send(Date.now());
  }, 500);
});