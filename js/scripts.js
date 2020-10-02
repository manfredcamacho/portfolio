var menuItems = document.getElementById("menu-items");
var menuIcon = document.getElementById("menu-icon");


const toggle = () => {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
  menuItems.classList.toggle("hide");
}

const closeMenu = () => {
  if(menuIcon.classList.contains("fa-times"))
    toggle();
}