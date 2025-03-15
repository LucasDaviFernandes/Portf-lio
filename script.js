const words = ["Programador", "Web Developer", "3D Modeler"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; // Velocidade de digitação
const delayAfterTyping = 1500; // Pausa após escrever a palavra

function typeEffect() {
  const typingElement = document.querySelector(".typing-text");
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    // Adiciona caracteres
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayAfterTyping); // Espera antes de apagar
      return;
    }
  } else {
    // Remove caracteres
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Muda para a próxima palavra
    }
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();

var all = document.getElementById("all");
var navega = document.getElementById("navega");
var tudao = document.getElementById("tudao");
var mostrar = false;

function barmostrar() {
  mostrar = !mostrar;
  if (mostrar) {
    navega.style.marginLeft = "-10vw";
    navega.style.animationName = "mostrar";
    tudao.style.filter = "blur(2px)";
  } else {
    navega.style.marginLeft = "-100vw";
    navega.style.animationName = "";
    tudao.style.filter = "";
  }
}
function fechar() {
  if (mostrar) {
    barmostrar();
  }
}
window.addEventListener("resize", function (event) {
  if (window.innerWidth > 768 && mostrar) {
    barmostrar();
  }
});
