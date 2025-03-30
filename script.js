const burgerButton = document.getElementById("burger-menu");
const navBlock = document.querySelector(".phone__top__header__nav-block");
const body = document.body;

if (burgerButton && navBlock) {
    burgerButton.addEventListener("click", function () {
        navBlock.classList.toggle("active");
        body.classList.toggle("no-scroll"); // Додаємо або прибираємо клас
    });
}

