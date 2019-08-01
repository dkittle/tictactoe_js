const ttt = require('./game.js');
const assert = require('assert');

var game = new ttt.TicTacToe();

// Make sure we should continue game if no moves have been made.
assert.ok(game.checkBoardState() === game.CONTINUE);

// X should not be able to make an illegal move
assert.ok(tryIllegalMove(-1,0));


// State should be continue if X makes one move
game.placeXToken(0,0);
assert.ok(game.checkBoardState() === game.CONTINUE);

// Finish playing were X wins on the top row
game.placeOToken(1,0);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeXToken(0,1);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeOToken(1,1);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeXToken(0,2);
assert.ok(game.checkBoardState() === game.X_WON);
console.log(`game one over, ${game.checkBoardState()}`);

// X wins on the bottom row (after 4 moves)
game = new ttt.TicTacToe();
game.placeXToken(0,0);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeOToken(1,0);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeXToken(2,1);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeOToken(1,1);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeXToken(2,2);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeOToken(0,2);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeXToken(2,0);
assert.ok(game.checkBoardState() === game.X_WON);
console.log(`game two over, ${game.checkBoardState()}`);

// O wins on the top row (after 3 moves)
game = new ttt.TicTacToe();
game.placeXToken(1,0);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeOToken(0,0);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeXToken(1,1);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeOToken(0,1);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeXToken(2,0);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeOToken(0,2);
assert.ok(game.checkBoardState() === game.O_WON);
console.log(`game three over, ${game.checkBoardState()}`);

// Stalemate
game = new ttt.TicTacToe();
game.placeXToken(0,0);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeOToken(0,1);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeXToken(0,2);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeOToken(1,0);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeXToken(1,1);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeOToken(2,0);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeXToken(2,1);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeOToken(2,2);
assert.ok(game.checkBoardState() === game.CONTINUE);
game.placeXToken(1,2);
assert.ok(game.checkBoardState() === game.STALEMATE, `state = ${game.checkBoardState()}`);
console.log(`game four over, ${game.checkBoardState()}`);


function tryIllegalMove(row, column) {
	try {
		game.placeXToken(row, column);
	}
	catch (err) {
		return true;
	}
	return false;
}
