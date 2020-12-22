// target.addEventListener(type, listener [, options]);

document.addEventListener("DOMContentLoaded", () => {

    const menuElement = document.querySelector(".menu");
    const slideMenuElement = document.querySelector(".slide-menu");
    const closeIconElement = document.querySelector(".close-menu");

    if ( menuElement && slideMenuElement ) {
        menuElement.addEventListener("click", () => {
            slideMenuElement.classList.add("active");
        })
    }

    if ( closeIconElement && slideMenuElement ) {
        closeIconElement.addEventListener("click", () => {
            slideMenuElement.classList.remove("active");
        })
    }
} );
