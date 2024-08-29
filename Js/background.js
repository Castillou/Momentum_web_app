/*
    Math.floor(): 소수점 이하를 버림
    Math.round(): 소수점 이하를 반올림
    Math.ceil(): 소수점 이하를 올림
    Math.random(): 0~1 사이의 랜덤한 숫자를 생성

    ※ Math.floor(Math.random() * Number)
    : 0~Number 사이의 랜덤한 숫자를 추출
*/ 

const images = ["0.jpg", "1.jpg", "2.jpg"];
const wrap = document.querySelector(".wrap");

const chosenImage = images[Math.floor(Math.random() * images.length)];

wrap.style.backgroundImage = `url(img/${chosenImage})`;

// const bgImage = document.createElement("img")

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);