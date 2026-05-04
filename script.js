const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('is-open');
  });
}

const fallbackProjects = [
  {
    id: 1,
    title: 'Sri Lankan Tea Auction Price Analysis and Predictive Research Workflow',
    type: 'Research | Data Science | Machine Learning',
    description:
      'A research-based data science project that analyzes Sri Lankan tea auction price behavior using real-world auction, production, weather, and market segment data. The project focuses on preprocessing, feature engineering, exploratory analysis, and preparation for predictive modeling.',
    github: 'https://github.com/hesandism/data-analysis-for-tea-industry.git',
    image: '',
    badge: 'Research Project',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter Notebook']
  },
  {
    id: 2,
    title: 'Micro Mouse Robot',
    type: 'Robotics | Embedded Systems',
    description:
      'A maze-solving autonomous robot designed with sensor-based navigation and real-time path planning for efficient traversal.',
    github: '',
    image: './assets/photos/project3.jpg',
    tags: ['Robotics', 'Embedded']
  },
  {
    id: 3,
    title: 'Clinic Appointment System',
    type: 'Web Application | Database',
    description:
      'A web-based clinic appointment and patient management system supporting role-based access and streamlined workflows.',
    github: 'https://github.com/Thilokya03/Clinic-Appointment-and-Treatment-Management-System.git',
    image: './assets/photos/CATMS.jpg',
    tags: ['Web', 'Backend']
  },
  {
    id: 4,
    title: '4-bit Nano Processor',
    type: 'Digital Logic | Architecture',
    description:
      'A custom-designed 4-bit processor implementing instruction execution, ALU operations, and control logic.',
    github: 'https://github.com/adLahiru/Nano_Processor_v1.git',
    image: './assets/photos/nanoprocessor.png',
    tags: ['Digital Logic', 'Architecture']
  },
  {
    id: 5,
    title: 'Life Line',
    type: 'Healthcare | Database',
    description:
      'A healthcare system to manage blood banks and donor requests with efficient data handling.',
    github: 'https://github.com/nadilHesara/LifeLine.git',
    image: './assets/photos/BBMS.png',
    tags: ['Backend', 'Database']
  },
  {
    id: 6,
    title: 'Autonomous Potato Sorting Robot | SLRC 2025',
    type: 'Computer Vision | Automation',
    description:
      'A robotic system that classifies and sorts potatoes using image processing and mechanical automation.',
    github: 'https://github.com/AkhilaNisal/SLRC-2025.git',
    image: './assets/photos/SLRC 2025.jpg',
    tags: ['Computer Vision', 'Robotics']
  }
];

async function loadProjects() {
  try {
    const response = await fetch('./assets/projects.json');
    if (!response.ok) {
      throw new Error(`Failed to load projects.json: ${response.status}`);
    }
    const data = await response.json();
    displayProjects(data.projects);
  } catch (error) {
    console.error('Error loading projects:', error);
    displayProjects(fallbackProjects);
  }
}

function createProjectMedia(project) {
  if (project.image) {
    return `
      <div class="project-media">
        <img src="${project.image}" alt="${project.title}">
      </div>
    `;
  }

  const initials = project.title
    .replace(/[^A-Za-z ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return `
    <div class="project-media">
      <span class="project-initials">${initials}</span>
    </div>
  `;
}

let revealObserver = null;

function displayProjects(projects) {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  container.innerHTML = '';

  projects.forEach(project => {
    const projectCard = document.createElement('article');
    projectCard.className = 'project-card reveal';

    const tags = project.tags
      ? project.tags.map(tag => `<span>${tag}</span>`).join('')
      : '';

    const badge = project.badge
      ? `<span class="badge">${project.badge}</span>`
      : '';

    projectCard.innerHTML = `
      ${createProjectMedia(project)}
      <div class="project-body">
        ${badge}
        <p class="project-type">${project.type}</p>
        <h3>${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">${tags}</div>
      </div>
      <div class="project-footer">
        <a href="${project.github}" target="_blank" rel="noopener">View on GitHub</a>
      </div>
    `;

    container.appendChild(projectCard);
    if (revealObserver) {
      revealObserver.observe(projectCard);
    } else {
      projectCard.classList.add('is-visible');
    }
  });
}

function initRevealAnimations() {
  const elements = document.querySelectorAll('.section, .project-card, .hero-text, .hero-visual');
  elements.forEach(el => el.classList.add('reveal'));

  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => revealObserver.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  initRevealAnimations();
});
