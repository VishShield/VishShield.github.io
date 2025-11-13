# 🚀 Quick Start Guide - ScamShield AI

Get your website running in **3 simple steps**!

## Step 1️⃣: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install:
- React 18
- React Three Fiber (for 3D models)
- Framer Motion (for animations)
- React Icons
- All other dependencies

⏱️ **Time:** ~2-3 minutes

---

## Step 2️⃣: Start Development Server

```bash
npm start
```

This will:
- Compile the React app
- Open your browser automatically
- Start hot-reload (changes appear instantly)

🌐 **URL:** http://localhost:3000

⏱️ **Time:** ~30 seconds

---

## Step 3️⃣: Explore the Features

### 🌓 Try the Theme Toggle
- Look for the **sun/moon icon** in the top-right navbar
- Click it to switch between dark and light themes
- Theme preference is saved automatically!

### 🎭 Interact with 3D Models
- **Hero Section**: Watch the animated 3D sphere
  - Try dragging with your mouse to rotate the view
  - It auto-rotates and distorts beautifully
  
- **Ecosystem Section**: See multiple 3D shapes
  - 4 different rotating geometric shapes
  - Interactive camera controls

### ✨ Scroll Through Animations
- Scroll down slowly to see smooth animations
- Elements fade in and slide up as you scroll
- Hover over cards to see interactive effects

---

## 🎨 Quick Customization

### Change Theme Colors

Edit `src/App.css` (lines 1-50):

```css
:root[data-theme="light"] {
  --primary-color: #6366f1;  /* Change this! */
}
```

### Change 3D Sphere Color

Edit `src/components/Hero.js` (around line 25):

```jsx
<MeshDistortMaterial
  color="#6366f1"  /* Change this hex color! */
/>
```

### Update Company Name

1. Search for "ScamShield AI" across all files
2. Replace with your company name
3. Save and see changes instantly!

---

## 📦 Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized `build` folder ready for deployment.

**Deploy to:**
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Run `vercel` command
- **GitHub Pages**: See README.md for instructions

---

## 🎯 Key Components

| Component | What It Does | File Location |
|-----------|-------------|---------------|
| **Navbar** | Navigation + Theme Toggle | `src/components/Navbar.js` |
| **Hero** | Hero section with 3D sphere | `src/components/Hero.js` |
| **Stats** | Animated statistics | `src/components/Stats.js` |
| **Ecosystem** | 3D shapes ecosystem | `src/components/Ecosystem.js` |
| **FAQ** | Accordion questions | `src/components/FAQ.js` |
| **Contact** | Contact form | `src/components/Contact.js` |

---

## 🐛 Troubleshooting

### Port 3000 Already in Use?
```bash
# Windows
npx kill-port 3000
npm start

# Mac/Linux
lsof -ti:3000 | xargs kill
npm start
```

### 3D Models Not Showing?
1. Check browser console (F12) for errors
2. Make sure WebGL is enabled
3. Try a different browser (Chrome recommended)

### Dependencies Not Installing?
```bash
# Clear everything and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Theme Not Switching?
1. Check browser console for errors
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check if localStorage is enabled in your browser

---

## 📚 Learn More

- **Full Documentation**: See `README.md`
- **Detailed Guide**: See `README-REACT.md`
- **React Docs**: https://react.dev/
- **Three.js Guide**: https://threejs.org/manual/

---

## ✅ Checklist

After starting the project, you should see:

- [x] Website opens at localhost:3000
- [x] Navigation bar at the top with theme toggle
- [x] Animated 3D sphere in hero section
- [x] Smooth scroll animations
- [x] Dark/Light theme switch working
- [x] All sections loading properly
- [x] Responsive design on mobile (resize browser)

---

## 🎉 You're All Set!

Your modern React website with 3D models and theme switching is now running!

**Next Steps:**
1. Customize the content to match your brand
2. Change colors and styles
3. Add your own images and content
4. Deploy to production when ready

**Need Help?** 
- Check `README.md` for detailed documentation
- Open browser console (F12) to see any errors
- Verify all dependencies installed correctly

---

**Happy Coding! 🚀**

Built with React, Three.js, and Framer Motion ❤️

