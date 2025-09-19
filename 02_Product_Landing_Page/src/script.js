// script.js

const toggleBtn = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

// Set theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlEl.className = savedTheme;
}

// Toggle theme and save
toggleBtn.addEventListener('click', () => {
  const current = htmlEl.className;
  const newTheme = current === 'light' ? 'dark' : 'light';
  htmlEl.className = newTheme;
  localStorage.setItem('theme', newTheme);
});

