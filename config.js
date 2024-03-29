// a1: [piece_name, color, [possibel_move], icon, piece_vaule, initial_position//]

// what will be in the data of chessboard. I will be storing the data in js object like this a1: [piece_name, color, [possibel_move], icon,] where a1 is the name of square. i will be making in total 64 entries for each square. What more data should i have?

const rookWhite = {
  color: "white",
  valid_moves: function () {
    // return an objects of valid moves.
    console.log("valid move");
  },
  piece_value: 5,
  is_alive: true,
};

const rookBlack = {
  color: "black",
  valid_moves: function () {
    // return an objects of valid moves.
    console.log("valid move");
  },
  piece_value: 5,
  is_alive: true,
};

const bishopWhite = {
  color: "white",
  valid_moves: function () {
    // return an objects of valid moves.
    console.log("valid move");
  },
  piece_value: 3,
  is_alive: true,
};

const bishopBlack = {
  color: "black",
  valid_moves: function () {
    // return an objects of valid moves.
    console.log("valid move");
  },
  piece_value: 3,
  is_alive: true,
};

const pawnWhite = {
  color: "white",
  valid_moves: function () {
    // return an objects of valid moves.
    console.log("valid move");
  },
  piece_value: 1,
  is_alive: true,
};

const pawnBlack = {
  color: "black",
  valid_moves: function () {
    // return an objects of valid moves.
    console.log("valid move");
  },
  piece_value: 1,
  is_alive: true,
};

const knightWhite = {
  color: "white",
  valid_moves: function () {
    // return an objects of valid moves.
    console.log("valid move");
  },
  piece_value: 3,
  is_alive: true,
};

const knightBlack = {
  color: "black",
  valid_moves: function () {
    // return an objects of valid moves.
    console.log("valid move");
  },
  piece_value: 3,
  is_alive: true,
};

const queenWhite = {
  color: "white",
  valid_moves: function () {
    // return an objects of valid moves.
    console.log("valid move");
  },
  piece_value: 9,
  is_alive: true,
};

const queenBlack = {
  color: "black",
  valid_moves: function () {
    // return an objects of valid moves.
    console.log("valid move");
  },
  piece_value: 9,
  is_alive: true,
};

const kingWhite = {
  color: "white",
  valid_moves: function () {
    // return an objects of valid moves.
    console.log("valid move");
  },
  piece_value: 1000,
  is_alive: true,
};

const kingBlack = {
  color: "black",
  valid_moves: function () {
    // return an objects of valid moves.
    console.log("valid move");
  },
  piece_value: 1000,
  is_alive: true,
};

// way-1 of storing the config of chessbaord using objects
const chess_board = {
  a8: {
    piece: rook,
    sq_color: "white",
    is_empty: false,
  },
  a6: {
    piece: {},
    sq_color: "white",
    is_empty: true,
  },
};
