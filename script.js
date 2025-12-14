/* =============================================
   STARS BACKGROUND EFFECT
   ============================================= */

const starsContainer = document.querySelector('.stars-container');
let stars = [];
let backgroundStars = [];
let startTime = Date.now();

// -------- Create Background Stars --------
function createBackgroundStars() {
  for (let i = 0; i < 500; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    const size = Math.random() * 5 + 1;
    const initialX = Math.random() * 100;
    const initialY = Math.random() * 100;
    const speed = Math.random() * 0.02 + 0.01; // Speed of movement
    const angle = Math.random() * Math.PI * 2; // Random direction
    
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${initialX}%`;
    star.style.top = `${initialY}%`;
    star.style.animationDuration = `${Math.random() * 2 + 2}s`;
    star.style.animationDelay = `${Math.random() * 1}s`;
    
    starsContainer.appendChild(star);
    
    // Store star data for time-based movement
    backgroundStars.push({
      element: star,
      initialX: initialX,
      initialY: initialY,
      speed: speed,
      angle: angle,
      size: size
    });
  }
}

// -------- Update Star Positions Based on Time --------
function updateStarPositions() {
  const currentTime = (Date.now() - startTime) / 1000; // Time in seconds
  
  backgroundStars.forEach(star => {
    // Calculate new position based on time
    const offsetX = Math.cos(star.angle) * star.speed * currentTime * 20;
    const offsetY = Math.sin(star.angle) * star.speed * currentTime * 20;
    
    const newX = (star.initialX + offsetX) % 100;
    const newY = (star.initialY + offsetY) % 100;
    
    star.element.style.left = `${newX}%`;
    star.element.style.top = `${newY}%`;
  });
  
  requestAnimationFrame(updateStarPositions);
}

// Initialize background stars on page load
createBackgroundStars();
updateStarPositions();

/* =============================================
   SMOOTH SCROLL NAVIGATION
   ============================================= */

// -------- Navigation Link Smooth Scroll --------
document.querySelectorAll('.navibar ul li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    
    if (targetId === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

/* =============================================
   PROJECTS LOADER
   ============================================= */

// -------- Load Projects from JSON --------
async function loadProjects() {
  try {
    const response = await fetch('./assets/projects.json');
    const data = await response.json();
    displayProjects(data.projects);
    createCategoryFilters(data.projects);
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

// -------- Display Projects --------
function displayProjects(projects, filter = 'all') {
  const container = document.getElementById('projectsContainer');
  container.innerHTML = '';
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);
  
  filteredProjects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-links">
          <a href="${project.github}" target="_blank" class="project-link">GitHub</a>
        </div>
      </div>
    `;
    container.appendChild(projectCard);
  });
}

// -------- Create Category Filters --------
function createCategoryFilters(projects) {
  const filterContainer = document.querySelector('.project-filters');
  const categories = ['all', ...new Set(projects.map(p => p.category))];
  
  filterContainer.innerHTML = '';
  
  categories.forEach(category => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${category === 'all' ? 'active' : ''}`;
    btn.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    btn.setAttribute('data-filter', category);
    
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadProjectsWithFilter(category);
    });
    
    filterContainer.appendChild(btn);
  });
}

// -------- Load Projects with Filter --------
async function loadProjectsWithFilter(filter) {
  try {
    const response = await fetch('./assets/projects.json');
    const data = await response.json();
    displayProjects(data.projects, filter);
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', loadProjects);
