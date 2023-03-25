const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", fonk);

function fonk() {
    
    let sozcuk = word.value;
    let len = sozcuk.length;

    let start = sozcuk.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = sozcuk.substring(len - Math.floor(len / 2)).toLowerCase();

    let flip = end.split("").reverse().join("");

    if(start == flip){
        result.innerHTML = `${sozcuk.toUpperCase()} is a palindrome`;
    }
    else{
        result.innerHTML = `${sozcuk.toUpperCase()} is NOT a palindrome`;
    }
}
