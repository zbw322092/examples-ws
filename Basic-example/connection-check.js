const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8000 });


function heartbeat() {
  this.isAlive = true;
}

wss.on('connection', (ws) => {
  ws.isAlive = true;
  console.log('connected');
  ws.on('pong', heartbeat);
});

setInterval(function () {

  console.log(wss.clients);
  
  wss.clients.forEach(function (client) {
    if (client.isAlive === false) return client.terminate();

    client.isAlive = false;
    client.ping('', false, true);
  });

}, 2000);