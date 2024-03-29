const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];

function valid_pawn_moves(curr_pos) {
  const row = curr_pos[1];
  const col = curr_pos[0];
  if (curr_pos === start_pos) {
  }
}

// functions to move the pieces.

function valid_rook_moves(curr_pos) {
  const possible_move = [];
  const col = curr_pos[0]; // alphabet but datatype is strings
  const row = curr_pos[1]; // number but datatype is strings

  //rook moves in straigth line so it is farily simple to change the rows and columns.
  // possible_move.push("h12");
  // ek baar kelte h row k liye dusri baar krlenge col k liye

  // row

  for (let i = 1; i < 9; i++) {
    let move = col + i;
    if (move != curr_pos) possible_move.push(move);
    if (move != curr_pos) continue;
    // if)possible_move[move] = ;
  }

  //col
  for (let i = 0; i < 8; i++) {
    let move = alphabet[i] + row;
    if (move != curr_pos) possible_move.push(move);
  }
  return possible_move;
}

export { valid_rook_moves };
