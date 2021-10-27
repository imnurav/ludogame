// console.log("ludo game");

$(document).ready(function () {
  $("button").on("click", () => {
    const player1 = Math.floor(Math.random() * 6) + 1;
    const player2 = Math.floor(Math.random() * 6) + 1;
    const player1dice = "/dice" + player1 + ".png";
    const player2dice = "/dice" + player2 + ".png";
    $("#check1").attr("src", player1dice);
    $("#check2").attr("src", player2dice);
    if (player1 > player2) {
      $("#change").text("PLAYER 1 WON :)");
    } else if (player1 < player2) {
      $("#change").text("PLAYER 2 WON :)");
    } else {
      $("#change").text("DRAW");
    }
  });
});
