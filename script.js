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
