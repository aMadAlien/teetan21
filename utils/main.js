// menu open-close
const iconMenu = document.querySelector('.header__nav-menu-icon');
const menuBody = document.querySelector('.header__nav-items');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


// carousel
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const gallery = document.querySelector('.verticals__carousel-gallery');
const galleryList = document.querySelector('.verticals__carousel-items');
const scrollWidth = 310;

btnPrev.addEventListener("click", function () {
    gallery.scrollBy({
        left: -scrollWidth,
        behavior: 'smooth'
    });

    btnNext.classList.remove("no-active");
    btnPrev.classList.toggle("no-active", gallery.scrollLeft <= scrollWidth);
});

btnNext.addEventListener("click", function () {
    gallery.scrollBy({
        left: scrollWidth,
        behavior: 'smooth'
    });

    btnPrev.classList.remove("no-active");
    btnNext.classList.toggle("no-active", galleryList.clientWidth - (gallery.scrollLeft + scrollWidth) < gallery.clientWidth);
});