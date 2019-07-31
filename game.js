const assert = require('assert');


class TicTacToe {

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
	
	checkBoardState() {
		return this.CONTINUE;
	}

}

module.exports = { TicTacToe }

