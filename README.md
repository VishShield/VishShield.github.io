# VishShield AI

> Modern AI-powered fraud prevention platform with interactive 3D visualizations

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://vishshield.github.io)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.163-green)](https://threejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🌐 Live Website

**https://vishshield.github.io**

## 🎯 Overview

VishShield AI is a next-generation fraud prevention and intelligence platform that combats scams through AI-powered conversational bots. Our technology proactively engages scammers, disrupts their operations, and extracts valuable intelligence to protect businesses and consumers.

## ✨ Key Features

### 🎭 Interactive 3D Visualizations
- Animated 3D sphere in hero section with distortion effects
- Four rotating geometric shapes in ecosystem section
- GPU-accelerated WebGL rendering
- Mouse-controlled camera interactions

### 🌓 Dark/Light Theme
- Seamless theme switching
- Persistent user preference (localStorage)
- Optimized color schemes for both modes
- Smooth CSS transitions

### ✨ Smooth Animations
- Scroll-triggered animations powered by Framer Motion
- Interactive hover effects on all elements
- Tab switching with slide transitions
- Accordion-style FAQ with smooth expansion

### 📱 Fully Responsive
- Mobile-first design approach
- Touch-friendly interactions
- Optimized for all screen sizes (320px+)
- Progressive Web App ready

## 🚀 Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI Framework |
| **Three.js** | 0.163.0 | 3D Graphics Engine |
| **React Three Fiber** | 8.16.2 | React renderer for Three.js |
| **@react-three/drei** | 9.105.4 | 3D helpers and abstractions |
| **Framer Motion** | 11.0.28 | Animation library |
| **React Icons** | 5.0.1 | Icon components |

## 📦 Installation

### Prerequisites
- Node.js 14.0 or higher
- npm 6.0 or higher

### Setup

```bash
# Clone the repository
git clone https://github.com/VishShield/VishShield.github.io.git

# Navigate to project directory
cd VishShield.github.io

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

## 🛠️ Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to GitHub Pages
npm run deploy
```

## 🏗️ Project Structure

```
VishShield.github.io/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.js       # Navigation with theme toggle
│   │   ├── Hero.js         # Hero with 3D sphere
│   │   ├── Stats.js        # Animated statistics
│   │   ├── Features.js     # Feature showcase
│   │   ├── Ecosystem.js    # 3D ecosystem visualization
│   │   ├── Demo.js         # Demo section
│   │   ├── FAQ.js          # FAQ accordion
│   │   ├── Contact.js      # Contact form
│   │   └── Footer.js       # Footer component
│   ├── contexts/
│   │   └── ThemeContext.js # Theme state management
│   ├── App.js              # Main application
│   ├── App.css             # Global styles
│   └── index.js            # Entry point
├── package.json            # Dependencies
└── README.md              # This file
```

## 🎨 Customization

### Change Theme Colors

Edit `src/App.css`:

```css
:root[data-theme="light"] {
  --primary-color: #6366f1;
  --secondary-color: #ec4899;
  /* Add your colors */
}

:root[data-theme="dark"] {
  --primary-color: #818cf8;
  --secondary-color: #f472b6;
  /* Add your colors */
}
```

### Modify 3D Models

Edit `src/components/Hero.js` or `src/components/Ecosystem.js`:

```jsx
<MeshDistortMaterial
  color="#6366f1"  // Change color
  distort={0.5}    // Adjust distortion
  speed={2}        // Change animation speed
/>
```

## 🚀 Deployment

### GitHub Pages (Automatic)

The project uses GitHub Actions for automatic deployment. Every push to the `main` branch triggers a new deployment.

```bash
git add .
git commit -m "Update website"
git push origin main
```

Your changes will be live at https://vishshield.github.io in 2-3 minutes.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy manually
npm run deploy
```

## 🔍 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |

**Note:** WebGL support required for 3D features

## 📊 Performance

- **Bundle Size:** ~500KB (gzipped)
- **First Contentful Paint:** <1.5s
- **Time to Interactive:** <3s
- **Lighthouse Score:** 95+

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 🌟 Features Overview

### Core Functionality
- **Proactive Disruption** - AI bots engage scammers in real-time
- **Intelligence Extraction** - Capture scammer tactics and data
- **Actionable Insights** - Analytics and reporting dashboard

### Target Industries
- **Telecommunications** - Network protection and call filtering
- **Financial Services** - Fraud prevention and crypto security
- **Government** - Citizen protection and investigation tools

## 📧 Contact

- **Website:** https://vishshield.github.io
- **Email:** contact@vishshield.ai
- **Repository:** https://github.com/VishShield/VishShield.github.io

## 🙏 Acknowledgments

- Inspired by [apate.ai](https://www.apate.ai/)
- Built with React and Three.js communities
- Powered by modern web technologies

---

**Built with ❤️ using React, Three.js, and Framer Motion**

*Protecting businesses and consumers from fraud through AI-powered intelligence*
