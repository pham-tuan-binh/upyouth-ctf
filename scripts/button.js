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

// This part is just giberish to try to defer you from finding the directly
function _0x2b9f(_0x3be5a6, _0x4bc51a) {
  const _0x2b9f91 = _0x4bc5();
  return (
    (_0x2b9f = function (_0x4ef7df, _0x18642a) {
      _0x4ef7df = _0x4ef7df - 0x8f;
      let _0x564bb0 = _0x2b9f91[_0x4ef7df];
      return _0x564bb0;
    }),
    _0x2b9f(_0x3be5a6, _0x4bc51a)
  );
}
function _0x4bc5() {
  const _0x5af8b6 = ["https://tally.so/r/wzY6dZ", "href", "split"];
  _0x4bc5 = function () {
    return _0x5af8b6;
  };
  return _0x4bc5();
}

function getURL() {
  const _0x2f9f44 = _0x2b9f;
  let _0x3a3525 = _0x2f9f44(0x8f),
    _0x3768fa = window["location"][_0x2f9f44(0x90)],
    _0x223a94 = _0x3768fa[_0x2f9f44(0x91)]("?")[0x1];
  return _0x223a94
    ? _0x3a3525 + "?" + _0x223a94
    : _0x3a3525 +
        "?utm_campaign=where&utm_source=did&utm_medium=you&utm_content=this";
}

if (window.mobileAndTabletCheck()) {
  button.addEventListener("click", () => {
    randomizeButton();
  });
} else {
  button.addEventListener("click", () => {
    window.open(getURL());
  });
}

button.addEventListener("mouseover", () => {
  randomizeButton();
});
