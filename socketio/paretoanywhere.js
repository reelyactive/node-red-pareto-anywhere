module.exports = function(RED) {

  const { io } = require('socket.io-client');

  const DEFAULT_SOCKET_URI = 'http://localhost:3001';

  const STATUS_CONNECT = { fill: "green", shape: "dot", text: "connected" };
  const STATUS_CONNECT_ERROR = { fill: "red", shape: "ring", text: "error" };
  const STATUS_DISCONNECT = { fill: "red", shape: "ring", text: "disconnected" };

  function SocketIONode(config) {
    RED.nodes.createNode(this, config);
    this.uri = config.uri;
    let node = this;

    node.socket = io(node.uri || DEFAULT_SOCKET_URI);

    node.socket.on('connect', () => { node.status(STATUS_CONNECT); });
    node.socket.on('raddec', (raddec) => {
      node.send([ { payload: raddec }, null, null ]);
    });
    node.socket.on('dynamb', (dynamb) => {
      node.send([ null, { payload: dynamb }, null ]);
    });
    node.socket.on('spatem', (spatem) => {
      node.send([ null, null, { payload: spatem } ]);
    });
    node.socket.on('connect_error', (err) => {
      node.status(STATUS_CONNECT_ERROR);
      node.error('Error connecting to Socket.IO server at ' + node.uri);
    });
    node.socket.on('disconnect', () => { node.status(STATUS_DISCONNECT); });

    node.on('close', (done) => {
      node.socket.disconnect();
      node.status({});
      done();
    });
  }
  RED.nodes.registerType("pareto-anywhere-socketio", SocketIONode);

}