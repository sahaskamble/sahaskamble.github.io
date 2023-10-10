const ham = document.getElementById('hamburger');
const opnav = document.getElementById('navbar');

ham.addEventListener("click", ()=> { 
    opnav.classList.toggle('active');
    opnav.classList.toggle('hidden');    
    ham.classList.toggle('change');
});
