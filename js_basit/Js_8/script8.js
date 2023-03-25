const hex = document.querySelector('.hex');
const word = document.querySelector('.form-control');

word.addEventListener('keyup', () => {
    hex.innerHTML = word.value.length;
})


//const count = document.querySelector(".count");
// const input = document.querySelector("input");

// input.addEventListener("keyup", fff);

// function fff() {
//     count.innerHTML = input.value.length;
// }
