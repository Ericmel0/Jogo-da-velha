let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//contador de rodadas
let player1 = 0;
let player2 = 0;

//Evento de click nos boxes
for (let i = 0; i < boxes.length; i++) {
  // quando clicar na caixa
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);
    //verifica se já tem x ou o

    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);

      //computar jogada
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }

      //checa quem venceu
      checkWinCondition();
    }
  });
}

//quem vai jogar
function checkEl(player1, player2) {
  if (player1 == player2) {
    el = x;
  } else {
    el = o;
  }
  return el;

  //checa quem venceu
}
function checkWinCondition() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  //horizontal
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1child = b1.childNodes[0].className;
    let b2child = b2.childNodes[0].className;
    let b3child = b3.childNodes[0].className;

    if (b1child == "x" && b2child == "x" && b3child == "x") {
      console.log("x venceu");
    } else if (b1child == "o" && b2child == "o" && b3child == "o") {
      console.log("o venceu");
    }
  }
  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4child = b4.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b6child = b6.childNodes[0].className;

    if (b4child == "x" && b5child == "x" && b6child == "x") {
      console.log("x venceu");
    } else if (b1child == "o" && b2child == "o" && b3child == "o") {
      console.log("o venceu");
    }
  }
}
