const menuIcon = document.querySelector('.menu-icon');
const header = document.querySelector('.hero');

menuIcon.addEventListener('click', () => {
  header.classList.toggle('menu-open');
});

const titleEl = document.querySelector('.hero-text h1');
const text = titleEl.textContent.trim(); 
let index = 0;

titleEl.textContent = ''; 

function typeWriter() {
  if (index < text.length) {
    titleEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150); 
  }
}

window.addEventListener('load', typeWriter);
