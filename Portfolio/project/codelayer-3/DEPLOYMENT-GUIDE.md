# Vercel Deployment Guide

Your portfolio is now ready to deploy! Follow these simple steps:

## 📦 What's Included

All necessary files are ready:
- ✅ `package.json` - Dependencies (including TypeScript)
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `tsconfig.node.json` - TypeScript for Vite config
- ✅ `index.html` - Entry point
- ✅ `vite.config.ts` - Build configuration
- ✅ `tailwind.config.js` - Tailwind CSS setup
- ✅ `postcss.config.js` - PostCSS configuration
- ✅ `vercel.json` - Vercel deployment config (SPA routing)
- ✅ `src/Portfolio.tsx` - Your complete portfolio
- ✅ `src/main.tsx` - React entry
- ✅ `src/index.css` - Global styles
- ✅ `.gitignore` - Ignore build files

## 🚀 Deploy to Vercel (Free - 2 Minutes)

### Option A: Deploy via Vercel Website (Easiest)

1. **Download all files** from this Figma Code environment
   - Save the entire project folder to your computer

2. **Go to [vercel.com](https://vercel.com)**
   - Click "Sign Up" (free - use GitHub, GitLab, or email)

3. **Create New Project**
   - Click "Add New" → "Project"
   - Click "Browse" or drag your project folder

4. **Vercel Auto-Detects Everything**
   - Framework: Vite ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
   - Install Command: `npm install` ✅

5. **Click "Deploy"**
   - Wait 30-60 seconds
   - Done! 🎉

6. **Your Live URL**
   - Vercel gives you: `your-project-name.vercel.app`
   - You can customize the domain name in settings

### Option B: Deploy via Vercel CLI (For Developers)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to your project folder
cd your-portfolio-folder

# Install dependencies
npm install

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? (enter name)
# - Directory? ./
# - Override settings? N
```

## 🔧 Local Testing (Optional)

Want to test locally first?

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open browser to http://localhost:5173
```

## 📱 After Deployment

Once deployed, your portfolio will be live at a URL like:
```
https://ivo-sousa-martins.vercel.app
```

### Use this URL with Figma Plugin:

1. **Open Figma**
2. **Plugins** → Search "html.to.design"
3. **Install and run the plugin**
4. **Enter your Vercel URL**
5. **Convert** → Figma creates editable design layers!

## ⚙️ Vercel Features (Free Tier)

- ✅ Unlimited deployments
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic builds on updates
- ✅ Custom domain support
- ✅ Analytics
- ✅ 100 GB bandwidth/month

## 🎨 Customization

After deploying, you can:
- **Edit content** in `src/Portfolio.tsx`
- **Change colors** in the component styles
- **Update images** by replacing Unsplash URLs
- **Add sections** by creating new components

Every time you update and redeploy, Vercel rebuilds automatically!

## 🆘 Troubleshooting

**Build fails?**
- Make sure all files are in the correct folders
- Check that `package.json` is at the root level

**Images not loading?**
- Unsplash URLs are already included and work
- Images load from CDN automatically

**Want to update?**
- Edit files locally
- Run `vercel` again or push to connected Git repo
- Vercel rebuilds automatically

## 📧 Support

If you get stuck:
- Vercel Docs: https://vercel.com/docs
- Vercel Discord: https://vercel.com/discord

---

**That's it!** Your portfolio will be live and ready to convert to Figma designs.

Estimated total time: **2-3 minutes** ⚡