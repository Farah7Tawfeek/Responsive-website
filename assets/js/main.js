// target.addEventListener(type, listener [, options]);

document.addEventListener("DOMContentLoaded", () => {

    function getHtmlElement(className) {    
        return document.querySelector(className);
    }

    const menuElement = getHtmlElement(".menu");
    const slideMenuElement = getHtmlElement(".slide-menu");
    const closeIconElement = getHtmlElement(".close-menu");

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
