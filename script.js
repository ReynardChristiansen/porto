function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


 function openPopup(imageSrc) {
  document.getElementById('popup-img').src = imageSrc;
  document.getElementById('popup').style.display = 'flex';
}


function closePopup() {
  document.getElementById('popup').style.display = 'none';
}


document.getElementById('popup').addEventListener('click', function(event) {
  if (event.target === this) {
    closePopup();
  }
});


const projectsContainer = document.getElementById('projects');

let scrollSpeed = 18;
let scrollDirection = 1;
const scrollInterval = 100;
let scrollIntervalId; // Declare with let to allow reassignment

function autoScrollProjects() {
  if (projectsContainer.scrollLeft >= projectsContainer.scrollWidth - projectsContainer.clientWidth) {
    scrollDirection = -1;
  } else if (projectsContainer.scrollLeft <= 0) {
    scrollDirection = 1;
  }

  projectsContainer.scrollLeft += scrollSpeed * scrollDirection;
}

scrollIntervalId = setInterval(autoScrollProjects, scrollInterval); // Assign initially

projectsContainer.addEventListener('mouseenter', () => {
  clearInterval(scrollIntervalId);
});

projectsContainer.addEventListener('mouseleave', () => {
  // Reassign scrollIntervalId using let
  scrollIntervalId = setInterval(autoScrollProjects, scrollInterval);
});
