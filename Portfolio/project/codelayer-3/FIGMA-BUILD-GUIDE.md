# Ivo Sousa Martins Portfolio - Figma Build Guide

Complete specifications for manually recreating the portfolio in Figma.

---

## 🎨 DESIGN SYSTEM FOUNDATION

### Color Palette

Create these as Figma Color Styles:

**Primary Colors**
- `Background/Primary` → #FAFAF7
- `Background/Secondary` → #F0EDE6
- `Text/Primary` → #0E0E0E
- `Accent/Orange` → #E8622A
- `Accent/Green` → #2A9D5C

**Grays**
- `Text/Gray` → #878787
- `Text/Muted` → rgba(14, 14, 14, 0.5)
- `Text/Light` → rgba(14, 14, 14, 0.52)

**Overlay Colors**
- `Border/Light` → rgba(0, 0, 0, 0.08)
- `Border/Medium` → rgba(0, 0, 0, 0.09)
- `Border/Dark` → rgba(0, 0, 0, 0.12)
- `Border/Darker` → rgba(0, 0, 0, 0.18)
- `White/45` → rgba(250, 250, 247, 0.45)
- `White/70` → rgba(250, 250, 247, 0.7)
- `Orange/40` → rgba(232, 98, 42, 0.4)
- `Orange/04` → rgba(232, 98, 42, 0.04)
- `Orange/35` → rgba(232, 98, 42, 0.35)
- `Orange/12` → rgba(232, 98, 42, 0.12)
- `Nav/BG` → rgba(250, 250, 247, 0.94)

### Typography Styles

**Font Families**
- Bebas Neue (for display/headings)
- DM Serif Display (italic only - for accents)
- DM Sans (body text - weights: 300, 400, 500)

**Text Styles to Create:**

1. **Display/Hero**
   - Font: Bebas Neue
   - Size: 208px (use clamp in code, but start at 208px for 1440px width)
   - Line Height: 90%
   - Letter Spacing: 2%
   - Color: Text/Primary

2. **Display/Section Heading**
   - Font: Bebas Neue
   - Size: 144px
   - Line Height: 90%
   - Letter Spacing: 2%
   - Color: Text/Primary

3. **Display/Medium**
   - Font: Bebas Neue
   - Size: 112px
   - Line Height: 92%
   - Letter Spacing: 2%
   - Color: Text/Primary

4. **Display/Stats**
   - Font: Bebas Neue
   - Size: 60.8px
   - Line Height: 100%
   - Letter Spacing: 2%
   - Color: Accent/Orange

5. **Display/Market Code**
   - Font: Bebas Neue
   - Size: 32px
   - Line Height: 100%
   - Letter Spacing: 6%
   - Color: Text/Primary

6. **Display/Project Title Large**
   - Font: Bebas Neue
   - Size: 64px
   - Line Height: 95%
   - Letter Spacing: 4%
   - Color: #FAFAF7

7. **Display/Project Title Small**
   - Font: Bebas Neue
   - Size: 48px
   - Line Height: 95%
   - Letter Spacing: 4%
   - Color: #FAFAF7

8. **Display/Skill Card**
   - Font: Bebas Neue
   - Size: 19.2px
   - Line Height: auto
   - Letter Spacing: 6%
   - Color: Text/Primary

9. **Display/Client Logo**
   - Font: Bebas Neue
   - Size: 19.2px
   - Color: Text/Primary

10. **Serif/Tagline**
    - Font: DM Serif Display
    - Style: Italic
    - Size: 18.4px
    - Color: Text/Gray

11. **Serif/Project Client**
    - Font: DM Serif Display
    - Style: Italic
    - Size: 13.6px
    - Color: Text/Gray

12. **Serif/Market City**
    - Font: DM Serif Display
    - Style: Italic
    - Size: 12px
    - Color: Text/Gray

13. **Serif/Section Count**
    - Font: DM Serif Display
    - Style: Italic
    - Size: 14.4px
    - Color: Text/Gray

14. **Serif/About Accent**
    - Font: DM Serif Display
    - Style: Italic
    - Size: 0.78em of parent
    - Color: Accent/Orange

15. **Body/Primary**
    - Font: DM Sans Regular (400)
    - Size: 14.4px
    - Line Height: 170%
    - Color: Text/Muted

16. **Body/About**
    - Font: DM Sans Regular (400)
    - Size: 14.4px
    - Line Height: 175%
    - Color: Text/Light

17. **Body/Skill Description**
    - Font: DM Sans Regular (400)
    - Size: 12.48px
    - Line Height: 160%
    - Color: Text/Gray

18. **Body/Contact Value**
    - Font: DM Sans Regular (400)
    - Size: 16px
    - Color: Text/Primary

19. **Label/Small**
    - Font: DM Sans Regular (400)
    - Size: 10.4px
    - Line Height: auto
    - Letter Spacing: 25%
    - Transform: Uppercase
    - Color: Text/Gray

20. **Label/Tiny**
    - Font: DM Sans Regular (400)
    - Size: 10.88px
    - Letter Spacing: 22%
    - Transform: Uppercase
    - Color: Text/Gray

21. **Label/Nav**
    - Font: DM Sans Regular (400)
    - Size: 10.88px
    - Letter Spacing: 22%
    - Transform: Uppercase
    - Color: Text/Gray

22. **Label/Tag**
    - Font: DM Sans Regular (400)
    - Size: 9.6px
    - Letter Spacing: 18%
    - Transform: Uppercase
    - Color: Accent/Orange

23. **Label/Project ID**
    - Font: DM Sans Regular (400)
    - Size: 10.4px
    - Letter Spacing: 15%
    - Color: White/45

24. **Label/Button**
    - Font: DM Sans Regular (400)
    - Size: 12px
    - Letter Spacing: 15%
    - Transform: Uppercase
    - Color: white or Text/Primary

25. **Label/Status**
    - Font: DM Sans Regular (400)
    - Size: 10.4px
    - Letter Spacing: 18%
    - Transform: Uppercase
    - Color: Accent/Green

26. **Label/Marquee**
    - Font: DM Sans Regular (400)
    - Size: 11.52px
    - Letter Spacing: 18%
    - Transform: Uppercase
    - Color: Text/Gray

27. **Label/Contact Label**
    - Font: DM Sans Regular (400)
    - Size: 10.4px
    - Letter Spacing: 20%
    - Transform: Uppercase
    - Color: Text/Gray

28. **Label/Footer**
    - Font: DM Sans Regular (400)
    - Size: 11.2px
    - Color: Text/Gray

29. **Label/Footer Small**
    - Font: DM Sans Regular (400)
    - Size: 10.4px
    - Letter Spacing: 18%
    - Transform: Uppercase
    - Color: Text/Gray

### Spacing System

Use an 8px base grid. Key spacing values:
- 4px (0.25rem)
- 8px (0.5rem)
- 12px (0.75rem)
- 16px (1rem)
- 20px (1.25rem)
- 24px (1.5rem)
- 32px (2rem)
- 40px (2.5rem)
- 48px (3rem)
- 56px (3.5rem)
- 64px (4rem)
- 96px (6rem)
- 128px (8rem)
- 144px (9rem)

### Effects

**Blur**
- Backdrop blur for nav: 16px

**Borders**
- Default border: 1px solid

---

## 📐 CANVAS SETUP

**Frame Setup:**
- Frame name: "Portfolio - Desktop"
- Width: 1440px (design at this width)
- Height: Auto-layout vertical
- Background: #FAFAF7

**Max Width Container:**
- Create a component called "Container/Max-Width"
- Width: 1440px
- Center aligned
- Use this for all section content

---

## 🧩 SECTION 1: NAVIGATION

**Frame Structure:**
```
Navigation [Frame - 1440px width, fixed position]
├─ Background [Rectangle - rgba(250,250,247,0.94) with 16px blur]
├─ Border Bottom [Line - 1px, rgba(0,0,0,0.08)]
└─ Content [Auto-layout H, space-between]
   ├─ Logo [Text - "ISM."]
   └─ Nav Links [Auto-layout H, 40px gap]
      ├─ Work
      ├─ About
      ├─ Contact
      └─ CV
```

**Measurements:**
- Height: Auto (padding determines)
- Padding: 24px (top/bottom), 48px (left/right)
- Logo: Font "Display/Nav" (create: Bebas Neue, 22.4px, tracking 12%)
- Links: Label/Nav style, 40px gap between items
- Position: Fixed to top

**States:**
- Default (shown in screenshot)
- Scrolled (has background + blur + border - same as default for static version)

---

## 🧩 SECTION 2: HERO

**Frame Structure:**
```
Hero Section [Frame - Full width, min-height: 100vh]
├─ Noise Texture Overlay [Rectangle - opacity 2%]
├─ Content Grid [Auto-layout H, 2 columns]
│  ├─ Left Column [Auto-layout V]
│  │  ├─ Subtitle [Text]
│  │  ├─ Name Stack [Auto-layout V]
│  │  │  ├─ IVO [Text - Display/Hero]
│  │  │  ├─ SOUSA [Text - Display/Hero, Orange]
│  │  │  └─ MARTINS [Text - Display/Hero]
│  │  ├─ Tagline [Text - Serif/Tagline]
│  │  ├─ Description [Text - Body/Primary]
│  │  └─ CTA Link [Text with underline]
│  └─ Right Column [Auto-layout V, align right]
│     ├─ Available Badge [Frame]
│     ├─ Stat 1 [Frame - border top]
│     ├─ Stat 2 [Frame - border top + bottom]
│     └─ Markets Grid [Grid 4 columns]
└─ Bottom Border [Line - 1px]
```

**Measurements:**

**Section:**
- Padding: 96px (top), 48px (left/right), 64px (bottom)
- Min height: 100vh (or fixed ~900px)

**Content Grid:**
- Max width: 1440px
- Gap: 64px
- 2 equal columns

**Left Column:**
- Subtitle: Label/Small, margin-bottom 32px
- Name spacing: 32px margin-bottom after name stack
- Name line-height: 0.9 (90%)
- Tagline: margin-top 32px, margin-bottom 20px
- Description: max-width 42ch (~504px), margin-bottom 40px
- CTA: border-bottom 1px solid #0E0E0E, padding-bottom 4.8px

**Right Column:**
- Max width: 440px
- Align: items-end, justify-start
- Margin-left: auto

**Available Badge:**
- Border: 1px solid #2A9D5C
- Padding: 5.6px 12.8px
- Gap: 8px
- Border-radius: 2px
- Margin-bottom: 48px
- Dot: 5px circle, bg #2A9D5C

**Stat Rows:**
- Padding: 22.4px (top/bottom)
- Border-top: 1px, rgba(0,0,0,0.12)
- Border-bottom: 1px (only stat 2)
- Layout: Space-between
- Number: Display/Stats (60.8px, orange)
- Label: 12px uppercase, tracking 6%, max-width 180px, right-aligned

**Markets Grid:**
- Margin-top: 32px
- Grid: 4 columns, no gap
- Each cell: 
  - Padding: 14.4px (top/bottom), 16px (right), 0 or 16px (left)
  - Border-left: 1px (except first) rgba(0,0,0,0.12)
  - Code: Display/Market Code
  - City: Serif/Market City, margin-top 3.2px

**Bottom Border:**
- Position: absolute bottom
- Height: 1px
- Color: rgba(0,0,0,0.08)

---

## 🧩 SECTION 3: MARQUEE

**Frame Structure:**
```
Marquee Section [Frame - Full width]
├─ Background [Rectangle - #F0EDE6]
├─ Border Top [Line]
├─ Border Bottom [Line]
├─ Left Fade [Rectangle - gradient]
├─ Right Fade [Rectangle - gradient]
└─ Content [Auto-layout H]
   ├─ Service 1 + ✦
   ├─ Service 2 + ✦
   └─ ... (8 total)
```

**Measurements:**
- Background: #F0EDE6
- Padding: 16px (top/bottom), 0 (sides)
- Border top/bottom: 1px, rgba(0,0,0,0.08)

**Fade Overlays:**
- Width: 128px each side
- Gradient: 
  - Left: #F0EDE6 0% → transparent 100%
  - Right: transparent 0% → #F0EDE6 100%
- Position: absolute, full height

**Content Items:**
- Auto-layout horizontal
- Gap between text and symbol: 48px
- Gap between symbol and next text: 48px
- Text: Label/Marquee
- Alternate opacity: 100% and 50%
- Symbol: ✦ (text, #878787)

**Services List:**
1. Creative Direction
2. Brand Strategy
3. Campaign Design
4. Visual Identity
5. UX/UI Design
6. Digital Strategy
7. Content Systems
8. Art Direction

---

## 🧩 SECTION 4: WORK

**Frame Structure:**
```
Work Section [Frame - Full width]
├─ Background [Rectangle - #FAFAF7]
├─ Container [1440px max]
│  ├─ Header [Auto-layout H, space-between]
│  │  ├─ Left
│  │  │  ├─ Label [Text]
│  │  │  └─ Title [Auto-layout V]
│  │  │     ├─ SELECTED [Text]
│  │  │     └─ WORK [Text - Orange]
│  │  └─ Right
│  │     └─ Count [Text]
│  └─ Project Grid [Grid - 12 columns]
│     ├─ Project 01 [7 cols, 2 rows]
│     ├─ Project 02 [5 cols, 1 row]
│     ├─ Project 03 [5 cols, 1 row]
│     ├─ Project 04 [4 cols, 1 row]
│     ├─ Project 05 [4 cols, 1 row]
│     └─ Project 06 [4 cols, 1 row]
```

**Measurements:**

**Section:**
- Padding: 128px (top/bottom), 48px (left/right)

**Header:**
- Margin-bottom: 64px
- Label: Label/Small, margin-bottom 12px
- Title: Display/Section Heading (144px)
- Count: Serif/Section Count, padding-bottom 16px

**Project Grid:**
- Grid: 12 columns, equal width
- Gap: 12px
- Row heights: 420px, 420px, 360px

**Grid Layout:**
- Project 01: columns 1-7, rows 1-2 (tall card)
- Project 02: columns 8-12, row 1
- Project 03: columns 8-12, row 2
- Project 04: columns 1-4, row 3
- Project 05: columns 5-8, row 3
- Project 06: columns 9-12, row 3

**Project Card Component:**
```
Project Card [Frame]
├─ Background Image [Image - fill container]
├─ Image Overlay [Rectangle - for darkening]
└─ Content [Auto-layout V, space-between]
   ├─ Top [Auto-layout H, space-between]
   │  ├─ ID Number [Text]
   │  └─ Tags [Auto-layout H] (hidden by default)
   └─ Bottom [Auto-layout V]
      ├─ Title [Text]
      ├─ Client [Text]
      ├─ Description [Text] (hidden by default)
      └─ Arrow Button [Frame] (hidden by default)
```

**Card Measurements:**
- Padding: 32px all sides
- Image filter: brightness(45%), saturation(70%)
- ID: Label/Project ID, top-left
- Title: Display/Project Title Large (tall cards) or Small (regular)
- Client: Serif/Project Client, margin-top 8px

**Project Data:**

Project 01:
- ID: 01
- Title: "PARTIDO\nSOCIALISTA"
- Client: "Political Communication · 2021–2024"
- Tags: Campaign Design, Digital, Outdoor
- Image: Political campaign imagery

Project 02:
- ID: 02
- Title: "LIGHTFOOT\nTRAVEL"
- Client: "Luxury Travel Brand · 2022–2023"
- Tags: Brand Identity, Editorial, Print
- Image: Luxury travel destination

Project 03:
- ID: 03
- Title: "OZ\nENERGIA"
- Client: "Energy Sector · 2020–2022"
- Tags: Campaign Design, Outdoor, Digital
- Image: Renewable energy/solar panels

Project 04:
- ID: 04
- Title: "CÂMARA DE\nLISBOA"
- Client: "Municipal Institution · 2019–2021"
- Tags: Brand Strategy, Visual Identity, UX/UI
- Image: Lisbon city architecture

Project 05:
- ID: 05
- Title: "MADAM\nBŌ"
- Client: "Food & Hospitality · 2023"
- Tags: Brand Identity, Art Direction, Digital
- Image: Modern Asian restaurant interior

Project 06:
- ID: 06
- Title: "NOS\nTELECOM"
- Client: "Telecommunications · 2021"
- Tags: UX/UI Design, Digital Strategy, Campaign
- Image: Telecommunications technology

---

## 🧩 SECTION 5: CLIENTS

**Frame Structure:**
```
Clients Section [Frame - Full width]
├─ Background [Rectangle - #F0EDE6]
├─ Border Top/Bottom [Lines]
└─ Container [1200px max]
   ├─ Header [Text - centered]
   └─ Logo Grid [Flex wrap, 4 per row]
      ├─ Client Logo 1
      ├─ Client Logo 2
      └─ ... (11 total)
```

**Measurements:**

**Section:**
- Background: #F0EDE6
- Border: 1px top/bottom, rgba(0,0,0,0.08)
- Padding: 80px (top/bottom), 48px (left/right)

**Container:**
- Max width: 1200px
- Center aligned

**Header:**
- Label/Small
- Text-align: center
- Margin-bottom: 40px
- Text: "Brands & organisations worked with"

**Logo Grid:**
- Display: flex wrap
- Justify: center
- Each cell: 25% width (4 per row)

**Logo Cell:**
- Padding: 20px
- Display: flex, center content
- Logo container: 120px × 40px

**Logo Styling:**
- Font: Display/Client Logo
- Text-align: center
- Opacity: 30% (default state)
- Filter: brightness(0) (makes text black)

**Client List:**
1. Partido Socialista
2. Lidl
3. NOS
4. ISCTE
5. IDEFF
6. Lightfoot Travel
7. OZ Energia
8. Madam Bō
9. Kitchenette
10. Skyhour
11. Praça Beato

---

## 🧩 SECTION 6: ABOUT

**Frame Structure:**
```
About Section [Frame - Full width]
├─ Background [Rectangle - #FAFAF7]
└─ Container [1440px max]
   └─ Grid [2 columns, 96px gap]
      ├─ Left Column [Auto-layout V]
      │  ├─ Label [Text]
      │  ├─ Heading [Text with mixed styles]
      │  └─ Body Paragraphs [Auto-layout V, 3 paragraphs]
      └─ Right Column [Auto-layout V]
         ├─ Label [Text]
         ├─ Skills Grid [Grid 2×3]
         └─ Buttons [Auto-layout H]
```

**Measurements:**

**Section:**
- Padding: 144px (top/bottom), 48px (left/right)

**Grid:**
- 2 columns, equal width
- Gap: 96px

**Left Column:**

Label:
- Label/Small
- Margin-bottom: 40px
- Text: "About"

Heading:
- Display/Medium (112px)
- Margin-bottom: 56px
- Line structure:
  - "CONNECTING" (black)
  - "THE " + "thinking" (italic serif, orange, 0.78em)
  - "WITH THE" (black)
  - "MAKING." (black)

Body Paragraphs:
- Gap: 24px
- Style: Body/About
- Paragraph 1: "Creative direction is the art of translating ambiguity into clarity — taking a brief, a feeling, or a business challenge and shaping it into something that moves people. Over 10 years, I've worked across political campaigns, lifestyle brands, public institutions and digital startups, always leading from both ends of the process."
- Paragraph 2: "My approach is rooted in strategy first. Before a single visual is drawn, I need to understand the audience, the moment and the why. Then the making begins — and I stay close to every stage: copywriting, design, photography, motion, development briefing and production oversight."
- Paragraph 3: "I've built teams, run studios and worked solo. I'm equally comfortable presenting to a government minister and rolling up my sleeves in Figma. The work only matters if it connects, converts, and lasts."

**Right Column:**

Label:
- Label/Small
- Margin-bottom: 32px
- Text: "Areas of expertise"

Skills Grid:
- Grid: 2 columns, 3 rows
- Gap: 12px
- Margin-bottom: 40px

**Skill Card:**
- Border: 1px, rgba(0,0,0,0.09)
- Background: #F0EDE6
- Padding: 24px
- Title: Display/Skill Card, margin-bottom 8px
- Description: Body/Skill Description

**Skills Data:**
1. Creative Direction / "Setting the visual and strategic vision from concept through delivery."
2. Brand Strategy / "Positioning, identity systems, and communication architecture."
3. UX/UI Design / "User-centred digital products and interface design."
4. Digital Strategy / "Cross-channel planning, content systems and performance frameworks."
5. Art Direction / "Photographic, filmic and graphic direction for campaigns."
6. Team Leadership / "Building, mentoring and directing multidisciplinary creative teams."

**Buttons:**
- Gap: 16px

Button 1 (Download CV):
- Background: #0E0E0E
- Color: white
- Padding: 13.6px 28px
- Label/Button
- Text: "DOWNLOAD CV"

Button 2 (LinkedIn):
- Border: 1px, rgba(0,0,0,0.18)
- Background: transparent
- Color: #0E0E0E
- Padding: 13.6px 28px
- Label/Button
- Text: "LINKEDIN"

---

## 🧩 SECTION 7: CONTACT

**Frame Structure:**
```
Contact Section [Frame - Full width]
├─ Background [Rectangle - #F0EDE6]
├─ Border Top [Line]
└─ Container [1440px max]
   └─ Grid [2 columns, 96px gap]
      ├─ Left Column [Auto-layout V]
      │  ├─ Label [Text]
      │  ├─ Heading [Text]
      │  ├─ Description [Text]
      │  └─ Accent Line [Rectangle]
      └─ Right Column [Auto-layout V]
         ├─ Contact List [Auto-layout V]
         │  ├─ Email Row
         │  ├─ LinkedIn Row
         │  ├─ Contra Row
         │  └─ Phone Row
         └─ Status Badge [Frame]
```

**Measurements:**

**Section:**
- Background: #F0EDE6
- Border-top: 1px, rgba(0,0,0,0.08)
- Padding: 144px (top/bottom), 48px (left/right)

**Grid:**
- 2 columns, equal width
- Gap: 96px

**Left Column:**

Label:
- Label/Small
- Margin-bottom: 40px
- Text: "Get in touch"

Heading:
- Display/Medium (112px, can go up to 144px)
- Margin-bottom: 40px
- Lines:
  - "LET'S" (black)
  - "WORK" (orange)
  - "TOGETHER." (black)

Description:
- Body/Primary
- Max-width: 42ch
- Text: "Whether you're looking for creative direction, brand strategy, or a collaborative partner for your next project, I'd love to hear from you."

Accent Line:
- Height: 2px
- Width: 50%
- Background: linear-gradient(to right, #E8622A 0%, transparent 100%)
- Margin-top: 48px

**Right Column:**
- Padding-top: 80px

**Contact List:**
- Border-top: 1px, rgba(0,0,0,0.09)

**Contact Row:**
- Border-bottom: 1px, rgba(0,0,0,0.09)
- Padding: 20px (top/bottom)
- Layout: Auto-layout H, space-between
- Label: Label/Contact Label, width 96px
- Value: Body/Contact Value, flex-1
- Arrow: → (right arrow, #E8622A)

**Contact Data:**
1. Email / hi@ivosousa.pt
2. LinkedIn / /in/ivosousamartins
3. Contra / contra.com/ivosousamartins
4. Phone / +351 912 345 678

**Status Badge:**
- Margin-top: 40px
- Layout: Auto-layout H
- Gap: 12px
- Dot: 5px circle, #2A9D5C
- Text: Label/Status, "CURRENTLY AVAILABLE FOR NEW PROJECTS"

---

## 🧩 SECTION 8: FOOTER

**Frame Structure:**
```
Footer [Frame - Full width]
├─ Background [Rectangle - #FAFAF7]
├─ Border Top [Line]
└─ Container [1440px max]
   └─ Content [Auto-layout H, space-between]
      ├─ Logo [Text]
      ├─ Copyright [Text]
      └─ Back to Top [Text]
```

**Measurements:**

**Section:**
- Background: #FAFAF7
- Border-top: 1px, rgba(0,0,0,0.08)
- Padding: 40px (top/bottom), 48px (left/right)

**Content:**
- Max-width: 1440px
- Layout: space-between, center aligned

**Logo:**
- Font: Bebas Neue
- Size: 20px
- Tracking: 12%
- "ISM" (black) + "." (orange)

**Copyright:**
- Label/Footer
- Text: "© 2025 Ivo Sousa Martins · Creative Director · Lisbon"

**Back to Top:**
- Label/Footer Small
- Text: "↑ BACK TO TOP"

---

## 🎯 BUILD ORDER RECOMMENDATION

1. **Set up design system first**
   - Create all color styles
   - Create all text styles
   - Set up spacing tokens

2. **Build components**
   - Navigation
   - Buttons (CTA, primary, secondary)
   - Skill card
   - Contact row
   - Status badge
   - Project card

3. **Build sections top to bottom**
   - Navigation (fixed)
   - Hero
   - Marquee
   - Work
   - Clients
   - About
   - Contact
   - Footer

4. **Polish**
   - Add borders
   - Check spacing consistency
   - Verify all colors match
   - Test text styles

---

## 💡 TIPS FOR FIGMA

1. **Use Auto-layout everywhere** - Makes responsive adjustments easier
2. **Create text styles first** - Saves time on updates
3. **Use components for repeated elements** - Cards, buttons, badges
4. **Name layers clearly** - Use the structure names from this guide
5. **Group by section** - Each section in its own frame
6. **Set constraints properly** - For responsive behavior
7. **Use smart selection** - CMD+Click to select through layers

---

## 📸 REFERENCE IMAGES

For the Work section project backgrounds, use these Unsplash searches:
1. "political campaign portugal socialist"
2. "luxury travel destination resort"
3. "renewable energy solar panels"
4. "lisbon city architecture urban"
5. "asian restaurant interior modern"
6. "telecommunications technology network"

---

## ✅ FINAL CHECKLIST

- [ ] All color styles created
- [ ] All text styles created
- [ ] Navigation component built
- [ ] Hero section complete
- [ ] Marquee section complete
- [ ] Work section with all 6 projects
- [ ] Clients section with all 11 logos
- [ ] About section complete
- [ ] Contact section complete
- [ ] Footer complete
- [ ] All spacing verified
- [ ] All borders added
- [ ] Typography matches exactly

---

**Total Design Time Estimate:** 4-6 hours for experienced Figma user

Good luck! This guide should give you everything you need to recreate the portfolio pixel-perfect in Figma.
