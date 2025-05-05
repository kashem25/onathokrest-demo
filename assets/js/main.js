// assets/js/main.js

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // Add more custom scripts below if needed
});

