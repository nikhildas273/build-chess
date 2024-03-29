import { valid_rook_moves } from "./rules.js";
const squares = document.querySelectorAll(".sq");
let clickCount = 0;
let move_piece = null;
// let possible_move = [];
let possible_move = {}; // key;value pair,a5:true then that means a5 is
// chatGpt approach to move pieces

squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    clickCount++;
    if (clickCount === 1) {
      // select piece to move
      move_piece = e.currentTarget;
      if (move_piece.childElementCount == 1) {
        // if user is clicking in empty box then don't do all this
        //console.log("The box is empty");
        clickCount = 0;
      } else {
        const [curr_piece, start_pos] =
          move_piece.firstElementChild.id.split("_");
        const curr_pos = move_piece.lastElementChild.innerText;
      }
    } else if (clickCount === 2) {
      // move to the position coz user has selected a valid empty sqaure.
      console.log(
        possible_move.includes(e.currentTarget.lastElementChild.textContent),
        possible_move
      );
      // checking if the final position of the piece we select is a valid move for the piece.
      if (
        possible_move.includes(e.currentTarget.lastElementChild.textContent)
      ) {
        if (move_piece.firstElementChild) {
          e.currentTarget.insertAdjacentElement(
            "afterbegin",
            move_piece.firstElementChild
          );
        }
      }
      clickCount = 0;
    }
  });
});
