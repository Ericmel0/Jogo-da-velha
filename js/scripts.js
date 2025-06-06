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
  // ao clicar na caixa
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);
    //verificar se já tem x ou o

    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);

      //computar jogada
      if (player1 == player2) {
        player1++;

        if (secondPlayer == "ai-player") {
          //Executar a jogada
          computerPlay();
          player2++;
        }
      } else {
        player2++;
      }

      //checa quem venceu
      checkWinCondition();
    }
  });
}

//Modo de jogo
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    secondPlayer = this.getAttribute("id");

    for (j = 0; j < buttons.length; j++) {
      buttons[j].computedStyleMap.display = "nome";
    }

    setTimeout(function () {
      let container = document.querySelector("#container");
      container.classList.remove("hide");
    });
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

  //checar quem venceu
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
      declareWinner("x");
    } else if (b1child == "o" && b2child == "o" && b3child == "o") {
      declareWinner("o");
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
      declareWinner("x");
    } else if (b4child == "o" && b5child == "o" && b6child == "o") {
      declareWinner("o");
    }
  }
  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7child = b7.childNodes[0].className;
    let b8child = b8.childNodes[0].className;
    let b9child = b9.childNodes[0].className;

    if (b7child == "x" && b8child == "x" && b9child == "x") {
      declareWinner("x");
    } else if (b7child == "o" && b8child == "o" && b9child == "o") {
      declareWinner("o");
    }
  }
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1child = b1.childNodes[0].className;
    let b4child = b4.childNodes[0].className;
    let b7child = b7.childNodes[0].className;

    if (b1child == "x" && b4child == "x" && b7child == "x") {
      declareWinner("x");
    } else if (b1child == "o" && b4child == "o" && b7child == "o") {
      declareWinner("o");
    }
  }
  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2child = b2.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b8child = b8.childNodes[0].className;

    if (b2child == "x" && b5child == "x" && b8child == "x") {
      declareWinner("x");
    } else if (b2child == "o" && b5child == "o" && b8child == "o") {
      declareWinner("o");
    }
  }
  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3child = b3.childNodes[0].className;
    let b6child = b6.childNodes[0].className;
    let b9child = b9.childNodes[0].className;

    if (b3child == "x" && b6child == "x" && b9child == "x") {
      declareWinner("x");
    } else if (b3child == "o" && b6child == "o" && b9child == "o") {
      declareWinner("o");
    }
  }
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1child = b1.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b9child = b9.childNodes[0].className;

    if (b1child == "x" && b5child == "x" && b9child == "x") {
      declareWinner("x");
    } else if (b1child == "o" && b5child == "o" && b9child == "o") {
      declareWinner("o");
    }
  }
  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3child = b3.childNodes[0].className;
    let b5child = b5.childNodes[0].className;
    let b7child = b7.childNodes[0].className;

    if (b3child == "x" && b5child == "x" && b7child == "x") {
      declareWinner("x");
    } else if (b3child == "o" && b5child == "o" && b7child == "o") {
      declareWinner("o");
    }
    //dar velha
    let counter = 0;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].childNodes[0] != undefined) {
        counter++;
      }
    }
    if (counter == 9) {
      declareWinner("Deu velha!");
    }
  }
}

//limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardO = document.querySelector("#scoreboard-2");
  let msg = "";

  if (winner == "x") {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = "O jogador 1 venceu!";
  } else if (winner == "o") {
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    msg = "O jogador 2 venceu!";
  } else {
    msg = "Deu velha!";
  }

  //exibir msg

  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  //esconder msg

  setTimeout(function () {
    messageContainer.classList.add("hide");
  }, 3000);

  //zerar jogadas

  player1 = 0;
  player2 = 0;

  //Limpar jogo
  let boxesToRemove = document.querySelectorAll(".box div");

  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}

//Executar a lógica da jogada
function computerPlay() {
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;

  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);

    //Preencher se estiver vazio
    if (boxes[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }
      //Checar quantas estão preenchidas
    } else {
      filled++;
    }
  }
}

if (counter == 0 && filled < 9) {
  computerPlay();
}
