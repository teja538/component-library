const snackbar = document.querySelector(".snackbar")
const snackbarBottom = document.querySelector(".snackbar-bottom")
const btn = document.querySelector(".snackbar-btn")
const btn2 = document.querySelector(".snackbar-btn2")

const clickHandler = () =>
{
    snackbar.style.visibility = "visible"
    setTimeout(()=>{snackbar.style.visibility = "hidden"},3000)
}
const clickHandler2 = () =>
{
    console.log("hii")
    snackbarBottom.style.visibility = "visible"
    setTimeout(()=>{snackbarBottom.style.visibility = "hidden"},3000)
}

btn.addEventListener("click",clickHandler)
btn2.addEventListener("click",clickHandler2)
