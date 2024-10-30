// Toggle Dropdown Menus on Hover
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
      const menu = dropdown.querySelector('.dropdown-content');
      menu.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
      const menu = dropdown.querySelector('.dropdown-content');
      menu.style.display = 'none';
    });
// Example: Load more matches dynamically (optional)
const loadMoreBtn = document.querySelector('.details-btn');
loadMoreBtn.addEventListener('click', () => {
  alert('Match details coming soon!');
});

  });
});
