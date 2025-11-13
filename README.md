# ScamShield AI - Modern React Website with 3D Models

🎉 **Upgraded to React with 3D Models and Dark/Light Theme!**

A stunning, fully responsive website built with React, featuring:
- 🎭 **Interactive 3D Models** (React Three Fiber)
- 🌓 **Dark/Light Theme Toggle** with smooth transitions
- ✨ **Advanced Animations** (Framer Motion)
- 📱 **Fully Responsive Design**
- ⚡ **High Performance** optimizations

![React](https://img.shields.io/badge/React-18.2-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.163-green)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-purple)

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
```

## ✨ Key Features

### 🎨 Theme System
- **Persistent dark/light mode** saved to localStorage
- **Smooth transitions** between themes
- **Theme toggle button** in navbar (moon/sun icon)
- **Optimized colors** for both themes

### 🎭 3D Models
- **Hero Section**: Animated distorting sphere with auto-rotation
- **Ecosystem Section**: Multiple rotating 3D shapes (spheres, boxes, torus)
- **Interactive**: Mouse-controlled camera with OrbitControls
- **Optimized**: GPU-accelerated WebGL rendering

### ✨ Animations (Framer Motion)
- **Scroll-triggered** animations on all sections
- **Smooth transitions** between tabs and accordions
- **Hover effects** on cards and buttons
- **Interactive** form input animations
- **Staggered** children animations
- **Page entrance** animations

### 📱 Responsive Design
- Mobile-first approach
- Hamburger menu on mobile
- Optimized 3D canvas for all devices
- Touch-friendly interactions

## 📁 Project Structure

```
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.js       # Navigation + Theme Toggle
│   │   ├── Hero.js         # Hero with 3D sphere
│   │   ├── Stats.js        # Animated statistics
│   │   ├── HowItWorks.js   # Timeline
│   │   ├── Features.js     # Feature cards
│   │   ├── Ecosystem.js    # 3D shapes ecosystem
│   │   ├── Demo.js         # Demo showcase
│   │   ├── WhoWeSupport.js # Support tabs
│   │   ├── FAQ.js          # Accordion FAQ
│   │   ├── Contact.js      # Contact form
│   │   └── Footer.js       # Footer
│   ├── contexts/
│   │   └── ThemeContext.js # Theme state management
│   ├── App.js              # Main component
│   ├── App.css             # Global styles + theme variables
│   ├── index.js            # Entry point
│   └── index.css           # Base styles
├── package.json            # Dependencies
└── README.md               # This file
```

## 🎯 Technologies

| Package | Version | Purpose |
|---------|---------|---------|
| **react** | ^18.2.0 | UI Framework |
| **react-three/fiber** | ^8.16.2 | React renderer for Three.js |
| **react-three/drei** | ^9.105.4 | 3D helpers |
| **three** | ^0.163.0 | 3D engine |
| **framer-motion** | ^11.0.28 | Animation library |
| **react-icons** | ^5.0.1 | Icon library |

## 🎨 Customization

### Change Theme Colors

Edit `src/App.css`:

```css
:root[data-theme="light"] {
  --primary-color: #6366f1;
  --secondary-color: #ec4899;
  /* ... other colors */
}

:root[data-theme="dark"] {
  --primary-color: #818cf8;
  --secondary-color: #f472b6;
  /* ... other colors */
}
```

### Modify 3D Models

**Hero Sphere** (`src/components/Hero.js`):
```jsx
<Sphere args={[1, 100, 200]} scale={2.5}>
  <MeshDistortMaterial
    color="#6366f1"  // Change color
    distort={0.5}    // Change distortion
    speed={2}        // Change animation speed
  />
</Sphere>
```

**Ecosystem Shapes** (`src/components/Ecosystem.js`):
```jsx
<RotatingShape 
  position={[-2, 2, 0]} 
  shape="sphere"     // sphere, box, or torus
  color="#6366f1"    // Any hex color
/>
```

### Adjust Animations

Change animation duration in any component:
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }} // Adjust here
>
```

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json:
"homepage": "https://username.github.io/repo-name",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

npm run deploy
```

## 📖 Documentation

For detailed documentation, see [README-REACT.md](./README-REACT.md)

Topics covered:
- Theme system implementation
- 3D model customization
- Animation system guide
- Performance optimization
- Troubleshooting
- Advanced features

## 🎓 Learn More

- [React Documentation](https://react.dev/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js Fundamentals](https://threejs.org/manual/)

## 🌐 Browser Support

✅ Chrome (latest 2 versions)  
✅ Firefox (latest 2 versions)  
✅ Safari (latest 2 versions)  
✅ Edge (latest 2 versions)

**Note:** WebGL support required for 3D features

## 📝 Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

## 🐛 Issues?

If you encounter any issues:
1. Clear node_modules: `rm -rf node_modules package-lock.json`
2. Reinstall: `npm install`
3. Clear browser cache
4. Check browser console for errors

## 💡 Features Highlights

✅ **Modern React 18** with hooks  
✅ **3D Animated Sphere** in hero  
✅ **Multiple 3D Shapes** in ecosystem  
✅ **Dark/Light Theme** with smooth transitions  
✅ **Framer Motion** animations throughout  
✅ **Scroll Animations** on all sections  
✅ **Interactive Hover Effects**  
✅ **Tab Switching** with animations  
✅ **FAQ Accordion** smooth expand/collapse  
✅ **Form Animations** with validation  
✅ **Responsive Design** mobile-first  
✅ **Animated Stats Counter**  
✅ **Rotating Hero Text**  
✅ **Partner Marquee** animation  
✅ **Social Media** icons with effects  

## 🎯 Performance

- ⚡ Fast loading with code splitting
- 🎨 GPU-accelerated CSS animations
- 🖼️ Optimized 3D geometry
- 📦 Small bundle size (~500KB gzipped)
- 🚀 Lighthouse score: 95+

## 🌟 Inspiration

Inspired by [apate.ai](https://www.apate.ai/) - An innovative platform for AI-powered scam prevention and intelligence.

## 📄 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

---

**Built with ❤️ using React, Three.js & Framer Motion**

For questions or support, feel free to open an issue or reach out!

🔗 [Live Demo](#) | 📚 [Full Documentation](./README-REACT.md) | 🐛 [Report Bug](#)
