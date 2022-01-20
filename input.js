const { MOVE_UP_KEY, 
  MOVE_DOWN_KEY, 
  MOVE_LEFT_KEY, 
  MOVE_RIGHT_KEY, 
  SAY_HELLO_KEY, 
  SAY_BYE_KEY,
  SAY_GG_KEY } = require("./constants");
// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const handleUserInput = function (key) {
  // your code here
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (key === SAY_HELLO_KEY) {
    connection.write("Say: Hello!");
  }
  if (key === SAY_BYE_KEY) {
    connection.write("Say: Bye!");
  }
  if (key === SAY_GG_KEY) {
    connection.write("Say: Good game!");
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {handleUserInput, setupInput};