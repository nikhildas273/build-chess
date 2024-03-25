const possible_move = [];

export const rules = (curr_piece, start_pos, curr_pos) => {
  switch (curr_piece) {
    case "pawn":
      valid_pawn_moves(curr_pos);
      break;
    case "knight":
      break;
    case "rook":
      valid_rook_moves(curr_pos);
      break;
    case "bishop":
      break;
    case "queen":
      break;
    case "king":
      break;
    default:
      break;
  }
};

function valid_pawn_moves(curr_pos) {
  const row = curr_pos[1];
  const col = curr_pos[0];
  if (curr_pos === start_pos) {
  }
}

function valid_rook_moves(curr_pos) {
  const col = curr_pos[0]; // numbers
  const row = curr_pos[1]; // alphabets

  //rook moves in straigth line so it is farily simple to change the rows and columns.

  for (let i = 1; i < 9; i++) possible_move.push(col + i);
}

export default possible_move;
