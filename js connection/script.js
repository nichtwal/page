let burger = document.querySelector('.nav_list');
let burger_item = document.querySelector('.small_menu');

document.addEventListener('click',menu);

function menu (event) {
    if (event.target.closest('.small_menu')) {
        burger.classList.toggle('_active');
        if (burger.classList.contains('_active')) {
            burger_item.style.display = "none";
        }
    }
    if (!event.target.closest('.small_menu')) {
        burger.classList.remove('_active');
        if (!burger.classList.contains('_active')) {
            burger_item.removeAttribute('style');
        }
    }
}