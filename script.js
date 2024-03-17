let navbar = document.querySelector("header");
window.onscroll = function () {
  let pos = window.pageYOffset;
  if (pos > 100) {
    navbar.style.position = "fixed";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    navbar.style.bottom = "0";
    navbar.style.transform = "translateY(20px)";
  } else {
    navbar.style.position = "static";
    navbar.style.transform = "translateY(0)";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  }
};

let menu = document.querySelector(".menu");
let menuLine = document.querySelectorAll(".menuLine");
let mobileNavbar = document.querySelector(".mobileNavbar");
menu.addEventListener("click", showMenu);
function showMenu() {
  if (mobileNavbar.style.transform === "scale(1)") {
    mobileNavbar.style.transform = "scale(0)";
    menuLine.forEach((e) => {
      e.style.transform = "none";
    });
  } else {
    mobileNavbar.style.transform = "scale(1)";
    menuLine.forEach((e) => {
      e.style.transform = "rotate(45deg)";
    });
  }
}
