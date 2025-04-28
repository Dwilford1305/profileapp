# Portfolio Application

A modern, professional portfolio web application built with React, TypeScript, and Vite. It showcases projects, skills, and contact information for Derek Wilford, a web and mobile app developer based in Wetaskiwin, Alberta.

## Features

- **Responsive Design:** Adapts to desktop, tablet, and mobile screens.
- **Animated Sections:** Smooth fade-in animations as you scroll.
- **Project Carousel:** Interactive project showcase using `react-slick`.
- **Theme Toggle:** Switch between dark and light themes.
- **Skills & Contact:** Highlights technical skills and provides contact/social links.
- **Custom Parallax Icons:** Floating tech icons for visual flair.

## Technologies Used

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite
- **Styling:** CSS
- **Carousel:** `react-slick`
- **Intersection Observer:** `react-intersection-observer` for animations
- **Testing:** Jest, React Testing Library
- **Linting:** ESLint

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Dwilford1305/profileapp.git
    cd profileapp
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the development server:**
    ```bash
    npm run dev
    ```
    The app will be available at `http://localhost:5173` by default.

4. **Run tests:**
    ```bash
    npm test
    ```
    Runs unit tests for main sections/components.

5. **Build for production:**
    ```bash
    npm run build
    ```
    Outputs optimized files to the `dist` directory.

6. **Preview production build locally:**
    ```bash
    npm run preview
    ```

## Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build locally
- `npm test` — Run unit tests
- `npm run lint` — Lint the codebase with ESLint

## Deployment

You can deploy the `dist` folder to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## License

This project is for personal portfolio use by Derek Wilford.
