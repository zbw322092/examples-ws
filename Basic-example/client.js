const Websocket = require('ws');

const ws = new Websocket('ws://localhost:8000');

ws.on('open', () => {
  ws.send('Socket is open!');
});

ws.on('message', (data) => {
  console.log(`Data data: ${data}`);
});


