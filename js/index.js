let hamburger = document.querySelector(".hamburgerx");
let menu = document.querySelector(".menu-Wrapper");
let openDropButton = document.querySelector(".drop-wrp");
let dropMenu = document.querySelector(".drop-down-menu"); //!
let menuResourImg = document.querySelectorAll(".res");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

openDropButton.addEventListener("click", () => {
  dropMenu.classList.toggle("mobile-active");
  Check();
});


window.addEventListener("click", (e) => {
  if (menu.classList.contains("active") && e.target !== hamburger) {
    menu.classList.remove("active");
  }

  if (
    dropMenu.classList.contains("mobile-active") &&
    e.target !== openDropButton
  ) {
    dropMenu.classList.remove("mobile-active");
  }

  Check();
});

function Check() {
  if (dropMenu.classList.contains("mobile-active")) {
    menuResourImg.forEach((item) =>{
      item.style.transform = "rotate(180deg)";
    })
  } else {
    menuResourImg.forEach((item) =>{
      item.style.transform = "rotate(0)";
    })
  }
}


