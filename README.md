# Portfolio Website

A modern, dark-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Dark theme with purple/blue gradients and glowing effects
- ✨ Smooth animations and transitions using Framer Motion
- 📱 Fully responsive design
- 🎯 Typing effect for role statement
- 💼 Work experience showcase
- 🛠️ Skills and tools section
- 🚀 Featured projects with mockups
- 📧 Contact section with social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update the greeting text
   - Replace the avatar placeholder with your own image
   - Modify the role statement
   - Update current employer information

2. **About Section** (`components/About.tsx`):
   - Update the about me text

3. **Work Experience** (`components/WorkExperience.tsx`):
   - Modify the `workExperiences` array with your own projects
   - Update icons, titles, roles, and periods

4. **Skills Section** (`components/Skills.tsx`):
   - Update the `tools` array with your preferred tools and technologies
   - Modify the call-to-action text

5. **Featured Projects** (`components/FeaturedProjects.tsx`):
   - Replace the example projects with your own
   - Update project descriptions and mockups

6. **Contact Section** (`components/Contact.tsx`):
   - Update the email address
   - Add your social media links (LinkedIn, GitHub, Dribbble, etc.)

### Styling

The color scheme and styling can be customized in:
- `tailwind.config.js` - Tailwind configuration
- `app/globals.css` - Global styles and utilities
- Individual component files - Component-specific styles

## Build for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:
```bash
npm start
# or
yarn start
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## License

MIT
