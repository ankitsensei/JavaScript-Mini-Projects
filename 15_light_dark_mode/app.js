const darkMode = document.querySelector('.fa-moon');
const lightMode = document.querySelector('fa-sun');
darkMode.addEventListener('click', (e) => {
    e.preventDefault();
    darkMode.classList.remove('fa-moon');
    darkMode.classList.add('fa-sun');
});
lightMode.addEventListener('click', (e) => {
    e.preventDefault();
    lightMode.classList.remove('fa-sun');
    lightMode.classList.add('fa-moon');
});
