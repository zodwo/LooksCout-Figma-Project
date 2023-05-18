const header = document.querySelector("#head");
const headerList = document.querySelector(".drop-down-menu");
const darkLOGO = document.querySelectorAll(".dark");
const whiteLOGO = document.querySelectorAll(".white");
const menuColor = document.querySelector(".menu-Wrapper");
const SignColor = document.querySelector("#sign");

window.addEventListener("scroll", checkscrool);

checkscrool();

function checkscrool() {
  const pageHeight = document.querySelector(".page-1");

  const main_scrol = pageHeight.offsetHeight;
  const trigger_scrool = document.documentElement.scrollTop;

  if (trigger_scrool >= main_scrol) {
    hamburger.style.color = "#000";
    header.style.borderColor = "#eaebf0";
    header.style.backgroundColor = "#f8f9fb";
    headerList.style.backgroundColor = "#f8f9fb";
    menuColor.classList.remove("color-active");
    SignColor.style.color = "#437EF7";

    darkLOGO.forEach((item) => {
      item.style.display = "block";
    });

    whiteLOGO.forEach((item) => {
      item.style.display = "none";
    });
  } else {
    hamburger.style.color = "#fff";
    header.style.borderColor = "#648ef7";
    header.style.backgroundColor = "#2b63d9";
    headerList.style.backgroundColor = "#2b63d9";
    menuColor.classList.add("color-active");
    SignColor.style.color = "#fff";

    darkLOGO.forEach((item) => {
      item.style.display = "none";
    });

    whiteLOGO.forEach((item) => {
      item.style.display = "block";
    });
  }
}

const rightWidth = document.querySelector(".page-1 .right");

window.addEventListener("resize", () => {
  const mainWidth = 1400;
  const thisWidth = window.innerWidth;

  if (thisWidth <= mainWidth) {
    rightWidth.classList.add("width-sensor");
  } else {
    rightWidth.classList.remove("width-sensor");
  }
});
