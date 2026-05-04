# Thilokya Angeesa - Portfolio Website

A modern, responsive portfolio website showcasing projects, research, skills, and academic background with clean visuals and smooth section reveals.

## ✨ Features

- **Hero Section** - Clear headline, academic identity, and calls to action
- **Research Highlight** - Dedicated section for the tea auction project
- **Dynamic Project Showcase** - Projects loaded from JSON
- **Skills + Education** - Structured academic and technical summary
- **Smooth Navigation** - Sticky header with anchored sections
- **Responsive Design** - Mobile, tablet, and desktop layouts
- **Subtle Animations** - Scroll reveal for section content

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Modern CSS with custom properties
- **Data**: JSON for dynamic project management
- **Animations**: IntersectionObserver-based reveals

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main HTML structure
├── style.css               # All styling and responsive design
├── script.js               # JavaScript for interactivity
├── README.md               # This file
└── assets/
    ├── profilePhoto.png    # Profile picture
    ├── photos/             # Project thumbnails
    └── projects.json       # Dynamic projects data
```

## 📋 Projects Data Structure

Projects are managed in `assets/projects.json`. Each project includes:

```json
{
  "id": 1,
  "title": "Project Name",
  "type": "Category | Focus",
  "description": "Brief description",
  "github": "https://github.com/...",
  "image": "./assets/photos/project1.jpg",
  "badge": "Research Project",
  "tags": ["Python", "Pandas"]
}
```

### Adding New Projects

Edit `assets/projects.json` and add a new object to the projects array. Projects will automatically appear on the portfolio.

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
  --bg: #f4f6f8;
  --surface: #ffffff;
  --ink: #1b1f24;
  --muted: #4f5b66;
  --accent: #1c7c8c;
  --accent-soft: #e3f2f4;
}
```

### Hero Text
Update the hero content in `index.html`:
```html
<h1>Hi, I'm Thilokya Angeesa</h1>
<p class="hero-subtitle">CSE Undergraduate | Data Science Learner | Research Contributor</p>
```

### Project Images
Project card images are read from `assets/projects.json` and shown in a 16:9 frame.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout with 2-column hero)
- **Tablet**: 900px (single column, stacked elements)
- **Mobile**: 600px (optimized for small screens)

## ⚙️ Features Explained

### Scroll Reveal
- Sections and project cards reveal on scroll with IntersectionObserver

### Smooth Scroll Navigation
- Anchor links scroll to sections using native smooth behavior

## 🔧 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact

- **Email**: [Thilokyaangeesa@gmail.com](mailto:Thilokyaangeesa@gmail.com)
- **LinkedIn**: [Thilokya Angeesa](https://www.linkedin.com/in/thilokya-angeesa-2867462b0)
- **GitHub**: [@Thilokya03](https://github.com/Thilokya03)

## 📝 License

This project is open source and available under the MIT License.

## 🎯 About

This portfolio website is designed to showcase professional work, skills, and projects with a modern, interactive interface. Built with vanilla HTML, CSS, and JavaScript for maximum performance and minimal dependencies.

---

**Last Updated**: May 2026
