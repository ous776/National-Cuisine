
const nav = document.querySelector(".nav");
    searchIcon = document.querySelector("#searchIcon");
    navOpen = document.querySelector(".navOpenBtn");
    navClose = document.querySelector(".navCloseBtn");


searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");

    if (nav.classList.contains("openSearch")) {
        return searchIcon.classList.replace("uil-search", "uil-times");
    }

    searchIcon.classList.replace("uil-times", "uil-search");
});

navOpen.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
}); 

navClose.addEventListener("click", () => {
    nav.classList.remove("openNav");

});