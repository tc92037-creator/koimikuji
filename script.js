const fortunes =[
    "大吉　素敵な出会いがあるかも！",
    "中吉　少し勇気を出すと良いことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう",
    "あったリーーーー！！"
];

const button = document.getElementById("omikuji-bt");
const omikujiImg = document.getElementById("omikuji-img");
const result = document.getElementById("result");
const advice = document.getElementById("advice");

omikujiImg.innerHTML ="<img src='happy.png'>";

button.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * fortunes.length);
    const resultText = fortunes[(randomNumber)];

    result.textContent = fortunes[(randomNumber)];

    if (resultText.includes("大吉")) {
        result.style.color = "red";
        advice.textContent = "今日は積極的に行動しよう";
    } else if (resultText.includes("中吉")) {
        result.style.color = "green";
        advice.textContent = "";
    } else {
        result.style.color = "black";
        advice.textContent = "";
    }
});