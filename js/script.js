const menu = document.querySelector('.menu__list');
const burger = document.querySelector('.menu__burger');
burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});


window.onload = function () {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
};