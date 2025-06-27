// criar elemento
function createElement(element, elementClass) {
  const elemento = document.createElement(element);
  elemento.className = elementClass;
  return elemento;
}
// Barreira
function Barreira(reverse = false) {
  this.elemento = createElement("div", "barreira");

  const corpo = createElement("div", "corpo");
  const borda = createElement("div", "borda");

  this.elemento.appendChild(reverse ? corpo : borda);
  this.elemento.appendChild(reverse ? borda : corpo);

  this.setAltura = (altura) => (corpo.style.height = `${altura}px`);
}
//Par de Barreiras
function ParDeBarreira(altura, abertura, x) {
  this.elemento = createElement("div", "par-de-barreiras");

  this.superior = new Barreira(true);
  this.inferior = new Barreira(false);

  this.elemento.appendChild(this.superior.elemento);
  this.elemento.appendChild(this.inferior.elemento);

  this.calcularAbertura = () => {
    const alturaSuperior = Math.random() * (altura - abertura);
    const alturaInferior = altura - abertura - alturaSuperior;
    this.superior.setAltura(alturaSuperior);
    this.inferior.setAltura(alturaInferior);
  };

  this.getX = () => parseInt(this.elemento.style.left.split("px")[0]);
  this.setX = (x) => (this.elemento.style.left = `${x}px`);

  this.getComprimento = () => this.elemento.clientWidth;

  this.calcularAbertura();
  this.setX(x);
}

// Animar Barreiras
function Barreiras(altura, abertura, largura, espaco, notificarPontos) {
  this.pares = [
    new ParDeBarreira(altura, abertura, largura),
    new ParDeBarreira(altura, abertura, largura + espaco),
    new ParDeBarreira(altura, abertura, largura + espaco * 2),
    new ParDeBarreira(altura, abertura, largura + espaco * 3),
  ];

  const deslocamento = 3;
  this.animar = () => {
    this.pares.forEach((par) => {
      par.setX(par.getX() - deslocamento);

      if (par.getX() - deslocamento < -par.getComprimento()) {
        par.setX(par.getX() + espaco * this.pares.length);
        par.calcularAbertura();
      }

      const meio = largura / 2;
      const passou = par.getX() + deslocamento >= meio && par.getX() < meio;
      if (passou) notificarPontos();
    });
  };
}

// Passaro
function Passaro(alturaDoJogo) {
  let voando = false;

  this.elemento = createElement("img", "passaro");
  this.elemento.src = "imgs/passaro.png";

  this.getY = () => parseInt(this.elemento.style.bottom.split("px")[0]);
  this.setY = (y) => (this.elemento.style.bottom = `${y}px`);

  window.onkeydown = (e) => (voando = true);
  window.onkeyup = (e) => (voando = false);

  this.animar = () => {
    const novoY = this.getY() + (voando ? 8 : -5);
    const alturaMaxima = alturaDoJogo - this.elemento.clientHeight - 5;
    if (novoY >= alturaMaxima) {
      this.setY(alturaMaxima);
    } else if (novoY <= 0) {
      this.setY(0);
    } else {
      console.log("alo");
      this.setY(novoY);
    }
  };

  this.setY(alturaDoJogo / 2);
}

// Progresso
function Progresso() {
  this.elemento = createElement("span", "progresso");
  this.addPontos = (pontos) => (this.elemento.innerHTML = pontos);
  this.addPontos(0);
}

// Colisão
function checkColisao(elementA, elementB) {
  const rectA = elementA.getBoundingClientRect();
  const rectB = elementB.getBoundingClientRect();

  const horizontal =
    rectA.left + rectA.width >= rectB.left &&
    rectB.left + rectB.width >= rectA.left;
  const vertical =
    rectA.top + rectA.height >= rectB.top &&
    rectB.top + rectB.height >= rectA.top;
  return horizontal && vertical;
}

function colisao(passaro, barreiras) {
  let colidiu = false;
  barreiras.pares.forEach((par) => {
    if (!colidiu) {
      const superior = par.superior.elemento;
      const inferior = par.inferior.elemento;
      colidiu =
        checkColisao(passaro.elemento, superior) ||
        checkColisao(passaro.elemento, inferior);
    }
  });
  return colidiu;
}

// JOGO
function FlappyBird() {
  let pontos = 0;
  const gameBackground = document.querySelector("[wm-flappy]");
  const alturaJogo = gameBackground.clientHeight;
  const larguraJogo = gameBackground.clientWidth;

  const progresso = new Progresso();
  const barreiras = new Barreiras(alturaJogo, 200, larguraJogo, 400, () =>
    progresso.addPontos(++pontos)
  );
  const passaro = new Passaro(alturaJogo);

  gameBackground.appendChild(progresso.elemento);
  gameBackground.appendChild(passaro.elemento);
  barreiras.pares.forEach((par) => gameBackground.appendChild(par.elemento));

  this.start = () => {
    const temporizador = setInterval(() => {
      barreiras.animar();
      passaro.animar();
      if (colisao(passaro, barreiras)) {
        clearInterval(temporizador);
      }
    }, 20);
  };
}
new FlappyBird().start();

/* function createElement(typeName, elementClass) {
  let element = document.createElement(typeName);
  element.className = elementClass;
  return element;
}

// consts
const menu = document.querySelector("[wm-flappy]");
const background = createElement("div", "menu");
const bird = createElement("img", "bird");
bird.src = "./imgs/passaro.png";

// Cano
const canoCompleto = createElement("div", "cano-completo");
const cano = createElement("div", "cano");
const canoFinal = createElement("div", "cano-complemento");
canoCompleto.appendChild(cano);
canoCompleto.appendChild(canoFinal);

const canoCompleto2 = createElement("div", "cano-completo");
const cano2 = createElement("div", "cano");
const canoFinal2 = createElement("div", "cano-complemento");
canoCompleto2.appendChild(cano2);
canoCompleto2.appendChild(canoFinal2);
canoCompleto2.style.flexDirection = "Column";

const conjuntoCanoCompleto = createElement("div", "conjunto-canos");

// Contador
let contador = createElement("div", "contador");
contador.innerHTML = "0";
conjuntoCanoCompleto.appendChild(canoCompleto2);
conjuntoCanoCompleto.appendChild(canoCompleto);
conjuntoCanoCompleto.style.left = "99999px";
background.appendChild(contador);
background.appendChild(bird);
background.appendChild(conjuntoCanoCompleto);

menu.appendChild(background);

var rects = [];
var canoFinalRect = [];
var canoRect = [];
var perdeu = false;
var calma = false;
var pontos = 0;
let interval;
let teste;
let teste2;
window.onresize = () => {
  rects = background.getClientRects();
  canoFinalRect = canoFinal.getClientRects();
  canoRect = cano.getClientRects();
  canoFinalRect2 = canoFinal2.getClientRects();
  canoRect2 = cano2.getClientRects();
};

function main() {
  rects = background.getClientRects();
  canoFinalRect = canoFinal.getClientRects();
  canoRect = cano.getClientRects();
  canoFinalRect2 = canoFinal2.getClientRects();
  canoRect2 = cano2.getClientRects();

  canoCompleto.style.height = `${(rects[0].height - 5) / 2}px`;
  canoCompleto2.style.height = `${(rects[0].height - 5) / 2}px`;
  passaroClick();
  passaroCair();
  canoAparecer(conjuntoCanoCompleto, canoCompleto, canoCompleto2);
}

function canoAparecer(con, pri, seg) {
  con.style.left = `${rects[0].width / 1.6}px`;
  teste = setInterval(() => {
    canoFinalRect = canoFinal.getClientRects();
    canoRect = cano.getClientRects();
    canoFinalRect2 = canoFinal2.getClientRects();
    canoRect2 = cano2.getClientRects();
    con.style.left = `${parseFloat(con.style.left) - rects[0].width / 20}px`;
    if (perdeu) {
      return clearInterval(teste);
    }

    if (Math.abs(parseFloat(con.style.left)) >= rects[0].width / 1.6) {
      con.style.left = `${rects[0].width / 1.6}px`;

      let random = Math.random();
      let primeiroCano = ((rects[0].height - 5) * (random * 4)) / 2;
      let segundoCano = (rects[0].height - 5) / (random * 4) / 2;

      pri.style.height = `${primeiroCano}px`;
      seg.style.height = `${segundoCano}px`;
    }

    let birdRec = bird.getClientRects()[0];
    if (
      (canoFinalRect[0].x - birdRec.x < 100 &&
        canoFinalRect[0].x - birdRec.x > 0) ||
      (canoFinalRect2[0].x - birdRec.x < 100 &&
        canoFinalRect2[0].x - birdRec.x > 0)
    ) {
      contador.innerHTML = pontos;
      olhaSeBateu();
    }
  }, 150);
}

function olhaSeBateu() {
  teste2 = setInterval(() => {
    if (perdeu) {
      return clearInterval(teste2);
    }
    let canoFinalRect = canoFinal.getClientRects();
    let canoFinalRect2 = canoFinal2.getClientRects();
    let birdRec = bird.getClientRects()[0];

    if (
      canoFinalRect[0].x - birdRec.x < 0 ||
      canoFinalRect2[0].x - birdRec.x < 0 ||
      canoFinalRect[0].x - birdRec.x > 100 ||
      canoFinalRect2[0].x - birdRec.x > 100
    ) {
      return clearInterval(teste2);
    }

    if (
      (parseFloat(birdRec.bottom) >= canoFinalRect[0].top &&
        canoFinalRect[0].y - birdRec.y < 0) ||
      (parseFloat(birdRec.top) >= canoFinalRect2[0].bottom &&
        canoFinalRect2[0].y < 0 - birdRec.y) ||
      (parseFloat(birdRec.right) >= canoRect[0].left &&
        canoFinalRect[0].y - birdRec.y < 0) ||
      (parseFloat(birdRec.right) >= canoRect2[0].left &&
        canoFinalRect2[0].y < 0 - birdRec.y)
    ) {
      clearInterval(teste2);
      perdeu = true;
    }
  }, 10);
}

function passaroClick() {
  document.querySelector("body").addEventListener("keydown", (e) => {
    if (perdeu) {
      pontos = 0;
      clearInterval(interval);
      clearInterval(teste);
      clearInterval(teste2);
      passaroCair();
      canoAparecer(conjuntoCanoCompleto, canoCompleto, canoCompleto2);
      perdeu = false;

      return (contador.innerHTML = 0);
    }
    bird.style.top = `${
      parseFloat(bird.style.top) - 85 < rects[0].top
        ? rects[0].top
        : parseFloat(bird.style.top) - 70
    }px`;
  });
}
var a = 0;
function passaroCair() {
  bird.style.top = `${rects[0].top}px`;
  interval = setInterval(() => {
    console.log("vish");
    console.log(perdeu);
    if (perdeu) {
      clearInterval(interval);
      return console.log("papaamare");
      return jogoAcabou();
    }
    bird.style.top = `${parseFloat(bird.style.top) + 50}px`;

    if (
      parseFloat(bird.style.top) +
        parseFloat(bird.getClientRects()[0].height) >=
      rects[0].height
    ) {
      bird.style.top = `${
        rects[0].height - bird.getClientRects()[0].height - 5
      }px`;
      clearInterval(interval);
      perdeu = true;
    }
  }, 150);
}

function jogoAcabou() {
  perdeu = false;
  contador.innerHTML = 0;
}

window.onload = () => {
  main();
};
*/
