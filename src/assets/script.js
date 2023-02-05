const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");
const navOpen = document.querySelector(".navOpenBtn");
const navClose = document.querySelector(".navCloseBtn");

if (searchIcon) {
  searchIcon.addEventListener("click", () => {
      nav.classList.toggle("openSearch");
      nav.classList.remove("openNav");

      if (nav.classList.contains("openSearch")) {
          return searchIcon.classList.replace("uil-search", "uil-times");
      }

      searchIcon.classList.replace("uil-times", "uil-search");
  });
}

if (navOpen) {
  navOpen.addEventListener("click", () => {
      nav.classList.add("openNav");
      nav.classList.remove("openSearch");
      searchIcon.classList.replace("uil-times", "uil-search");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
      nav.classList.remove("openNav");
  });
}
