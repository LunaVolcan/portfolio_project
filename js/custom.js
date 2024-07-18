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


//madlib

// * <section class="js-section" id="jsSection">
// <button class="madlib-btn" id="madLibButton">Show Mad Lib</button>

// <div id="madLibPopup" class="hidden">
//     <h2 class="madlib-text">Mad Lib</h2>
//     <form class="madlib-form" id="madLibForm">
//         <label for="noun">Noun:</label>
//         <input type="text" id="noun" name="noun"><br><br>
//         <label for="verb">Verb:</label>
//         <input type="text" id="verb" name="verb"><br><br>
//         <label for="adjective">Adjective:</label>
//         <input type="text" id="adjective" name="adjective"><br><br>
//         <label for="adverb">Adverb:</label>
//         <input type="text" id="adverb" name="adverb"><br><br>
//         <button class="madlib-submit" type="submit">Create Mad Lib</button>
//     </form>
//     <div id="madLibResult"></div>
// </div>
// </section> */


// const madLibButton = document.getElementById('madLibButton');
// const madLibPopup = document.getElementById('madLibPopup');
// const madLibForm = document.getElementById('madLibForm');
// const madLibResult = document.getElementById('madLibResult');

// function togglePopup() {
//     console.log("Toggling popup");
//     if (madLibPopup.style.display === 'none' || madLibPopup.style.display === '') {
//         madLibPopup.style.display = 'block';
//     } else {
//         madLibPopup.style.display = 'none';
//     }
//   }

// function createMadLib(event) {
//     event.preventDefault();
//     console.log("Creating Mad Lib");
//     const noun = document.getElementById('noun').value;
//     const verb = document.getElementById('verb').value;
//     const adjective = document.getElementById('adjective').value;
//     const adverb = document.getElementById('adverb').value;

//     const story = `Once upon a time, a ${adjective} ${noun} decided to ${verb} ${adverb}.`;
//     madLibResult.textContent = story;
// }

// function initializeEventListeners() {
//     madLibButton.addEventListener('click', togglePopup);
//     madLibForm.addEventListener('submit', createMadLib);
//     console.log("Event listeners initialized");
// }

// // Call the function to initialize event listeners
// initializeEventListeners();

//contact form 

const form = document.getElementById("contactForm");
const submit = document.getElementById("submitButton")
let userArray = [];

if (form) {

  submit.addEventListener("submit", onFormSubmit);
  
  function onFormSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      const dataObject = Object.fromEntries(data.entries());
  
      userArray.push(dataObject);
      console.log(data.entries);
      form.reset();
  }
   console.log(form)
}





















































