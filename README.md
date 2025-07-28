# Fieldgrip Private Limited - Agricultural Products Website

A modern, responsive website showcasing Fieldgrip's agricultural product catalog.

## Features

- **Clean Hero Section**: Professional landing page with company branding
- **Product Catalog**: Comprehensive showcase of all 9 Fieldgrip products organized by categories
- **Scroll-based Navigation**: Smooth category switching as user scrolls through products
- **Responsive Design**: Optimized for all device sizes
- **Contact Form**: Easy inquiry system for potential customers
- **About Section**: Company information and values

## Product Categories

1. **Soil & Root Enhancer** - Vermigro, Jumbogrip
2. **Fungal Control** - Reward-N, Orthogrip 18
3. **Stress/Weather Protection** - Technovit
4. **Micronutrient Supplement** - Microgrip
5. **Fruit Growth & Quality Enhancer** - Setter DF
6. **Flower/Fruit Development** - Gold Hut-98, Flower Start

## Technology Stack

- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Responsive Design** principles

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Landing section
│   ├── ProductCatalog.tsx  # Main product showcase
│   ├── About.tsx           # Company information
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Site footer
├── App.tsx                 # Main app component
└── index.css              # Global styles
```

## Key Changes Made

- Removed unnecessary animations and decorative elements
- Updated product list to match actual 9 products from company catalog
- Removed Solutions and Gallery sections as requested
- Implemented scroll-based category navigation
- Added image placeholders for future product photos
- Simplified navigation to focus on core sections
- Updated all product counts and statistics to reflect actual catalog

## Image Placeholders

Product images are currently showing placeholders. Replace these with actual product photos by updating the `image` property in each product object within `ProductCatalog.tsx`.

## Contact Information

The contact form is ready for integration with your preferred backend service or email handling system.