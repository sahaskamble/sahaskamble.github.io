const ham = document.getElementById("hamburger");

const navl = document.getElementById("nav-link");

ham.addEventListener("click", () => {
  navl.classList.toggle("active");
});
