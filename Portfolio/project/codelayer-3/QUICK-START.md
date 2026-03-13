# ⚡ Quick Start - Deploy in 3 Minutes

## 📋 Pre-Flight Checklist

Before deploying, make sure you have these **essential files**:

### ✅ Required Files (Must Have)
```
✓ index.html
✓ package.json
✓ tsconfig.json
✓ tsconfig.node.json
✓ vite.config.ts
✓ tailwind.config.js
✓ postcss.config.js
✓ vercel.json
✓ src/Portfolio.tsx
✓ src/main.tsx
✓ src/index.css
```

### ❌ Files to DELETE (Don't Deploy These)
```
✗ main.tsx (in root, not in /src)
✗ main-static.tsx
✗ /components/*.tsx (old individual component files)
✗ node_modules/ (if present)
✗ dist/ (if present)
```

---

## 🚀 Deploy Steps

### 1️⃣ Download Project
- Download ALL files from Figma Code
- Save to a folder like `ivo-portfolio/`

### 2️⃣ Clean Up (IMPORTANT!)
Delete these OLD files if they exist:
- `/main.tsx` (root level - NOT the one in `/src`)
- `/main-static.tsx`
- `/components/` folder (old structure)

**Keep only:**
- Everything in `/src/` folder
- All config files at root
- `index.html` at root

### 3️⃣ Deploy to Vercel

**Option A: Drag & Drop (Easiest)**
1. Go to [vercel.com](https://vercel.com/new)
2. Sign up/login (free)
3. Drag your `ivo-portfolio/` folder
4. Click "Deploy"
5. Wait 60 seconds
6. Done! ✅

**Option B: GitHub (Automatic Updates)**
1. Create GitHub repo
2. Push your code
3. Go to [vercel.com](https://vercel.com/new)
4. Import from GitHub
5. Click "Deploy"
6. Every push auto-deploys ✅

---

## 🎯 What Vercel Should Detect

When you upload, Vercel should automatically detect:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**Don't change these!** Just click "Deploy".

---

## ✅ Success Checklist

After deploying, verify:

### Build Phase
- [ ] "Installing dependencies" - SUCCESS
- [ ] "Running build command" - SUCCESS
- [ ] "Build completed" - Shows green ✓
- [ ] "Deployment ready" - Shows URL

### Live Site
- [ ] URL loads (something like `your-project.vercel.app`)
- [ ] Hero section shows "IVO SOUSA MARTINS"
- [ ] Navigation works (WORK, ABOUT, CONTACT, CV)
- [ ] Images load from Unsplash
- [ ] Fonts look correct (Bebas Neue for headings)
- [ ] No 404 errors
- [ ] No blank pages

### Browser Console (Press F12)
- [ ] No red errors
- [ ] No "404 NOT_FOUND" messages

---

## 🐛 Quick Fixes

### If build fails:
1. Check Vercel build logs
2. Look for "Missing dependency" errors
3. Verify all files are uploaded

### If you see 404:
1. Make sure `vercel.json` is at root level
2. Redeploy (delete and upload again)

### If page is blank:
1. Press F12 → Console tab
2. Look for errors
3. Verify `/src/main.tsx` imports `./Portfolio`

### If fonts look wrong:
1. Check `/src/index.css` exists
2. Verify Google Fonts URL is in the file
3. Clear browser cache (Ctrl+Shift+R)

---

## 📱 After Successful Deploy

You'll get a URL like:
```
https://ivo-portfolio-abc123.vercel.app
```

### Use with Figma Plugin:

1. **Open Figma**
2. **Plugins** → "html.to.design"
3. **Enter your Vercel URL**
4. **Click "Fetch and Insert"**
5. **Wait 30-60 seconds**
6. **Editable layers appear!** 🎉

---

## 🎨 Next Steps

After successful deployment + Figma import:

1. **Customize in Figma**
   - Edit text, colors, layout
   - Use the design as a base
   - Export assets as needed

2. **Update Content**
   - Edit `/src/Portfolio.tsx`
   - Change project data, colors, copy
   - Redeploy to see changes live

3. **Connect Custom Domain** (Optional)
   - Go to Vercel Dashboard → Your Project
   - Settings → Domains
   - Add your custom domain

---

## 📊 Expected Timeline

- **Download files:** 30 seconds
- **Upload to Vercel:** 30 seconds  
- **Build & deploy:** 60 seconds
- **Verify site:** 30 seconds

**Total: ~3 minutes** ⚡

---

## 🆘 Still Having Issues?

See **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** for detailed error fixes.

**Most common issue:** Old files in the deployment package
**Quick fix:** Delete everything except the required files listed at the top of this guide.

---

**Ready? Let's deploy!** 🚀
