document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const responsiveMenu = document.getElementById('responsive-menu');

    hamburgerMenu.addEventListener('click', function() {
        responsiveMenu.classList.toggle('show');
    });
});
