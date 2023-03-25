const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

generateNumber = () => {

    const randomNumber = Math.floor(Math.random() * 100 + 1);
    number.innerHTML = randomNumber;
    number.style.color = "red";
}

btn.addEventListener("click", generateNumber);