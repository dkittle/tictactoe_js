# tictactoe_js
an implementation of a Tic Tac Toe backend in Javascript

## approach

My approach is going to be to track the position of each players move in a single dimensional array that contains all moves.

So, the 0th element will be the first move for player X, the 1st element in that array will be the first move for player O, the 2nd element in that array of moves will be the second move for player X, etc.

The board state will be: continue (to keep playing), stalemate (if noone has won and the game is over), x_won or o_won.

I'm going to use asserts to validate inputs to functions.

I'm going to store an integer value for each move which is the cell number in the board that the move was made into. Cell 0 is the upper left hand corner of the board, cell 1 is to it's right, cell 8 is the bottom right corner.

In spite of the game tracking moves in cell numbers (which are a single integer), functions that make the moves will take a zero indexed row, column pair as parameters. I'll have a separate function for X placing a token and O placing a token.

Note, I'm not throwing an exception if a player goes out of turn nor am I testing to make sure a move has note already been made. Both would be trivial to add.
