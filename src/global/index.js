const ham = document.getElementById("hamburger")
const opnav = document.getElementById("menu-items")

ham.addEventListener("click", () => {
    opnav.classList.toggle("active")
    ham.classList.toggle("change")
})
