const assert = require('assert');


class TicTacToe {

	get BOARD_WIDTH() {
		return 3;
	}

	get CONTINUE() {
		return 'continue';
	}
	
	get STALEMATE() {
		return 'stalemate';
	}

	get X_WON() {
		return 'x_won';
	}
	
	get O_WON() {
		return 'o_won';
	}
	
	constructor() {	
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

	hasPlayerMadeWinningMoves(winningCombo, playerMoves) {
		if (playerMoves.length < 3) {
			return false;
		}
		for (let item of winningCombo) {
			if (!playerMoves.includes(item)) {
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
		var oMoves = this.everySecondMoveFromOffset(1);
		for (let someWinningMoves of winningMoves) {
			if (this.hasPlayerMadeWinningMoves(someWinningMoves, xMoves)) {
				return this.X_WON;
			}
			if (this.hasPlayerMadeWinningMoves(someWinningMoves, oMoves)) {
				return this.O_WON;
			}
		}

		if (this.moves.length === 9) {
			return this.STALEMATE;
		}

		return this.CONTINUE;
	}

	placeXToken(row, column) {
		assert.ok(this.moves.length % 2 === 0, "it is X's turn to place their token");
		this.placeToken(row, column);
	}

	placeOToken(row, column) {
		assert.ok(this.moves.length % 2 !== 0, "it is O's turn to place their token");
		this.placeToken(row, column);
	}

	placeToken(row, column) {
		assert.ok(row >=0 && row < this.BOARD_WIDTH && column >= 0 && column < this.BOARD_WIDTH,
			`row ${row} and column ${column} must be between 0 and ${this.BOARD_WIDTH}`);
		let position = row * this.BOARD_WIDTH + column;
		assert.ok(!this.moves.includes(position), `someone has already played at row ${row}, column ${column}`);
		this.moves.push(position);
	}

}

module.exports = { TicTacToe }

