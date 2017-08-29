const Websocket = require('ws');

const wss = new Websocket.Server({port: 8000});

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    console.log(`received: ${data}`);

    wss.clients.forEach((client) => {
      if (client.readyState === Websocket.OPEN) {
        client.send(data);
      }
    });
  });

});