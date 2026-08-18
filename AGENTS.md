# Portfolio Project - GAHOU Chédide

## Project Overview
Professional portfolio website for GAHOU Chédide, Full Stack Developer, built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 16.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)

## Project Structure
```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page with all sections
│   │   └── globals.css         # Global styles and custom scrollbar
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx  # Navigation with dark mode toggle
│   │   │   └── Footer.tsx      # Footer component
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Home/Hero section
│   │   │   ├── About.tsx       # About section
│   │   │   ├── Skills.tsx      # Skills with icons
│   │   │   ├── Experience.tsx  # Experience timeline
│   │   │   ├── Projects.tsx    # Projects cards
│   │   │   ├── Education.tsx   # Education section
│   │   │   └── Contact.tsx     # Contact information (no form)
│   │   └── ui/
│   │       ├── ThemeToggle.tsx # Dark/light mode toggle
│   │       └── ScrollToTop.tsx # Scroll to top button
│   ├── lib/
│   │   └── data.ts             # All portfolio data (experiences, projects, etc.)
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── public/
│   ├── robots.txt              # SEO robots file
│   └── sitemap.xml             # SEO sitemap
└── package.json
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server on http://localhost:3000 (or next available port)

### Build
```bash
npm run build
```
Creates an optimized production build

### Production
```bash
npm start
```
Starts the production server

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality

## Key Features

### Design
- Modern, elegant, and minimalist design
- Dark/Light mode toggle with localStorage persistence
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations with Intersection Observer
- Custom scrollbar styling
- Professional color palette (blue/purple gradients)

### Sections
1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal profile, objectives, and interests
3. **Skills**: Categorized technical skills with icons
4. **Experience**: Timeline of professional experiences
5. **Projects**: Project cards with technology tags
6. **Education**: Academic background
7. **Contact**: Contact information (email, phone, location)

### SEO
- Optimized metadata (title, description, keywords)
- OpenGraph tags for social sharing
- robots.txt and sitemap.xml
- Semantic HTML structure
- French language (lang="fr")

## Data Management
All portfolio data is centralized in `src/lib/data.ts`:
- Personal information
- About content
- Skills by category
- Work experiences
- Projects
- Education history
- Social links

To update portfolio content, edit the data in this file.

## Customization

### Colors
Main accent color: Blue (blue-600, blue-400 in dark mode)
Secondary accent: Purple (used in gradients)

### Fonts
- Primary: Geist Sans
- Monospace: Geist Mono

### Animations
- Scroll animations using Intersection Observer
- Hover effects on cards and buttons
- Smooth scrolling for navigation links
- Fade-in animations on section load

## Deployment
The project is ready for deployment on:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

## Browser Support
Modern browsers with ES6+ support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Static generation where possible
- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind CSS
- Minimal JavaScript bundle
- Lazy loading with dynamic imports where needed

## Accessibility
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
