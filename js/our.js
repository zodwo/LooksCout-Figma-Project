
const header = document.querySelector("#head");
const headerList = document.querySelector(".drop-down-menu");
const darkLOGO = document.querySelectorAll(".dark");
const whiteLOGO = document.querySelectorAll(".white");
const menuColor = document.querySelector(".menu-Wrapper");


window.addEventListener("scroll", checkscrool);

checkscrool();

function checkscrool() {
  const main_scrol = 601;
  const trigger_scrool = document.documentElement.scrollTop;

  if ( trigger_scrool >= main_scrol) {
    hamburger.style.color = "#000"
    header.style.borderColor = "#eaebf0"
    header.style.backgroundColor = "#f8f9fb";
    headerList.style.backgroundColor = "#f8f9fb";
    menuColor.classList.remove("color-active");

    darkLOGO.forEach((item) => {
      item.style.display = "block";
    });

    whiteLOGO.forEach((item) => {
      item.style.display = "none";
    });
  } else {
    hamburger.style.color = "#fff"
    header.style.borderColor = "#2e3545"
    header.style.backgroundColor = "#2d3642";
    headerList.style.backgroundColor = "#2d3642";
    menuColor.classList.add("color-active");

    darkLOGO.forEach((item) => {
      item.style.display = "none";
    });

    whiteLOGO.forEach((item) => {
      item.style.display = "block";
    });
  }
}
