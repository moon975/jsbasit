const word= document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", countVowel);

function countVowel() {
    
    // burada vowelCount deki let yerine const yazarsak calışmaz
    
    let vowelCount = 0;
    let wordVal = word.value.toLowerCase();

    for(let i = 0; i<wordVal.length; i++){
        let letter = wordVal[i];
        if(letter.match(/([a,t,k,ç,q,e,])/)){
            vowelCount++;
        }
    }
    result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`
    // result.innerHTML = `${wordVal} has ${vowelCount} vowels`
}