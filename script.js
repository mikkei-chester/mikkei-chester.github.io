// script.js

// Initialize AOS (first call – kept for consistency with original)
AOS.init();

// Enhanced AOS configuration (overrides first call)
AOS.init({ once: false, offset: 60, duration: 700, easing: 'ease-out-cubic' });

// Scroll progress bar (currently commented out in original)
// window.addEventListener('scroll', () => {
//   const total = document.body.scrollHeight - window.innerHeight;
//   const pct   = (window.scrollY / total) * 100;
//   document.getElementById('progress-bar').style.width = pct + '%';
// });

// Active nav link highlight based on scroll position
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-link');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

// Contact form placeholder handler
function handleForm(e) {
  e.preventDefault();
  alert('Thanks for your message! (Wire this up to your preferred email service.)');
  e.target.reset();
}