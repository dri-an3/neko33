const fortunes = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"];
const omikujiPaper = document.getElementById("fortune-text");

function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

function drawOmikuji() {
    const fortune = getRandomFortune();
    omikujiPaper.innerText = fortune;
}

const drawButton = document.getElementById("draw-button");
drawButton.addEventListener("click", () => {
    drawButton.disabled = true;
    omikujiPaper.innerText = "";
    omikujiPaper.classList.add("shaking");

    setTimeout(() => {
        drawOmikuji();
        drawButton.disabled = false;
        omikujiPaper.classList.remove("shaking");
    }, 2000);
});
