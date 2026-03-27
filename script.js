const messages = [
  "Welcome to my website",
  "Where all your technological matters are solved",
  "Explore, connect, and innovate with Prime Brev Edge"
];
let msgIndex = 0;
let charIndex = 0;
const typedText = document.querySelector('#typed-text');

function typeWriter() {
  if (!typedText) return;
  if (charIndex < messages[msgIndex].length) {
    typedText.textContent += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 120);
  } else {
    setTimeout(() => {
      typedText.textContent = '';
      charIndex = 0;
      msgIndex = (msgIndex + 1) % messages.length;
      setTimeout(typeWriter, 300);
    }, 2000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
});

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const status = document.getElementById('form-status');
  if (!name || !email || !message) {
    status.textContent = 'Please complete all fields before submitting.';
    status.style.color = '#ff8d8d';
    return false;
  }

  status.textContent = `Thank you, ${name}! We received your message and will reach out soon.`;
  status.style.color = '#b8ffb4';
  document.getElementById('contact-form').reset();
  return false;
}
