// establishes a connection with the game server
const { IP, PORT } = require("./constants");
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  conn.on('connect', (data) => {
    console.log('You are connected to the server');
    conn.write('Name: MKC');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};
module.exports = {connect};