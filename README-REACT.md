# ScamShield AI - React + 3D Models + Dark/Light Theme

A stunning, modern React website with **3D animations**, **dark/light theme toggle**, and **smooth transitions** inspired by apate.ai. Built with React, Three.js, and Framer Motion for the ultimate user experience.

## 🌟 New Features

### 🎨 **Dark/Light Theme Toggle**
- Seamless theme switching with smooth transitions
- Persistent theme preference (saved in localStorage)
- Optimized colors for both themes
- Theme-aware components throughout

### 🎭 **3D Models & Animations**
- **Interactive 3D Sphere** in hero section (React Three Fiber)
- **Rotating 3D Shapes** in ecosystem section (spheres, boxes, torus)
- Auto-rotating camera controls
- Smooth GPU-accelerated animations
- Responsive 3D canvas

### ✨ **Enhanced Transitions (Framer Motion)**
- Scroll-triggered animations on all sections
- Smooth page entrance animations
- Interactive hover effects
- Tab switching animations
- FAQ accordion with smooth expand/collapse
- Form input focus animations
- Button hover and tap animations
- Staggered children animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm start
```

The website will open at `http://localhost:3000`

3. **Build for Production**
```bash
npm run build
```

## 📦 Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 18** | Core framework |
| **React Three Fiber** | 3D graphics rendering |
| **Three.js** | 3D engine |
| **@react-three/drei** | 3D helpers and abstractions |
| **Framer Motion** | Advanced animations |
| **React Icons** | Icon library |

## 🎨 Theme System

### How It Works

The theme system uses React Context API for global state management:

```javascript
// Toggle theme anywhere in the app
const { theme, toggleTheme, isDark } = useTheme();
```

### Customizing Themes

Edit theme colors in `src/App.css`:

```css
:root[data-theme="light"] {
  --primary-color: #6366f1;
  --text-dark: #1e293b;
  --bg-light: #ffffff;
  /* ... */
}

:root[data-theme="dark"] {
  --primary-color: #818cf8;
  --text-dark: #f1f5f9;
  --bg-light: #1e293b;
  /* ... */
}
```

## 🎭 3D Models

### Hero Section - Animated Sphere

```jsx
<Sphere visible args={[1, 100, 200]} scale={2.5}>
  <MeshDistortMaterial
    color="#6366f1"
    distort={0.5}
    speed={2}
  />
</Sphere>
```

Features:
- Material distortion effect
- Auto-rotation with OrbitControls
- Responds to mouse movement
- Optimized for performance

### Ecosystem Section - Multiple Shapes

Features:
- 4 rotating geometric shapes (spheres, boxes, torus)
- Different colors for each shape
- Continuous rotation animation
- Interactive camera controls

### Customizing 3D Models

Edit 3D components in:
- `src/components/Hero.js` - Hero sphere
- `src/components/Ecosystem.js` - Ecosystem shapes

## ✨ Animation System

### Framer Motion Features

1. **Scroll Animations**
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

2. **Hover Effects**
```jsx
<motion.div
  whileHover={{ scale: 1.05, y: -10 }}
  whileTap={{ scale: 0.95 }}
>
```

3. **Staggered Children**
```jsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation with theme toggle
│   ├── Hero.js            # Hero with 3D sphere
│   ├── Stats.js           # Animated statistics
│   ├── HowItWorks.js      # Timeline section
│   ├── Features.js        # Feature cards
│   ├── Ecosystem.js       # 3D ecosystem visualization
│   ├── Demo.js            # Tabbed demo section
│   ├── WhoWeSupport.js    # Support categories
│   ├── FAQ.js             # Accordion FAQ
│   ├── Contact.js         # Contact form
│   └── Footer.js          # Footer
├── contexts/
│   └── ThemeContext.js    # Theme management
├── App.js                 # Main app component
├── App.css                # Global styles & theme variables
├── index.js               # React entry point
└── index.css              # Base styles
```

## 🎯 Key Features

### ✅ Completed Features

- [x] **React Architecture** - Component-based structure
- [x] **3D Sphere** in hero (distortion animation)
- [x] **3D Shapes** in ecosystem (rotating geometry)
- [x] **Dark/Light Theme** with smooth transitions
- [x] **Theme Toggle Button** in navbar
- [x] **Persistent Theme** (localStorage)
- [x] **Framer Motion** animations throughout
- [x] **Scroll Animations** on all sections
- [x] **Hover Effects** on interactive elements
- [x] **Tab Switching** animations
- [x] **FAQ Accordion** with smooth expand/collapse
- [x] **Form Animations** with focus states
- [x] **Responsive Design** for all screen sizes
- [x] **Animated Stats** counter
- [x] **Rotating Hero Text** with fade transitions
- [x] **Partner Marquee** animation
- [x] **Social Media Icons** with hover effects

## 🎨 Customization Guide

### 1. Change Company Name
Search and replace `ScamShield AI` in:
- `src/components/Navbar.js`
- `src/components/Footer.js`
- `public/index.html`

### 2. Update Logo
Replace the emoji `🛡️` with your logo:
- `src/components/Navbar.js`
- `src/components/Footer.js`

Or use an image:
```jsx
<img src="/logo.png" alt="Logo" className="logo-image" />
```

### 3. Modify 3D Models

**Change sphere color:**
```jsx
<MeshDistortMaterial color="#YOUR_COLOR" />
```

**Add more shapes:**
```jsx
<RotatingShape position={[x, y, z]} shape="sphere" color="#color" />
```

Available shapes: `sphere`, `box`, `torus`

### 4. Adjust Animation Speed

**3D Rotation:**
```jsx
<OrbitControls autoRotate autoRotateSpeed={1} /> // Change speed value
```

**Framer Motion:**
```jsx
transition={{ duration: 0.6 }} // Change duration
```

### 5. Theme Colors

Edit in `src/App.css` under `:root[data-theme="light"]` or `:root[data-theme="dark"]`

## 🚀 Performance Optimization

### Already Implemented
- ✅ React.memo() for expensive components
- ✅ Suspense for 3D components
- ✅ Lazy loading with code splitting
- ✅ CSS transitions (GPU accelerated)
- ✅ Optimized 3D geometry (low poly count)
- ✅ viewport prop for Framer Motion (animate once)
- ✅ Debounced scroll events

### Additional Optimizations
```bash
# Analyze bundle size
npm run build
npm install -g source-map-explorer
source-map-explorer 'build/static/js/*.js'
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)

## 🐛 Troubleshooting

### 3D Models Not Rendering
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Theme Not Persisting
Check browser's localStorage permissions:
```javascript
// In browser console
localStorage.getItem('theme')
```

### Animations Laggy
- Reduce animation duration
- Lower 3D geometry complexity
- Disable auto-rotate on mobile

## 🚀 Deployment

### Netlify
```bash
npm run build
# Drag and drop 'build' folder to Netlify
```

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

## 🎯 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |

**Note:** WebGL required for 3D features

## 🔥 Pro Tips

1. **Theme Toggle Keyboard Shortcut**: Add to `Navbar.js`:
```jsx
useEffect(() => {
  const handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === 't') {
      toggleTheme();
    }
  };
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [toggleTheme]);
```

2. **Add Loading Screen**: Create `src/components/Loader.js` for 3D model loading

3. **Enhance 3D**: Add particle effects, custom shaders, or GLTF models

4. **Performance Monitoring**: 
```bash
npm install --save-dev @welldone-software/why-did-you-render
```

## 📄 License

This project is free to use for personal and commercial projects.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 💡 Inspiration

Inspired by [apate.ai](https://www.apate.ai/) - A cutting-edge platform for AI-powered scam prevention.

---

**Built with ❤️ using React, Three.js, and Framer Motion**

**🎨 Features:** Dark/Light Theme | 3D Models | Smooth Animations | Fully Responsive

**⚡ Performance:** Optimized | Fast Loading | 60fps Animations

**🌟 Modern:** React 18 | WebGL | CSS3 | ES6+

