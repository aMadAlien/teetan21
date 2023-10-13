const iconMenu = document.querySelector('.header__nav-menu-icon');
const menuBody = document.querySelector('.header__nav-items');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}