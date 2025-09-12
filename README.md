# Derek Wilford - Professional Portfolio

A modern, performance-optimized React portfolio application showcasing web and mobile app development expertise. Built with TypeScript, featuring component-based architecture, accessibility compliance, and advanced performance optimizations.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e6da8c49-a9ba-4d2a-9ea6-dbfcadd6a773/deploy-status)](https://app.netlify.com/sites/stately-souffle-fa03bf/deploys)

## 🚀 Live Demo
**[View Portfolio →](https://derekwilford.ca)**

## 📱 Features

### Core Features
- **🎨 Dark/Light Theme Toggle** - Accessible theme switching with persistent preferences
- **📱 Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices  
- **♿ WCAG AA Accessibility** - Enhanced ARIA labels, keyboard navigation, skip links
- **🖼️ Interactive Project Carousel** - Smooth project showcase with react-slick
- **⚡ Performance Optimized** - Code splitting, lazy loading, and WebP image support
- **🎭 Smooth Animations** - Scroll-triggered fade-in effects using Intersection Observer
- **🔧 Tech Icon Parallax** - Floating technology icons background

### Technical Excellence
- **⚛️ Modern React 19** with TypeScript and strict type checking
- **🏗️ Modular Architecture** - Clean component separation and reusable structure
- **🧪 Comprehensive Testing** - 21+ tests covering accessibility and functionality
- **📦 Code Splitting** - Lazy-loaded components for optimal performance
- **🖼️ Image Optimization** - ResponsiveImage component with WebP support
- **🛡️ Error Boundaries** - Graceful error handling and user-friendly fallbacks
- **🔍 SEO Optimized** - Complete meta tags, structured data, sitemap, and robots.txt

## 🛠️ Technology Stack

### Frontend
- **React 19** - Latest React with functional components and hooks
- **TypeScript** - Strict type checking and modern JavaScript features
- **Vite** - Lightning-fast build tool and dev server
- **CSS3** - Custom properties for theming, modern flexbox/grid layouts
- **react-slick** - Smooth carousel component for project showcase
- **react-intersection-observer** - Performant scroll-triggered animations

### Development & Testing
- **Jest** - Comprehensive unit testing framework
- **React Testing Library** - Accessibility-focused component testing
- **ESLint** - Code quality and consistency enforcement
- **TypeScript Compiler** - Static type analysis and error detection

### Performance & SEO
- **Code Splitting** - React.lazy() for optimal bundle loading
- **Lazy Loading** - Images and components loaded on demand
- **WebP Support** - Modern image format with fallbacks
- **Structured Data** - Schema.org JSON-LD for rich search results
- **Complete SEO** - Meta tags, OpenGraph, Twitter Cards, canonical URLs

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/Dwilford1305/profileapp.git
cd profileapp

# Install dependencies (takes ~20 seconds)
npm install

# Start development server (launches at http://localhost:5173)
npm run dev
```

### Development Commands

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run preview      # Preview production build locally

# Quality Assurance  
npm run lint         # ESLint code quality check
npm test             # Run comprehensive test suite (21+ tests)
npm run build        # Production build with optimization

# Performance Analysis
npm run analyze      # Bundle size analysis and optimization insights
```

## 📁 Project Architecture

```
src/
├── components/           # Modular React components
│   ├── About/           # Personal introduction section
│   ├── Contact/         # Contact info and social links  
│   ├── Navbar/          # Navigation with theme toggle
│   ├── Projects/        # Interactive project carousel
│   ├── Skills/          # Technical skills showcase
│   ├── AnimatedSection/ # Scroll-triggered animations
│   ├── ParallaxIcons/   # Floating tech icons background
│   └── shared/          # Reusable components
│       ├── ErrorBoundary.tsx    # Error handling
│       └── ResponsiveImage.tsx  # Optimized image component
├── types/               # TypeScript type definitions
├── App.tsx             # Main application (56 lines - 82% smaller!)  
└── App.css             # Global styles and theming

public/
├── media/              # Optimized images and assets
│   ├── techicons/      # Technology skill icons
│   └── *.png           # Project screenshots, headshots, social icons
├── sitemap.xml         # SEO sitemap with image references  
└── robots.txt          # Search engine crawler instructions
```

## 🎯 Performance Metrics

### Bundle Optimization
- **Main Bundle**: 263.09 kB (80.99 kB gzipped)
- **Lazy Chunks**: 4 separate chunks for optimal loading
- **Build Time**: ~1.5 seconds  
- **Code Splitting**: ✅ Below-fold components lazy loaded

### Development Metrics
- **Component Architecture**: 82% reduction in main App.tsx (310 → 56 lines)
- **Test Coverage**: 425% increase (4 → 21+ comprehensive tests)
- **Security**: 0 vulnerabilities (removed 253 outdated packages)
- **Accessibility**: WCAG AA compliance with enhanced ARIA support

## 🧪 Testing

### Test Coverage
- **21+ Comprehensive Tests** covering all major functionality
- **Accessibility Testing** - ARIA labels, keyboard navigation, semantic structure
- **Component Unit Tests** - Individual component behavior and props
- **Integration Tests** - Theme toggle, navigation, user interactions
- **Image Optimization Tests** - WebP support, lazy loading attributes

### Running Tests
```bash
npm test                    # Run all tests
npm test -- --verbose      # Detailed test output
npm test -- --coverage     # Coverage report
```

## ♿ Accessibility Features

- **WCAG AA Compliance** - Enhanced ARIA labels and semantic HTML
- **Keyboard Navigation** - Full keyboard accessibility with focus management
- **Skip Links** - Quick navigation for screen readers  
- **High Contrast Support** - Theme toggle with proper color contrast
- **Screen Reader Optimized** - Descriptive alt text and ARIA descriptions
- **Dynamic ARIA States** - Live updates for theme toggle and navigation state

## 🔍 SEO Implementation

### Technical SEO
- **Complete Meta Tags** - Title, description, keywords, author, canonical
- **Open Graph Tags** - Optimized social media sharing  
- **Twitter Cards** - Rich Twitter link previews
- **Structured Data** - Schema.org JSON-LD for enhanced search results
- **XML Sitemap** - Complete sitemap with image references
- **Robots.txt** - Proper search engine crawling directives

### Local SEO Optimization
- **Geographic Targeting** - Wetaskiwin, Alberta location optimization
- **Local Keywords** - Alberta developer, Canadian tech talent
- **Professional Schema** - Person and ProfessionalService markup

## 🚀 Deployment

### Build Process
```bash
npm run build              # Creates optimized production build in dist/
npm run preview            # Test production build locally
```

### Static Hosting Ready
The application builds to static files, ready for deployment on:
- **Netlify** (current deployment)
- **Vercel** 
- **GitHub Pages**
- **AWS S3**
- Any static hosting service

### Production Optimizations
- **Asset Optimization** - Minified CSS/JS, compressed images
- **Code Splitting** - Lazy loading for optimal performance
- **Cache Headers** - Long-term caching for static assets
- **SEO Ready** - Complete meta tags and structured data

## 🔧 Configuration

### Environment Setup
No environment variables required - fully static application.

### Browser Support
- **Modern Browsers** - Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers** - iOS Safari, Chrome Mobile, Samsung Internet
- **Graceful Degradation** - WebP images fall back to PNG/JPG

## 📈 Development Features

### Hot Module Replacement
- **Instant Updates** - Changes reflect immediately during development
- **State Preservation** - Component state maintained during updates
- **Error Overlay** - Clear error messages with source maps

### Code Quality
- **ESLint Integration** - Automatic code quality enforcement
- **TypeScript Strict Mode** - Enhanced type checking and error prevention
- **Accessibility Linting** - Built-in accessibility rule enforcement

## 🤝 Contributing

This is a personal portfolio project, but insights and suggestions are welcome:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/improvement`)
3. **Make changes** following the established patterns
4. **Run tests** (`npm test`) and ensure they pass
5. **Submit a pull request** with detailed description

## 📄 License

This project is for personal portfolio use by Derek Wilford. All rights reserved.

## 📞 Contact

**Derek Wilford** - Web & Mobile App Developer  
📍 Wetaskiwin, Alberta, Canada

- **Email**: [wilfordderek@gmail.com](mailto:wilfordderek@gmail.com)
- **LinkedIn**: [derek-wilford13](https://www.linkedin.com/in/derek-wilford13)
- **GitHub**: [Dwilford1305](https://github.com/Dwilford1305)
- **Portfolio**: [derekwilford.ca](https://derekwilford.ca)

---

*Built with ❤️ using modern web technologies. From truck driver to developer - proving it's never too late to pursue your passion in tech.*
