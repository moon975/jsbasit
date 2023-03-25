const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

btn.addEventListener("click", openModel);
modal.addEventListener("click", closeModel);
close.addEventListener("click", closeModel);

function openModel(e) {
    e.preventDefault();
    modal.style.display = "block";
}

function closeModel() {
    modal.style.display = "none";
}