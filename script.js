// script.js - portfolio interactions

// Initialize AOS
AOS.init({ once: false, offset: 60, duration: 700, easing: 'ease-out-cubic',  mirror: true });

// Offcanvas navigation fix - close then scroll
function setupOffcanvasLinks() {
  const offcanvasLinks = document.querySelectorAll('#navOffcanvas .nav-link');
  const offcanvasElement = document.getElementById('navOffcanvas');
  
  offcanvasLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      // Close offcanvas first
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
      
      // Then scroll to section after a tiny delay
      setTimeout(() => {
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    });
  });
}


// offcanvas fix after page loads
document.addEventListener('DOMContentLoaded', setupOffcanvasLinks);

const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-link:not(#navOffcanvas .nav-link)');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (active && !active.closest('#navOffcanvas')) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// Contact form handler
function handleForm(e) {
  e.preventDefault();
  alert('Thanks for your message! I will get back to you as soon as possible.');
  e.target.reset();
}