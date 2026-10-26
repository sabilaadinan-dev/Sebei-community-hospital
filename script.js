const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');
if (form && formNote) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formNote.textContent = 'Demo only: no message was sent. Please configure a form service or publish a verified project email before using this form.';
  });
}
