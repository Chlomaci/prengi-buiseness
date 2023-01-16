const burger = document.querySelector(".hamburger__wrapper"),
    burger_close = document.querySelector(".menu__close"),
    menu_min = document.querySelector(".promo__menu_min");

burger.addEventListener('click', () => {
    burger.classList.remove('active');
    menu_min.classList.add('active');
    burger_close.classList.add('active');
});

burger_close.addEventListener('click', () => {
    burger_close.classList.remove('active');
    menu_min.classList.remove('active');
    burger.classList.add('active');
});