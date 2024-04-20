AOS.init();
// Navbar code
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

// Menu code
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

// skill append
let skill = [
  {
    name: "c",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png",
  },
  {
    name: "C++",
    image:
      "https://static.vecteezy.com/system/resources/previews/012/697/300/original/3d-c-programming-language-logo-free-png.png",
  },
  {
    name: "HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png",
  },
  {
    name: "CSS",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    name: "Javascript",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    name: "Tailwindcss",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "Bootstrap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  },
  {
    name: "Git",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
  },
  {
    name: "Github",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
  },
  {
    name: "ReactJs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png",
  },
];
let skillBox = document.querySelector(".skillBox");
skill.forEach((e) => {
  let skillCard = document.createElement("div");
  skillCard.setAttribute("data-aos","zoom-out-up");
  skillCard.innerHTML = `
  <img src="${e.image}" alt="" />
  <p>${e.name}</p>
`;
  skillCard.className = "skillCard";
  skillBox.append(skillCard);
});

// project append
let project = [
  {
    name: "Yaudio",
    image: "images/yaudio.png",
    link: "https://yaudio.netlify.app/",
    code: "https://github.com/Sahil1036/Yaudio",
    description:
      "YAudio provides a seamless solution for converting YouTube content into audio files for offline listening.",
  },
  {
    name: "Currency",
    image: "images/currency.png",
    link: "https://moneycurrency.netlify.app/",
    code: "https://github.com/Sahil1036/Currency",
    description:
      "This simple web application allows users to convert currencies dynamically.",
  },
  {
    name: "Foodmania",
    image: "images/food.png",
    link: "https://sahil1036.github.io/food/",
    code: "https://github.com/Sahil1036/food",
  },
  {
    name: "Timeclock",
    image: "images/timeclock.png",
    link: "https://sahil1036.github.io/TimeClock/",
    code: "https://github.com/Sahil1036/TimeClock",
  },
  {
    name: "Letsplay",
    image: "images/letsplay.png",
    link: "https://letsplaymus.netlify.app/",
    code: "https://github.com/Sahil1036/Letsplay",
  },
];
let projectBox = document.querySelector(".projectBox");
project.forEach((e) => {
  let projectCard = document.createElement("div");
  projectCard.setAttribute("data-aos","zoom-out-down");
  projectCard.innerHTML = `
          <a href="${e.link}" target="_blank">
            <div class="overlay"><i class="fa-solid fa-eye"></i></div>
            <img src="${e.image}" alt="" />
          </a>
          <p>${e.name}</p>
          <a href="${e.code}" target="_blank">
            <button>Code</button>
          </a>
`;
  projectCard.className = "projectCard";
  projectBox.append(projectCard);
});
