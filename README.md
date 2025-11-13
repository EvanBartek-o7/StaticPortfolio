# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, optimized for GitHub Pages hosting.

## Features

- 🎨 Modern, clean design with Tailwind CSS
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 TypeScript for type safety
- 📦 Static site optimized for GitHub Pages
- 🌙 Dark mode support
- 🚀 Smooth scrolling navigation

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout
│   ├── sections/        # Hero, About, Projects, Experience, Skills, Contact
│   ├── projects/        # ProjectCard, ProjectGrid
│   └── ui/              # Button, Section, Tag (reusable components)
├── data/                # projects.ts, experience.ts, skills.ts
├── types/               # TypeScript interfaces
└── App.tsx              # Main app component
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/EvansPortfolio.git
cd EvansPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Update Your Information

1. **Projects**: Edit `src/data/projects.ts` to add/update your projects
2. **Experience**: Edit `src/data/experience.ts` to update your work experience
3. **Skills**: Edit `src/data/skills.ts` to update your skills
4. **Personal Info**: 
   - Update the Hero section in `src/components/sections/Hero.tsx`
   - Update the About section in `src/components/sections/About.tsx`
   - Update social links in `src/components/layout/Footer.tsx`
   - Update contact email in `src/components/sections/Contact.tsx`

### Styling

The project uses Tailwind CSS for styling. You can customize:
- Colors: Modify Tailwind classes or extend the theme in `tailwind.config.js`
- Typography: Update font families in `src/index.css`
- Layout: Adjust spacing and sizing using Tailwind utility classes

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` folder.

## Deployment to GitHub Pages

### Option 1: Using npm script (Recommended)

1. Make sure your repository is named `EvansPortfolio` (or update `base` in `vite.config.ts`)
2. Run the deploy command:
```bash
npm run deploy
```

This will:
- Build the project
- Deploy the `dist/` folder to the `gh-pages` branch
- Your site will be available at `https://yourusername.github.io/EvansPortfolio/`

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Push the `dist/` folder contents to the `gh-pages` branch manually

### Important Notes

- The `base` path in `vite.config.ts` must match your repository name
- If your repository is named differently, update the `base` value accordingly
- The `.nojekyll` file in `public/` prevents Jekyll processing on GitHub Pages

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **gh-pages** - GitHub Pages deployment

## License

This project is open source and available under the MIT License.
