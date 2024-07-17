import projectData from "../data/data.js"
const projects = document.getElementById("projectSection")
console.log(projects)

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
  const projects = projectData;
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

logProjects()






























// console.log(projectData)

// function logProjects() {
//   const projects = data.results.projects;
//   for (let i = 0; i < projects.length; i++) {
//     console.log(projects[i]);
//   }
// }

// function displayProjects() {

//   const projects = data.results.projects;
//   // const project = document.createElement("projectSection");
//   const project = document.getElementById("projectSection");
//   projectSection.textContent = ``;

//   for (let i = 0;  i < projects.length; i++) {
//     const project = projects[i];

  
//   }

// }




// console.log(projectData[i])

// function displayBooks() {
// 	const books = data.results.books;
// 	const ol = document.createElement("ol");

// 	for (let i = 0; i < books.length; i++) {
// 		const li = document.createElement("li");
// 		li.textContent = books[i].title;
// 		ol.appendChild(li);
// 	}

// 	document.body.appendChild(ol);
// }

// logBooks();
// displayBooks();


// projectSection.textContent += `  
// <div class="card">
// <h3 class="project-text">Cannons Coffee</h3>
// <img src="img/portfolio-coffee.png" class="project-imgs">
// <p class="project-p">Cannons Coffee was my first major project. I began by working with images of the site at large and medium dimensions, and then I coded the necessary HTML and CSS to create two pages, utilizing CSS Grid for the layouts. As I progressed in my learning journey, I incorporated a hamburger menu for mobile dimensions using JavaScript.</p>
// <p><a href="https://lunavolcan.github.io/cannons-coffee/" target="_blank" class="button">View The Site</a></p>
// </div>
// `

// function logBooks() {
// 	const books = data.results.books;
// 	for (let i = 0; i < books.length; i++) {
// 		console.log(books[i].title);
// 	}
// }












// 1. Get references to elements:
// a. const colorSelect = document.getElementById('color');
// b. const typeSelect = document.getElementById('type');
// c. const submitButton = document.getElementById('submitButton');
// d. const colorDisplay = document.getElementById('colorDisplay');
// e. const container = document.getElementById('container');
// f. const colorLabel = document.getElementById('colorLabel');
// g. const typeLabel = document.getElementById('typeLabel');
// h. const showPickerButton = document.getElementById('showPickerButton');
// i. const colorPickerForm = document.getElementById('colorPickerForm');
// j. const mainTitle = document.getElementById('mainTitle');
// 2. Add event listener to showPickerButton for 'click' event:
// a. showPickerButton.addEventListener('click', function() {
//    i. Set colorPickerForm style display to 'block' to show the form.
// });
// 3. Add event listener to submitButton for 'click' event:
// a. submitButton.addEventListener('click', function() {
//    i. Get selected color and type values:
//       1. const selectedColor = colorSelect.value;
//       2. const selectedType = typeSelect.value;
//    ii. Check selected type:
//       1. If selectedType === 'background':
//          a. Set container background color to selectedColor.
//       2. Else if selectedType === 'text':
//          a. Set mainTitle color to selectedColor.
//          b. Set colorLabel color to selectedColor.
//          c. Set typeLabel color to selectedColor.
//          d. Set colorSelect text color to selectedColor.
//          e. Set typeSelect text color to selectedColor.
// });


