const opennav = document.getElementById("hamburger")
const bar = document.getElementById("navbar")

//Open navbar menu
opennav.addEventListener("click", () => {
  bar.classList.toggle("active")

  if (closenav.style.cursor !== "pointer") {
    closenav.style.cursor = "pointer"
  }
})

//Close navbar menu
const closenav = document.getElementById("closenav")

closenav.addEventListener("click", () => {
  //some fucking logic for my ego
  if (bar.classList.contains("active")) {
    bar.classList.remove("active")
    closenav.style.cursor = "default"
  }
})

