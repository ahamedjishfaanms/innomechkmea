function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    var overlay = document.querySelector('.overlay');

    navList.classList.toggle('show');
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
}

function closeMenu() {
    var navList = document.querySelector('.nav-list');
    var overlay = document.querySelector('.overlay');

    navList.classList.remove('show');
    overlay.style.display = 'none';
}
