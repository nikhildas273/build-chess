import { rules } from "./rules.js";
const squares = document.querySelectorAll(".sq");
let clickCount = 0;
let move_piece = null;

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
        //console.log(curr_piece, start_pos, curr_pos);
        possible_move = rules(curr_piece, start_pos, curr_pos);
        console.log(possible_move);
      }
    } else if (clickCount === 2) {
      // move to the position
      if (move_piece.firstElementChild) {
        e.currentTarget.insertAdjacentElement(
          "afterbegin",
          move_piece.firstElementChild
        );
      }

      clickCount = 0;
    }
  });
});
