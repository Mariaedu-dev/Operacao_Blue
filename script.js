function abrirCarta() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    soltarConfete();
  }
}

function soltarConfete() {
  const container = document.querySelector(".confetti-container");

  for (let i = 0; i < 40; i++) {
    const confete = document.createElement("div");
    confete.classList.add("confetti");

    confete.style.left = Math.random() * 100 + "vw";
    confete.style.backgroundColor = coresAleatorias();
    confete.style.animationDuration = (Math.random() * 2 + 2) + "s";

    container.appendChild(confete);

    setTimeout(() => {
      confete.remove();
    }, 4000);
  }
}

function coresAleatorias() {
  const cores = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#818cf8", "#a5b4fc"];
  return cores[Math.floor(Math.random() * cores.length)];
}
