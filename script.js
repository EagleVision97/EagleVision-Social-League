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
// Toggle between current and past season standings
function showSeason(season) {
  const currentSeason = document.getElementById('current-season');
  const pastSeasons = document.getElementById('past-seasons');
  document.querySelectorAll('.season-btn').forEach(btn => btn.classList.remove('active'));

  if (season === 'current') {
    currentSeason.style.display = 'block';
    pastSeasons.style.display = 'none';
    document.querySelector('[onclick="showSeason(\'current\')"]').classList.add('active');
  } else {
    currentSeason.style.display = 'none';
    pastSeasons.style.display = 'block';
    document.querySelector('[onclick="showSeason(\'past\')"]').classList.add('active');
  }
}

// Toggle between upcoming fixtures and past results
function showFixture(type) {
  const upcomingFixtures = document.getElementById('upcoming-fixtures');
  const results = document.getElementById('results');
  document.querySelectorAll('.fixtures-btn').forEach(btn => btn.classList.remove('active'));

  if (type === 'upcoming') {
    upcomingFixtures.style.display = 'block';
    results.style.display = 'none';
    document.querySelector('[onclick="showFixture(\'upcoming\')"]').classList.add('active');
  } else {
    upcomingFixtures.style.display = 'none';
    results.style.display = 'block';
    document.querySelector('[onclick="showFixture(\'results\')"]').classList.add('active');
  }
}

  });
});
