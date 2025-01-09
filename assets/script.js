// Get the toggle button and check for saved preference
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme on page load
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = 'Light Mode';
} else {
  toggleButton.textContent = 'Dark Mode';
}

// Add event listener for toggle button
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Save the preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleButton.textContent = 'Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggleButton.textContent = 'Dark Mode';
  }
});

// Function to toggle the menu
function toggleMenu() {
    const navLinks = document.querySelector('.header-nav-links');
    navLinks.classList.toggle('active');
  }
  
  // Function to close the menu if clicked outside
  function closeMenuOnClickOutside(event) {
    const navLinks = document.querySelector('.header-nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
  
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove('active');
    }
  }
  
  // Function to close the menu on scroll
  function closeMenuOnScroll() {
    const navLinks = document.querySelector('.header-nav-links');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  }
  
  // Add event listeners
  document.addEventListener('click', closeMenuOnClickOutside);
  document.addEventListener('scroll', closeMenuOnScroll);
  
