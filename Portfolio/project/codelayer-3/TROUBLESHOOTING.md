# Troubleshooting Guide

## 🔴 404 NOT_FOUND Error - FIXED!

If you saw this error:
```
404: NOT_FOUND
Code: NOT_FOUND
ID: cdg1::2m7b6-xxxxx
```

### ✅ Solution Applied

I've added the missing files:
1. **`tsconfig.json`** - TypeScript configuration for React
2. **`tsconfig.node.json`** - TypeScript for Vite config
3. **`vercel.json`** - SPA routing configuration
4. **`.gitignore`** - Prevents deploying node_modules
5. **Updated `package.json`** - Added TypeScript dependency

### 🔄 Next Steps

**Redeploy to Vercel:**

1. Download ALL files from this project
2. Delete your existing Vercel deployment (or just redeploy)
3. Upload the new complete folder
4. Deploy again

**Vercel will now:**
- ✅ Build successfully with TypeScript
- ✅ Handle all routes correctly
- ✅ Serve your portfolio without 404 errors

---

## Common Errors & Solutions

### Error: "Build Failed - Cannot find module"

**Cause:** Missing dependencies or wrong folder structure

**Fix:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install

# Or on Windows:
rmdir /s node_modules
npm install
```

---

### Error: "tsc: command not found"

**Cause:** TypeScript not installed

**Fix:** The new `package.json` includes TypeScript. Just run:
```bash
npm install
```

---

### Error: Images not loading

**Cause:** Unsplash rate limiting or CORS issues

**Fix:** Images should work automatically. If not, they're loaded from:
- `https://images.unsplash.com/`
- These are public CDN URLs and should work globally

**Alternative:** Replace image URLs in `/src/Portfolio.tsx`:
```tsx
// Line ~201 onwards
image: "YOUR_IMAGE_URL_HERE"
```

---

### Error: Fonts not loading / Weird font rendering

**Cause:** Google Fonts not loading

**Fix:** Fonts are loaded in `/src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@1&family=DM+Sans:wght@300;400;500&display=swap');
```

This should work automatically. If not, check your browser console for errors.

---

### Error: "Blank page" after deployment

**Cause:** JavaScript errors or wrong build path

**Fix 1:** Check Vercel build logs
- Go to Vercel Dashboard → Your Project → Deployments
- Click latest deployment → "Build Logs"
- Look for errors

**Fix 2:** Check browser console
- Open deployed site
- Press F12 → Console tab
- Look for errors in red

**Fix 3:** Verify output directory
In Vercel settings, ensure:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

### Error: Hash navigation not working (#work, #about)

**Cause:** `vercel.json` SPA config might be interfering

**Fix:** The current `vercel.json` is configured correctly:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures ALL routes serve `index.html`, allowing hash navigation to work.

---

### Error: "Module not found: motion/react"

**Cause:** This portfolio doesn't use animations (static version)

**Fix:** No fix needed - animations were intentionally removed for Figma compatibility.

If you want to add animations back, install:
```bash
npm install motion
```

---

## Build Command Reference

### Local Development
```bash
npm run dev        # Start dev server on http://localhost:5173
```

### Local Build Test
```bash
npm run build      # Build for production
npm run preview    # Preview production build locally
```

### Vercel Deployment
```bash
vercel            # Deploy to Vercel (requires Vercel CLI)
vercel --prod     # Deploy to production
```

---

## File Structure Verification

Your project should look like this:

```
your-project/
├── src/
│   ├── Portfolio.tsx      ← Main component
│   ├── main.tsx           ← React entry
│   └── index.css          ← Global styles
├── index.html             ← HTML entry
├── package.json           ← Dependencies
├── tsconfig.json          ← TypeScript config
├── tsconfig.node.json     ← TypeScript for Vite
├── vite.config.ts         ← Vite config
├── tailwind.config.js     ← Tailwind config
├── postcss.config.js      ← PostCSS config
├── vercel.json            ← Vercel config
└── .gitignore             ← Git ignore
```

**Files you DON'T need to deploy:**
- `node_modules/` (auto-installed)
- `dist/` (auto-generated)
- `/main.tsx` in root (old file, not needed)
- `/components/` in root (old files, not needed)

---

## Vercel Deployment Checklist

Before deploying, verify:

- [ ] All files downloaded from Figma Code
- [ ] `package.json` at root level
- [ ] `src/` folder exists with Portfolio.tsx, main.tsx, index.css
- [ ] `index.html` at root level
- [ ] `vercel.json` at root level
- [ ] `tsconfig.json` at root level
- [ ] No old files in root (`main.tsx`, `components/`)

**After uploading to Vercel:**

- [ ] Build succeeds (check logs)
- [ ] Site loads at preview URL
- [ ] Navigation works (WORK, ABOUT, CONTACT, CV)
- [ ] Images load
- [ ] Fonts look correct
- [ ] No console errors (F12 → Console)

---

## Getting Help

Still stuck? Check:

1. **Vercel Build Logs**
   - Dashboard → Your Project → Deployments → Latest → "Building"
   - Look for error messages

2. **Browser Console**
   - Open site → F12 → Console tab
   - Screenshot any errors

3. **Vercel Support**
   - https://vercel.com/docs
   - https://vercel.com/discord

4. **Common Issues Database**
   - https://vercel.com/docs/errors

---

## Success Indicators

You'll know it's working when:

✅ Build completes in ~30-60 seconds
✅ Vercel shows green "Ready" status  
✅ Preview URL loads the portfolio
✅ Hero section shows "IVO SOUSA MARTINS"
✅ Navigation links work
✅ Images load correctly
✅ No 404 errors

**Then you're ready for Figma import!** 🎉
