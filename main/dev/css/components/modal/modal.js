const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal-with-btn")
const modalBtn = document.querySelector(".modal-btn");
const close1 = document.querySelector(".close-modal")
const close2 = document.querySelector(".close-modal2")
const modalBtn2 = document.querySelector(".modal-with-btn-btn")
const modalWithBtn = document.querySelector(".modal-with-btn");
const accept = document.querySelector(".accept");

function displayBlock() {
    modal.style.display = "block";
}

function displayNone() {
    modal.style.display = "none"
}

function displayBlock2() {
    modal2.style.display = "block";
}

function displayNone2() {
    modal2.style.display = "none"
}

modalBtn.addEventListener("click", displayBlock)
close1.addEventListener("click", displayNone)
modalBtn2.addEventListener("click", displayBlock2)
close2.addEventListener("click", displayNone2)
accept.addEventListener("click", displayNone2)