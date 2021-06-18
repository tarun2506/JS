const text = document.querySelector(".fancy");
const strText = text.innerText;
const splitText = strText.split("");
text.innerText = "";

splitText.forEach((txt, index) => {
  text.innerHTML += `<span> ${splitText[index]} </span>`;
});

const onTick = () => {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
};

const complete = () => {
  clearInterval(timer);
  timer = null;
};

let char = 0;

let timer = setInterval(onTick, 50);
