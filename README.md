# Digital Twin Center Website

A subdomain site for the NSF Center for Digital Twins in Manufacturing, designed to showcase the center's research, faculty, and resources while maintaining visual consistency with the University of Michigan Robotics design system.

## 🎯 Project Overview

This site recreates the content and structure of the original Digital Twin Center Google Site (https://sites.google.com/umich.edu/digitaltwincenter/) using a modern Astro.js framework with a design system adapted from the Michigan Robotics website.

### Key Features

- **Distinctive Branding**: Uses orange/teal color scheme to distinguish from main robotics site while maintaining University of Michigan identity
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Content Sections**: Home, Faculty Researchers, and Resources pages
- **Component-Based**: Reusable components for consistent styling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the DTC directory
cd dtc

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 Design System

### Color Palette

The site uses a DTC-specific color scheme while maintaining University of Michigan brand consistency:

- **Primary**: `#D86018` (Ross Orange) - Main accent color
- **Secondary**: `#00B2A9` (Taubman Teal) - Supporting color
- **Accent**: `#2F65A7` (Arboretum Blue) - Additional accent
- **Base**: `#00274c` (U-M Blue) - Typography and borders

### Typography

- **Headlines**: Roboto Condensed (Bold)
- **Body Text**: Open Sans
- **Navigation**: Roboto

## 📁 Project Structure

```
dtc/
├── src/
│   ├── components/
│   │   ├── DTCNav.astro          # Site navigation
│   │   ├── DTCHero.astro         # Hero section
│   │   └── DTCFooter.astro       # Site footer
│   ├── layouts/
│   │   └── MainLayout.astro      # Base layout template
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── faculty.astro         # Faculty researchers
│   │   └── resources.astro       # Research resources
│   └── styles/
│       └── global.css            # Global styles and theme
├── astro.config.mjs              # Astro configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🌐 Pages

### Homepage (`/`)
- Hero section with center mission
- Key benefits grid (Industry Innovation, Research Excellence, Workforce Development)
- Center kick-off meeting information (July 23-24, 2025)
- Research thrusts overview

### Faculty Researchers (`/faculty`)
- Center leadership from U-M and ASU
- Faculty profiles and contact information
- Research specializations

### Resources (`/resources`)
- Publications and research papers
- Tools and software downloads
- Research datasets
- Educational materials

## 🔧 Configuration

### Site Settings

The site is configured for deployment at `dtc.robotics.umich.edu`. Update `astro.config.mjs` to modify:

- Site URL
- Base path
- Image domains
- Build settings

### Styling Customization

DTC-specific styles are defined in `src/styles/global.css`:

- CSS custom properties for colors
- Utility classes for DTC branding
- Component-specific styles

## 🚀 Deployment

The site is configured for static deployment and can be hosted on:

- Netlify
- Vercel
- GitHub Pages
- University hosting

Build command: `npm run build`
Output directory: `dist/`

## 🤝 Relationship to Main Robotics Site

This DTC site maintains design consistency with the main Michigan Robotics website while establishing its own identity:

**Shared Elements:**
- Layout structure and typography
- Component architecture
- University of Michigan branding elements
- Responsive design patterns

**Distinctive Elements:**
- Orange/teal color scheme vs. maize/blue
- DTC-specific logo and branding
- Center-focused content and messaging
- Simplified navigation structure

## 📝 Content Management

To update content:

1. **Text Content**: Edit the relevant `.astro` files in `src/pages/`
2. **Navigation**: Modify `src/components/DTCNav.astro`
3. **Styling**: Update `src/styles/global.css`
4. **Images**: Add to `public/` directory and reference in components

## 🔗 Links

- [Original Google Site](https://sites.google.com/umich.edu/digitaltwincenter/)
- [Michigan Robotics Main Site](https://robotics.umich.edu)
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 📞 Support

For questions or modifications, contact the Digital Twin Center team at dtc-info@umich.edu.