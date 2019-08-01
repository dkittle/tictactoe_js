const assert = require('assert');


class TicTacToe {
	
	constructor() {	
		this.BOARD_WIDTH = 3;
		this.CONTINUE = 'continue';
		this.STALEMATE = 'stalemate';
		this.X_WON = 'x_won';
		this.O_WON = 'o_won';
		this.moves = []
	}
	
	everySecondMoveFromOffset(offset) {
		var result = [];
		for (var i = offset; i < this.moves.length; i += 2) {
			if (this.moves[i] !== undefined) {
				result.push(this.moves[i]);
			}
		}
		return result;
	}

	hasPlayerWon(winningCombo, playerMoves) {
		if (playerMoves.length < 3) {
			return false;
		}
		for (var i = 0; i < winningCombo.length; i++) {
			if (!playerMoves.includes(winningCombo[i])) {
				return false;
			}
		}
		return true;
	}

	checkBoardState() {
		if (this.moves.length < 5)
			return this.CONTINUE;

		var winningMoves = [
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,1,2], 
			[3,4,5], 
			[6,7,8],
			[0,4,8],
			[2,4,6]
		];

		var xMoves = this.everySecondMoveFromOffset(0);
		for (var i = 0; i < winningMoves.length; i++) {
			if (this.hasPlayerWon(winningMoves[i], xMoves)) {
				return this.X_WON;
			}
		};

		var oMoves = this.everySecondMoveFromOffset(1);
		for (var i = 0; i < winningMoves.length; i++) {
			if (this.hasPlayerWon(winningMoves[i], oMoves)) {
				return this.O_WON;
			}
		};

		if (this.moves.length === 9) {
			return this.STALEMATE;
		}

		return this.CONTINUE;
	}

	placeXToken(row, column) {
		assert.ok(row >=0 && row < this.BOARD_WIDTH && column >= 0 && column < this.BOARD_WIDTH,
			`row ${row} and column ${column} must be between 0 and ${this.BOARD_WIDTH}`);
		this.moves.push(row * this.BOARD_WIDTH + column);
	}

	placeOToken(row, column) {
		assert.ok(row >=0 && row < this.BOARD_WIDTH && column >= 0 && column < this.BOARD_WIDTH,
			`row ${row} and column ${column} must be between 0 and ${this.BOARD_WIDTH - 1}`);
		this.moves.push(row * this.BOARD_WIDTH + column);
	}

}

module.exports = { TicTacToe }

