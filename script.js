// script.js

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const mobileNav = document.querySelector('.mobile-nav');

  mobileMenuIcon.addEventListener('click', function() {
    mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'block';
  });
});
function showDetails(projectId) {
  // You can customize this function to show project details based on the project identifier
  alert('Details for ' + projectId);
}
