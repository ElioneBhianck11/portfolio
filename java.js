let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// Fechar o menu ao clicar num link
navLinks.forEach(link => {
  link.onclick = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  };
});

let sections = document.querySelectorAll('section');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', top > 100);
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration:2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contacto form', {origin:'bottom'})
ScrollReveal().reveal('.home-content h1, .sobre-img', {origin:'left'})
ScrollReveal().reveal('.home-content p, .sobre-content', {origin:'right'})

const typed = new Typed('.multiple-text',{
    strings: ['Engenheiro Informático', 'Web Developer' , 'Web Designer'  ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});