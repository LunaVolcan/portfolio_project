import projectData from "../data/data.js"


// hamburger

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


// projects


function logProjects() {
  const projectSection = document.getElementById("projectSection")
  const projects = projectData;
  if (projectSection) {

    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
  
      const card = document.createElement('div');
      card.classList.add('card');
  
      const title = document.createElement('h3');
      title.classList.add('project-text');
      title.textContent = project.title;
  
      const img = document.createElement('img');
      img.src = project.image;
      img.classList.add('project-imgs');
  
      const description = document.createElement('p');
      description.classList.add('project-p');
      description.textContent = project.description;
  
      const link = document.createElement('a');
      link.href = project.link;
      link.target = '_blank';
      link.classList.add('button');
      link.textContent = 'View The Site';
  
      const linkParagraph = document.createElement('p');
      linkParagraph.appendChild(link);
  
      card.appendChild(title);
      card.appendChild(img);
      card.appendChild(description);
      card.appendChild(linkParagraph);
  
      projectSection.appendChild(card);
    }
  }
}

logProjects()


//contact form 

const form = document.getElementById("contactForm");
let userArray = [];

if (form) {

  form.addEventListener("submit", onFormSubmit);
  
  function onFormSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      const dataObject = Object.fromEntries(data.entries());
  
      userArray.push(dataObject);
      console.log(userArray);
      form.reset();
  }
}


//madlib

const madLibPopup = document.getElementById("madLibPopup");
const madLibBtn = document.getElementById("madLibButton");
const madLibForm = document.getElementById("madLibForm");
const madLibResult = document.getElementById("madLibResult");

if (madLibPopup && madLibBtn) {
    madLibBtn.addEventListener("click", toggleMadLib);

    function toggleMadLib() {
        madLibPopup.classList.toggle("hidden");
        console.log("Toggle Madlib Popup");
    }
}

if (madLibForm) {
    madLibForm.addEventListener("submit", function(event) {
        event.preventDefault();
        generateMadLib();
        resetForm();
    });

    function generateMadLib() {
        const noun = document.getElementById("noun").value;
        const verb = document.getElementById("verb").value;
        const adjective = document.getElementById("adjective").value;
        const adverb = document.getElementById("adverb").value;

        const madLibSentence = `The ${noun} ${verb} through the ${adjective}  system ${adverb}, causing a major outage.`

        madLibResult.textContent = madLibSentence;
        console.log("Mad Lib Created:", madLibSentence);
    }

    function resetForm() {
        madLibForm.reset();
        console.log("Form reset");
    }
 }

// Color picker 

const colorPickerButton = document.getElementById("colorPickerButton");
const colorPickerForm = document.getElementById("colorPickerForm");
const colorLabel = document.getElementById("colorLabel");
const changeTypeLabel = document.getElementById("changeTypeLabel");
const applyColorButton = document.getElementById("applyColorButton");
const colorSelect = document.getElementById("colorSelect");
const changeTypeSelect = document.getElementById("changeTypeSelect");

if (colorPickerButton && colorPickerForm && colorLabel && changeTypeLabel && applyColorButton && colorSelect && changeTypeSelect) {
    colorPickerButton.addEventListener("click", function() {
        colorPickerForm.classList.toggle("form-hide");
        colorPickerForm.classList.toggle("form-show");
    });

    applyColorButton.addEventListener("click", function() {
        const selectedColor = colorSelect.value;
        const changeType = changeTypeSelect.value;

        if (changeType === "text") {
            colorLabel.style.color = selectedColor;
            changeTypeLabel.style.color = selectedColor;
        } else if (changeType === "background") {
            colorPickerForm.style.backgroundColor = selectedColor;
        }
    });
}

