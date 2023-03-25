const count = document.querySelector('.count');
const sub = document.querySelector('.subtract');
const reset = document.querySelector('.reset');
const add = document.querySelector('.add');

const clr = () => {
    if(count.innerHTML > 0){
        count.style.color = 'blue'
    }
    else if(count.innerHTML < 0){
        count.style.color = 'red'
    }
    else{
        count.style.color = 'yellow'
    }
}

sub.addEventListener('click', () =>{
    count.innerHTML--;
    clr();
})

reset.addEventListener('click', () =>{
    count.innerHTML = 0;
    clr();
})

add.addEventListener('click', () =>{
    count.innerHTML++;
    clr();
})
































// const count = document.querySelector('.count');
// const sub = document.querySelector('.subtract');
// const resetCount = document.querySelector('.reset');
// const add = document.querySelector('.add');

// sub.addEventListener("click", () => {
//     count.innerHTML--;
//     setColor();
// });

// resetCount.addEventListener("click", () => {
//     count.innerHTML = 0;
//     setColor();
// });

// add.addEventListener("click", () => {
//     count.innerHTML++;
//     setColor();
// });

// function setColor() {
//     if(count.innerHTML > 0){
//         count.style.color = "yellow";
//     }
//     else if(count.innerHTML < 0){
//         count.style.color = "orangered";
//     }
//     else{
//         count.style.color = "#fff";
//     }
// }