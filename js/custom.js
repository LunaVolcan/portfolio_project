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

// Time generator 

const timeButton = document.getElementById("timeButton");
const timeDisplay = document.getElementById("timeDisplay");

if (timeButton && timeDisplay) {
    timeButton.addEventListener("click", toggleTimeDisplay);

    function toggleTimeDisplay() {
        // Get the current time in NYC using moment-timezone
        const nycTime = moment.tz("America/New_York").format("HH:mm:ss");

        // Display the time
        timeDisplay.textContent = `The time in NYC is: ${nycTime}`;
        timeDisplay.classList.toggle("time-hide");
        timeDisplay.classList.toggle("visible");

        console.log("Time in NYC displayed/hidden");
    }
}


// const timeButton = document.getElementById("timeButton")
// const timeDisplay = document.getElementById("timeDisplay")

// if (timeButton && timeDisplay) {

// function toggleTime() {
//     timeDisplay.classList.toggle("time-hide")
// }

// }

// function toggleMadLib() {
//   madLibPopup.classList.toggle("hidden");
//   console.log("Toggle Madlib Popup");
// }

{/* <div class="time-display">
<button id="timeButton">I Want To See What Time It Is In NYC</button>
<div id="timeDisplay" class="hide">The time in NYC is: </div>
</div> */}

// document.getElementById('timeButton').addEventListener('click', function() {
//   const timeDisplay = document.getElementById('timeDisplay');

//   // Get the current time in NYC using moment-timezone
//   const nycTime = moment.tz("America/New_York").format("HH:mm:ss");

//   // Display the time
//   timeDisplay.textContent = `The time in NYC is: ${nycTime}`;
//   timeDisplay.classList.remove('hide');
// });


























































