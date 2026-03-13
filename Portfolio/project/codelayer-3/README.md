# Ivo Sousa Martins - Portfolio Website

A sophisticated dark theme portfolio for a Creative Director based in Lisbon, featuring elegant typography, smooth interactions, and a modern minimalist aesthetic.

## 🎯 Project Overview

**Creative Director Portfolio** showcasing:
- 8 complete sections (Hero, Marquee, Work, Clients, About, Contact, Footer)
- 6 featured projects in asymmetric grid layout
- Sophisticated design system with orange accents (#E8622A)
- Custom typography (Bebas Neue, DM Serif Display, DM Sans)
- Production-ready, static snapshot (perfect for Figma export)

## 🚀 Quick Start

### Deploy to Vercel (Recommended)

1. Download all project files
2. Go to [vercel.com](https://vercel.com) (sign up free)
3. Click "New Project" → Upload folder
4. Click "Deploy"
5. Get your live URL in 60 seconds!

**See detailed instructions:** [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)

### Run Locally

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## 📐 Export to Figma

After deploying to Vercel:

### Method 1: Use Figma Plugin (Best Results)
1. Deploy to Vercel (get live URL)
2. In Figma: **Plugins** → **html.to.design**
3. Enter your Vercel URL
4. Convert to editable Figma layers!

### Method 2: Manual Rebuild
Use the comprehensive build guide:
- **[FIGMA-BUILD-GUIDE.md](FIGMA-BUILD-GUIDE.md)**
- Complete design system specifications
- Exact measurements for every section
- Color palette, typography, spacing tokens

## 📁 Project Structure

```
/
├── index.html              # Entry HTML
├── package.json            # Dependencies
├── vite.config.ts         # Vite config
├── tailwind.config.js     # Tailwind setup
├── postcss.config.js      # PostCSS setup
├── src/
│   ├── main.tsx           # React entry point
│   ├── Portfolio.tsx      # Main portfolio component
│   └── index.css          # Global styles + fonts
├── DEPLOYMENT-GUIDE.md    # How to deploy
├── FIGMA-BUILD-GUIDE.md   # How to recreate in Figma
└── README.md              # This file
```

## 🎨 Design System

### Colors
- **Background:** #FAFAF7 (off-white)
- **Secondary BG:** #F0EDE6 (warm gray)
- **Text:** #0E0E0E (near black)
- **Accent:** #E8622A (orange)
- **Success:** #2A9D5C (green)

### Typography
- **Display:** Bebas Neue (headings, stats, logos)
- **Serif:** DM Serif Display Italic (accents, subtitles)
- **Sans:** DM Sans 300/400/500 (body text, labels)

### Sections
1. **Navigation** - Fixed header with blur
2. **Hero** - Two-column layout with stats and markets
3. **Marquee** - Scrolling services ribbon
4. **Work** - 12-column asymmetric project grid (6 projects)
5. **Clients** - Logo grid (11 brands)
6. **About** - Two-column with skills grid
7. **Contact** - Contact info with gradient line
8. **Footer** - Three-column layout

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Google Fonts** - Typography
- **Unsplash** - Project images

## 📦 What's Different?

This is a **static snapshot version** - perfect for:
- ✅ Deployment to Vercel/Netlify
- ✅ Figma plugin conversion
- ✅ Fast loading times
- ✅ SEO-friendly

**No animations included** (removed Framer Motion for Figma compatibility)

## 🔧 Customization

Edit `/src/Portfolio.tsx` to customize:
- Project data (lines 193-255)
- Client list (lines 357-368)
- Skills (lines 397-423)
- Contact info (lines 515-520)
- All content and copy

## 📝 License

This portfolio template is ready for your use. Customize content, colors, and structure as needed.

## 🆘 Need Help?

1. **Deployment Issues?** → See [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)
2. **Figma Export?** → See [FIGMA-BUILD-GUIDE.md](FIGMA-BUILD-GUIDE.md)
3. **Vercel Support** → [vercel.com/docs](https://vercel.com/docs)

---

**Built with attention to detail** • Ready to deploy in 2 minutes ⚡
