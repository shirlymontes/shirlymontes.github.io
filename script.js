// Smooth Scrolling for Navbar Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Sticky Navbar on Scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Typing Animation for Role in Hero Section
const roles = ["UI/UX Designer", "Front-End Developer"];
let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenRoles = 2000;
const roleElement = document.getElementById("role");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(eraseRole, delayBetweenRoles);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, erasingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roleElement) typeRole();
});

// “Let’s Connect” Button Scroll
const connectBtn = document.getElementById('connectBtn');
if (connectBtn) {
  connectBtn.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });
}



// Contact Form

const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    const email = form.querySelector('input[type="email"]');
    const name = form.querySelector('input[name="name"]');
    const message = form.querySelector('textarea[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      e.preventDefault();
      alert('Please fill out all fields.');
      return;
    }

    if (!email.value.includes('@')) {
      e.preventDefault();
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thanks for reaching out! I’ll get back to you soon. 💌');
  });
}

