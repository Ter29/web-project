document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.getElementById("burger-menu");
    const navBlock = document.querySelector(".phone__top__header__nav-block");

    if (burgerButton && navBlock) {
        burgerButton.addEventListener("click", function () {
        navBlock.classList.toggle("active");
    });
    } else {
        console.log("Element not found!");
    }
});

