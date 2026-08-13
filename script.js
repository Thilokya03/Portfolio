const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const themeToggle = document.getElementById('themeToggle');

/* =========================================================
   THEME
========================================================= */

const THEME_STORAGE_KEY = 'portfolio-theme';
const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

function getSystemTheme() {
  return systemThemeQuery.matches ? 'dark' : 'light';
}

function getSavedTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    return savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : null;
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';

  document.documentElement.dataset.theme = nextTheme;

  if (!themeToggle) return;

  const icon = themeToggle.querySelector('.theme-icon');
  const isDark = nextTheme === 'dark';

  if (icon) {
    icon.textContent = isDark ? '☀' : '☾';
  }

  const label = isDark
    ? 'Switch to light theme'
    : 'Switch to dark theme';

  themeToggle.setAttribute('aria-label', label);
  themeToggle.setAttribute('title', label);
}


/*
  The small theme script in index.html applies the theme
  before the page is displayed.

  This keeps the button/icon synchronized.
*/
applyTheme(
  document.documentElement.dataset.theme ||
  getSavedTheme() ||
  getSystemTheme()
);


if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme =
      document.documentElement.dataset.theme || getSystemTheme();

    const nextTheme =
      currentTheme === 'dark'
        ? 'light'
        : 'dark';

    try {
      localStorage.setItem(
        THEME_STORAGE_KEY,
        nextTheme
      );
    } catch {
      // Theme still works even if storage is unavailable.
    }

    applyTheme(nextTheme);
  });
}


/*
  Follow the operating system theme only when
  the user has not manually selected a theme.
*/
systemThemeQuery.addEventListener?.('change', event => {
  if (!getSavedTheme()) {
    applyTheme(
      event.matches
        ? 'dark'
        : 'light'
    );
  }
});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

if (navToggle && siteNav) {

  navToggle.addEventListener('click', () => {
    const isOpen =
      siteNav.classList.toggle('is-open');

    navToggle.setAttribute(
      'aria-expanded',
      String(isOpen)
    );
  });


  /*
    Close mobile menu after clicking a navigation link.
  */
  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {

      siteNav.classList.remove('is-open');

      navToggle.setAttribute(
        'aria-expanded',
        'false'
      );
    });
  });


  /*
    Close menu using Escape key.
  */
  document.addEventListener('keydown', event => {

    if (
      event.key === 'Escape' &&
      siteNav.classList.contains('is-open')
    ) {

      siteNav.classList.remove('is-open');

      navToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      navToggle.focus();
    }
  });
}


/* =========================================================
   RESEARCH / PUBLICATION PROJECT IDS

   These projects remain inside projects.json,
   but are NOT displayed again in the Projects section.

   ID 1 = Tea Research
   ID 8 = Sri Lanka Holiday Dataset
========================================================= */

const publicationProjectIds = new Set([
  1,
  8
]);


/* =========================================================
   FALLBACK PROJECTS

   These are displayed only if projects.json cannot
   be loaded.
========================================================= */

const fallbackProjects = [

  {
    id: 2,

    title:
      'Autonomous Mobile Manipulation Robot | SLRC 2026',

    type:
      'Robotics | Computer Vision | Autonomous Systems',

    description:
      'A fully autonomous mobile manipulation robot developed for the Sri Lanka Robotics Challenge 2026. The system integrates autonomous navigation, computer vision, sensor fusion, path tracking, and robotic manipulation for coordinated autonomous tasks.',

    github:
      'https://github.com/AkhilaNisal/SLRC-2026.git',

    image:
      './assets/photos/SLRC-2026.jpeg',

    badge:
      'SLRC 2026',

    tags: [
      'ROS 2',
      'OpenCV',
      'MoveIt 2',
      'Python',
      'C++'
    ]
  },


  {
    id: 3,

    title:
      'Micro Mouse Robot',

    type:
      'Robotics | Embedded Systems | Path Planning',

    description:
      'An autonomous maze-solving robot designed to navigate and explore maze environments using sensor-based perception, embedded control, and real-time path-planning techniques.',

    github: '',

    image:
      './assets/photos/project3.jpg',

    badge:
      'Robotics Project',

    tags: [
      'Robotics',
      'Embedded Systems',
      'Sensors',
      'Path Planning'
    ]
  },


  {
    id: 4,

    title:
      'Clinic Appointment and Treatment Management System',

    type:
      'Web Development | Healthcare',

    description:
      'A healthcare-focused web application designed to streamline clinic appointment and treatment management through organized digital workflows and a user-friendly interface.',

    github:
      'https://github.com/Thilokya03/Clinic-Appointment-and-Treatment-Management-System.git',

    image:
      './assets/photos/CATMS.jpg',

    badge:
      'Web Application',

    tags: [
      'JavaScript',
      'HTML',
      'CSS',
      'Web Development'
    ]
  },


  {
    id: 5,

    title:
      '4-bit Nano Processor',

    type:
      'Computer Architecture | Digital Logic | FPGA',

    description:
      'A custom 4-bit nano processor implemented in VHDL to demonstrate fundamental CPU architecture concepts including instruction execution, arithmetic operations, registers, and control logic.',

    github:
      'https://github.com/adLahiru/Nano_Processor_v1.git',

    image:
      './assets/photos/nanoprocessor.png',

    badge:
      'Hardware Project',

    tags: [
      'VHDL',
      'FPGA',
      'Digital Logic',
      'Computer Architecture',
      'Vivado'
    ]
  },


  {
    id: 6,

    title:
      'LifeLine | Blood Bank Management System',

    type:
      'Full-Stack Development | Healthcare',

    description:
      'A full-stack blood bank management platform connecting donors, hospitals, and administrators while supporting blood inventory, donation campaigns, requests, authentication, and role-based workflows.',

    github:
      'https://github.com/nadilHesara/LifeLine.git',

    image:
      './assets/photos/BBMS.png',

    badge:
      'Full-Stack Project',

    tags: [
      'React',
      'Ballerina',
      'MySQL',
      'REST API',
      'JWT'
    ]
  },


  {
    id: 7,

    title:
      'Autonomous Potato Sorting Robot | SLRC 2025',

    type:
      'Robotics | Computer Vision | Automation',

    description:
      'An autonomous agricultural robot developed for SLRC 2025 that navigates its environment, detects and classifies potatoes using computer vision, and performs automated sorting.',

    github:
      'https://github.com/AkhilaNisal/SLRC-2025.git',

    image:
      './assets/photos/SLRC 2025.jpg',

    badge:
      'SLRC 2025',

    tags: [
      'Python',
      'OpenCV',
      'Raspberry Pi',
      'Arduino',
      'PID Control'
    ]
  },


  {
    id: 9,

    title:
      'Automated Glaucoma Screening System',

    type:
      'Deep Learning | Computer Vision | Healthcare AI',

    description:
      'An AI-based glaucoma screening system that analyzes retinal fundus images using deep learning and machine learning, combining image segmentation, feature extraction, and predictive modeling to estimate glaucoma risk.',

    github:
      'https://github.com/Thilokya03/Eye_Clinic',

    image:
      './assets/photos/eye-clinic.jpg',

    badge:
      'AI/ML Project',

    tags: [
      'PyTorch',
      'U-Net',
      'XGBoost',
      'Computer Vision',
      'Deep Learning'
    ]
  },


  {
    id: 10,

    title:
      'Point of Sale (POS) System',

    type:
      'Java | Object-Oriented Programming',

    description:
      'A Java-based Point of Sale application supporting cashier operations, product management, billing, discounts, payments, and sales transactions using object-oriented programming principles.',

    github:
      'https://github.com/Thilokya03/POS-System.git',

    image:
      './assets/photos/pos-system.jpg',

    badge:
      'Java Project',

    tags: [
      'Java',
      'OOP',
      'CSV',
      'File Handling',
      'CLI'
    ]
  }

];


/* =========================================================
   LOAD PROJECTS
========================================================= */

async function loadProjects() {

  try {

    const response =
      await fetch('./assets/projects.json');


    if (!response.ok) {

      throw new Error(
        `Failed to load projects.json: ${response.status}`
      );
    }


    const data =
      await response.json();


    if (
      !data.projects ||
      !Array.isArray(data.projects)
    ) {

      throw new Error(
        'Invalid projects.json structure'
      );
    }


    /*
      Remove Research & Publication items
      from the normal Projects section.
    */
    const regularProjects =
      data.projects.filter(
        project =>
          !publicationProjectIds.has(project.id)
      );


    displayProjects(
      regularProjects
    );

  } catch (error) {

    console.error(
      'Error loading projects:',
      error
    );


    displayProjects(
      fallbackProjects
    );
  }
}


/* =========================================================
   PROJECT INITIALS
========================================================= */

function getProjectInitials(title) {

  return title
    .replace(/[^A-Za-z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();
}


/* =========================================================
   PROJECT IMAGE
========================================================= */

function createProjectMedia(project) {

  const initials =
    getProjectInitials(project.title);


  if (project.image) {

    return `
      <div class="project-media">

        <img
          src="${project.image}"
          alt="${project.title}"
          loading="lazy"

          onerror="
            this.style.display='none';
            this.nextElementSibling.style.display='flex';
          "
        >

        <span
          class="project-initials project-image-fallback"
          style="display: none;"
          aria-hidden="true"
        >
          ${initials}
        </span>

      </div>
    `;
  }


  return `
    <div class="project-media">

      <span
        class="project-initials"
        aria-hidden="true"
      >
        ${initials}
      </span>

    </div>
  `;
}


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

let revealObserver = null;


function observeElement(element) {

  if (revealObserver) {

    revealObserver.observe(element);

  } else {

    element.classList.add(
      'is-visible'
    );
  }
}


function initRevealAnimations() {

  const elements =
    document.querySelectorAll(
      '.section, .hero-text, .hero-visual'
    );


  elements.forEach(element => {

    element.classList.add(
      'reveal'
    );
  });


  /*
    Browser fallback.
  */
  if (
    !('IntersectionObserver' in window)
  ) {

    elements.forEach(element => {

      element.classList.add(
        'is-visible'
      );
    });

    return;
  }


  revealObserver =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              'is-visible'
            );


            revealObserver.unobserve(
              entry.target
            );
          }
        });

      },

      {
        threshold: 0.15
      }
    );


  elements.forEach(element => {

    revealObserver.observe(
      element
    );
  });
}


/* =========================================================
   DISPLAY PROJECTS
========================================================= */

function displayProjects(projects) {

  const container =
    document.getElementById(
      'projectsContainer'
    );


  if (!container) {
    return;
  }


  container.innerHTML = '';


  /*
    No projects
  */
  if (!projects.length) {

    container.innerHTML = `
      <p class="projects-empty">
        No projects are currently available.
      </p>
    `;

    return;
  }


  projects.forEach(project => {

    const projectCard =
      document.createElement(
        'article'
      );


    projectCard.className =
      'project-card reveal';


    /* -------------------------
       Tags
    -------------------------- */

    const tags =
      Array.isArray(project.tags)

        ? project.tags
            .map(
              tag =>
                `<span>${tag}</span>`
            )
            .join('')

        : '';


    /* -------------------------
       Badge
    -------------------------- */

    const badge =
      project.badge

        ? `
          <span class="badge">
            ${project.badge}
          </span>
        `

        : '';


    /* -------------------------
       GitHub Link
    -------------------------- */

    const githubLink =
      project.github

        ? `
          <div class="project-footer">

            <a
              href="${project.github}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View ${project.title} on GitHub"
            >
              View on GitHub
            </a>

          </div>
        `

        : '';


    /* -------------------------
       Project Card
    -------------------------- */

    projectCard.innerHTML = `

      ${createProjectMedia(project)}

      <div class="project-body">

        ${badge}

        <p class="project-type">
          ${project.type}
        </p>

        <h3>
          ${project.title}
        </h3>

        <p class="project-desc">
          ${project.description}
        </p>

        <div class="project-tags">
          ${tags}
        </div>

      </div>

      ${githubLink}
    `;


    container.appendChild(
      projectCard
    );


    observeElement(
      projectCard
    );
  });
}


/* =========================================================
   INITIALIZE PORTFOLIO
========================================================= */

document.addEventListener(
  'DOMContentLoaded',
  () => {

    /*
      Initialize the animation observer first.
    */
    initRevealAnimations();


    /*
      Then load projects.
    */
    loadProjects();

  }
);