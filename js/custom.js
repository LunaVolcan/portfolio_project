import projectData from "../data/data.js"

console.log(projectData)

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector(".header-burger i");
    const nav = document.querySelector(".bar-nav");
  
    function showHamburger() {
      burger.classList.toggle("fa-times");
      nav.classList.toggle("nav-active");
      console.log("showHamburger");
    }
  
    document.getElementById('hamburgerButton').addEventListener('click', showHamburger);
  });