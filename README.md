# Thilokya Angeesa - Portfolio Website

A modern, interactive portfolio website showcasing projects, skills, and professional experience with a beautiful starfield background and smooth animations.

## ✨ Features

- **Interactive Hero Section** - Eye-catching landing area with profile image and smooth scrolling
- **Dynamic Project Showcase** - Projects loaded from JSON with category filtering
- **Tech Stack Display** - Full-width tech badges showing all skills and tools
- **Cursor Tracking Stars** - Animated starfield background that responds to cursor movement
- **Smooth Navigation** - Seamless scroll navigation between sections
- **Responsive Design** - Fully responsive layout for mobile, tablet, and desktop
- **Modern Glassmorphism** - Glass effect styling with backdrop blur and subtle borders

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Modern CSS with glassmorphism effects
- **Data**: JSON for dynamic project management
- **Animations**: CSS keyframes and JavaScript-driven effects

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
  "category": "Category Name",
  "description": "Brief description",
  "technologies": ["Tech1", "Tech2"],
  "github": "https://github.com/...",
  "image": "./assets/project1.jpg"
}
```

### Adding New Projects

Edit `assets/projects.json` and add a new object to the projects array. Projects will automatically appear on the portfolio with filtering by category.

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
  --bg-dark: #0b1c26;
  --bg-light: #102a3c;
  --accent: #ff6b4a;
  --text-main: #ffffff;
  --text-muted: #b0c4d4;
}
```

### Hero Text
Update the main hero section in `index.html`:
```html
<h2>Hello</h2>
<h2>I'm Thilokya Angeesa</h2>
<h2>Software Developer</h2>
```

### Tech Stack
Add/remove tech badges in the `.tech-stack` section in `index.html`.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout with 2-column hero)
- **Tablet**: 900px (single column, stacked elements)
- **Mobile**: 600px (optimized for small screens)

## ⚙️ Features Explained

### Cursor Tracking Stars
- 200 static background stars with twinkling animation
- Stars move based on time using `requestAnimationFrame`
- 50 dynamic stars created on cursor movement
- Smooth fade-out animation for interactive stars

### Project Filtering
- Categories automatically generated from JSON data
- Click filter buttons to show projects by category
- Smooth transitions between filtered views

### Smooth Scroll Navigation
- Click navigation links for smooth page scrolling
- Home link scrolls to top with smooth behavior
- All anchor links scroll to section with smooth effect

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

**Last Updated**: December 2025
