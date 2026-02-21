const texts = ["Hello Cutuuu 👋", "Welcome to my little world 💙"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  const currentText = texts[textIndex];
  if (charIndex < currentText.length) {
    document.getElementById("typing").innerHTML += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 90);
  } else {
    setTimeout(eraseEffect, 1200);
  }
}

function eraseEffect() {
  const el = document.getElementById("typing");
  if (el.innerHTML.length > 0) {
    el.innerHTML = el.innerHTML.slice(0, -1);
    setTimeout(eraseEffect, 50);
  } else {
    charIndex = 0;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 400);
  }
}

typeEffect();