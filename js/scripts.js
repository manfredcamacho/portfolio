var menu = document.getElementById("menu-items");
var menuIcon = document.getElementById("menu-icon");


const toggle = () => {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
  menu.classList.toggle("hide");
}