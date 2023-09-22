const opennav = document.getElementById('hamburger');
const bar = document.getElementById('navbar');

//Open navbar menu
opennav.addEventListener('click', ()=> {
  bar.classList.toggle('active');
  bar.classList.toggle('inactive');
});

//Close navbar menu
const closenav = document.getElementById('closenav');

closenav.addEventListener('click', ()=> {
  bar.classList.toggle('active');
  bar.classList.toggle('inactive');
});
