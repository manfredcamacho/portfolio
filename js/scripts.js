/**
  * SCRIPT FOR TOGGLE MENU MOBILE
*/


const menuItems = document.getElementById("menu-items");
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");


const toggle = () => {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
  menu.classList.toggle("active");
  menuItems.classList.toggle("hide");
}

const closeMenu = () => {
  if(menuIcon.classList.contains("fa-times"))
    toggle();
}


/** 
 * SCRIPT FOR HIGHLIGHT MENU IN SPA APPLICATION
*/

const aboutMe = document.getElementById("about-me");
const aboutMeLink = document.getElementById("home-link");
const workExperience = document.getElementById("work-experience");
const workExperienceLink = document.getElementById("work-experience-link");
const projects = document.getElementById("projects");
const projectsLink = document.getElementById("projects-link");
const contactMe = document.getElementById("contact-me"); 
const contactMeLink = document.getElementById("contact-me-link"); 

const pages = [
  {
    name: 'About Me',
    element: aboutMe,
    coordStartY: 0,
    coordEndY: Math.abs(parseFloat(workExperience.getBoundingClientRect().top)),
    link: aboutMeLink
  },
  {
    name: 'Work Experience',
    element: workExperience,
    coordStartY: Math.abs(workExperience.getBoundingClientRect().top),
    coordEndY: Math.abs(projects.getBoundingClientRect().top),
    link: workExperienceLink
  },
  {
    name: 'Projects',
    element: projects,
    coordStartY: Math.abs(projects.getBoundingClientRect().top),
    coordEndY: Math.abs(contactMe.getBoundingClientRect().top),
    link: projectsLink
  },
  {
    name: 'Contact Me',
    element: contactMe,
    coordStartY: Math.abs(contactMe.getBoundingClientRect().top),
    coordEndY: Number.MAX_SAFE_INTEGER,
    link: contactMeLink
  }
]

let currentPage = pages[0];
currentPage.link.classList.add("selected");

window.addEventListener("scroll", () =>{
  const currentPage = pages.find( page => scrollY < page.coordEndY);
  setCurrentPage(currentPage);
});

const setCurrentPage = page => {
  currentPage.link.classList.remove("selected");
  currentPage = page;
  currentPage.link.classList.add("selected")
};



