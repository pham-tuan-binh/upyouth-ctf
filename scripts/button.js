const button = document.getElementById("jumpy-button");

let { width, height } = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
};

window.addEventListener("resize", () => {
  width = document.documentElement.clientWidth;
  height = document.documentElement.clientHeight;

  randomizeButton();
});

function randomizeButton() {
  const maxX = width - button.clientWidth;
  const maxY = height - button.clientHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
}

randomizeButton();

if (window.mobileAndTabletCheck()) {
  button.addEventListener("click", () => {
    randomizeButton();
  });
} else {
  button.addEventListener("click", () => {
    window.open("https://example.com");
  });
}

button.addEventListener("mouseover", () => {
  randomizeButton();
});
