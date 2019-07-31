const ttt = require('./game.js');
const assert = require('assert');

var game = new ttt.TicTacToe();

// Make sure we should continue game if no moves have been made.
assert.ok(game.checkBoardState() === game.CONTINUE);

console.log(`game one over, ${game.checkBoardState()}`);

