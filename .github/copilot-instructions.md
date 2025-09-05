# ProfileApp - Derek Wilford's Portfolio Website

This is a modern React + TypeScript portfolio web application built with Vite, featuring a responsive design, project carousel, skills section, and theme toggle functionality.

**Always follow these instructions first and only fallback to additional search and context gathering if the information here is incomplete or found to be in error.**

## Quick Start & Build Process

**CRITICAL: All commands below have been tested and work correctly. Use exact timeouts specified.**

### Initial Setup
```bash
npm install  # Takes ~20 seconds
npm audit fix  # Fix security vulnerabilities - Takes ~7 seconds
```

### Development Workflow
```bash
npm run lint     # ESLint validation - Takes ~1 second
npm test         # Jest tests - Takes ~2 seconds  
npm run build    # TypeScript + Vite build - Takes ~4 seconds
npm run preview  # Preview production build on http://localhost:4173
npm run dev      # Development server on http://localhost:5173
```

**CRITICAL TIMEOUTS:**
- Use timeout ≥ 30 seconds for `npm install`
- Use timeout ≥ 10 seconds for builds and tests
- NEVER CANCEL builds or long-running commands - wait for completion

## Application Validation

### Required Manual Testing Scenarios
After making any changes, ALWAYS test these scenarios:

1. **Theme Toggle:** Click the sun/moon button in navbar - should switch between light/dark themes
2. **Navigation:** Click navigation links (About, Projects, Skills, Contact) - should scroll to sections
3. **Project Carousel:** Verify carousel auto-advances and manual navigation works
4. **Responsive Design:** Test on different screen sizes - mobile menu should appear on small screens
5. **External Links:** Verify project links, social media links, and resume download work

### Browser Testing
```bash
npm run dev
# Navigate to http://localhost:5173/
# Test all scenarios above
# Take screenshots for UI changes
```

## Key Architecture & File Locations

### Core Components (src/App.tsx)
- **Navbar:** Navigation with theme toggle and responsive mobile menu
- **About:** Personal introduction section
- **Projects:** React-slick carousel showcasing portfolio projects
- **Skills:** Technical skills list
- **Contact:** Email, social links, resume download
- **ParallaxIcons:** Floating tech icons background
- **AnimatedSection:** Scroll-triggered fade-in animations using react-intersection-observer

### Important Files
- `src/App.tsx` - Main application component (310 lines)
- `src/App.css` - All styling (referenced but not shown)
- `src/App.test.tsx` - Jest tests for main sections
- `public/media/` - Images, icons, resume PDF
- `public/media/techicons/` - Technology icons (16 different techs)

### Dependencies
- **React 19** with TypeScript
- **Vite** for building and dev server
- **react-slick** for project carousel
- **react-intersection-observer** for scroll animations
- **Jest + React Testing Library** for testing
- **ESLint** for code quality

## Build Configuration

### TypeScript Config
- Uses `tsconfig.app.json` for main config
- Target: ES2020, JSX: react-jsx
- Strict mode enabled with linting rules

### Vite Config
- React plugin enabled
- Development server: http://localhost:5173
- Production preview: http://localhost:4173
- Build output: `dist/` directory

### Testing Setup
- Jest with jsdom environment
- CSS imports mocked with identity-obj-proxy
- react-slick mocked to render children only
- react-intersection-observer mocked to always show content

## Common Issues & Solutions

### Security Warnings
- Run `npm audit fix` if vulnerabilities are found
- Validated: All current dependencies are secure after audit fix

### Test Warnings
- ts-jest configuration warnings are expected and don't affect functionality
- TypeScript esModuleInterop warnings are expected

### Development Server
- Hot reloading works correctly
- CSS changes reflect immediately
- Component changes trigger fast refresh

## Linting & Code Quality

```bash
npm run lint  # Must pass before commits
```

**ESLint Rules:**
- TypeScript strict mode
- React hooks rules
- No explicit `any` types (enforced)
- React refresh rules for development

## Asset Management

### Images & Media
- All images in `public/media/`
- Tech icons in `public/media/techicons/`
- Headshot, project screenshots, social media icons
- Resume PDF available for download

### Theme Assets
- LinkedIn icons: Black for light theme, white for dark theme
- GitHub icons: Black for light theme, white for dark theme
- Theme toggle: Sun (☀️) for dark theme, moon (🌙) for light theme

## Deployment Considerations

The application is set up for static hosting:
- Build creates optimized static files in `dist/`
- No server-side dependencies
- Currently deployed on Netlify with status badge in README
- All external project links are functional

## Performance Notes

- Build output is optimized (~265KB main JS bundle)
- Images and assets are properly sized
- Carousel has autoplay with pause on hover
- Smooth animations with intersection observer
- Fast development reload with Vite

## Testing Strategy

Current tests validate:
- All main sections render correctly
- Component structure is maintained
- No runtime errors on initial load

**Add tests for any new components following the existing pattern in `src/App.test.tsx`.**