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
let scrollIntervalId;

function autoScrollProjects() {
  if (projectsContainer.scrollLeft >= projectsContainer.scrollWidth - projectsContainer.clientWidth) {
    setTimeout(() => {
      scrollDirection = -1;
    }, 1400);
    
  } else if (projectsContainer.scrollLeft <= 0) {
    setTimeout(() => {
      scrollDirection = 1;
    }, 1400);
    
  }
  
  projectsContainer.scrollLeft += scrollSpeed * scrollDirection;
}

scrollIntervalId = setInterval(autoScrollProjects, scrollInterval);

projectsContainer.addEventListener('mouseenter', () => {
  clearInterval(scrollIntervalId);
});

projectsContainer.addEventListener('mouseleave', () => {
  scrollIntervalId = setInterval(autoScrollProjects, scrollInterval);
});

let text = ["Hello, I am     ", "こんにちは、私は     ", "Hallo, ich bin     ", "저는     "];
let index = 0;
let hapus = 0;
let currentIndex = 0;
const helloText = document.getElementById("helloText");

function typeWriter() {
  if (hapus === 0) {
    helloText.innerHTML += text[currentIndex].charAt(index);
    index++;
    if (index === text[currentIndex].length) {
      index = 0;
      hapus = 1;
    }
  } else {
    let newText = helloText.innerHTML.slice(0, -1);
    if(newText.length == 0){
      newText = "&nbsp";
    }
    helloText.innerHTML = newText ;

    if (newText === "&nbsp" ) {
      hapus = 0;
      currentIndex = (currentIndex + 1) % text.length;

    }
  }

  setTimeout(typeWriter, 300);
}

typeWriter();
