const squares = document.querySelectorAll(".sq");
// let pawn1 = document.querySelector("#a7").firstElementChild;

// console.log(pawn1);

// let loc = document.querySelector("#a5");
// loc.appendChild(pawn1);

// select element to move
let let_move;
squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    let_move = e.currentTarget.innerHTML;
    console.log(let_move);
    // if (let_move) {
    //   squares.forEach((square) => {
    //     square.addEventListener("click", (e) => {
    //       console.log(e.target.appendChild(let_move));
    //     });
    //   });
    // } else {
    //   console.log("no element selected");
    // }
  });
});

// Try to get location using onClick from user

// console.log(squares);
if (let_move !== null) {
  squares.forEach((square) => {
    square.addEventListener("click", (e) => {
      e.currentTarget.innerHTML = let_move;
    });
  });
} else {
  console.log("no element selected");
}
