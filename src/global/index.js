// all variables are here...
const ham = document.getElementById('hamburger');
const burger = document.getElementById('burger');
const dark_mode_switcher = document.getElementById('theme_switcher'); 
// const userTheme = localStorage.getItem('theme');
// const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

//Navbar toggle...
ham.addEventListener('click', () => {
	burger.classList.toggle('active');
});

// theme toggle
dark_mode_switcher.addEventListener('click', () => {
	if (document.documentElement.classList.contains('dark')) {
		document.documentElement.classList.remove('dark');
		return;
	}else {
		document.documentElement.classList.add('dark');
	}
});







