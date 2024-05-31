document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.getElementById('toggleIcon');
    const body = document.body;

    toggleIcon.addEventListener('click', function () {
        if (toggleIcon.classList.contains('fa-moon')) {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        } else {
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    });
});
