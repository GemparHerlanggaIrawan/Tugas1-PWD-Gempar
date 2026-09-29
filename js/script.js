const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = new FormData(contactForm).get('nama').trim();
    formStatus.textContent = `Terima kasih, ${name}. Pesan berhasil dicatat di halaman ini.`;
});

contactForm.addEventListener('reset', () => {
    formStatus.textContent = '';
});