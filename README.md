# Ferizwan Malik Wichaksana Portfolio

A modern personal portfolio website built to showcase my background, experience, skills, publications, and selected projects in software engineering, data science, AI/ML, and web development.

## Overview

This portfolio is designed as a clean, responsive, and interactive single-page website for GitHub and professional sharing. It highlights:

- Personal profile and summary
- Education and work experience
- Featured projects with detailed modals
- Technical and design skills
- Academic publication
- Contact information and resume access

## Live Sections

- Hero section with personal introduction
- About section
- Experience timeline
- Project showcase with filtering
- Skills overview
- Publications
- Contact section
- Resume modal

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

## Key Features

- Responsive layout for desktop and mobile devices
- Smooth section transitions and animated interactions
- Project filtering by category
- Project detail modal with image gallery
- Resume modal for quick profile access
- Theme support with light and dark modes
- Lazy loading for better performance
- Organized data-driven content structure

## Project Highlights

Some of the featured projects included in this portfolio:

- SACAR - Smart Agriculture Augmented Reality App
- Subway Surfers Pose Detection - computer vision and gesture control
- Data Science Salary Prediction System
- Airbnb Price Prediction - big data analytics with Spark
- Abon Murnisaji - e-commerce platform
- Puncak Tennis Club - booking portal
- Image Processing - CLAHE-based image enhancement
- Nasi Kebuli Mutiara - online food ordering platform
- Bettabeal - cross-platform marketplace and edu-hub
- Sate Umami - company profile website

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Installation

```bash
git clone https://github.com/Ferizwan/Portfolio.git
cd ferizwan-malik-wichaksana-portfolio
npm install
```

### Development

```bash
npm run dev
```

The app will run on:

```bash
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run lint
```

## Environment Variables

This project includes an `.env.example` file. If you need environment-based configuration, copy it to `.env` and adjust the values according to your setup.

## Project Structure

```text
src/
├── components/        # UI sections and reusable components
├── context/           # Theme context
├── data/              # Portfolio content, images, and resume file
├── types.ts           # Type definitions
├── App.tsx           # Main app layout and section orchestration
├── main.tsx          # React entry point
└── index.css         # Global styles
```

## Customization

Most portfolio content is centralized in `src/data/portfolioData.ts`, including:

- Profile information
- Education history
- Experience history
- Projects
- Skills
- Publications

This makes the portfolio easy to update without changing the component logic.

## Contact

- GitHub: [Ferizwan](https://github.com/Ferizwan)
- LinkedIn: [ferizwan-m](https://www.linkedin.com/in/ferizwan-m/)
- Email: [ferizmalik12@gmail.com](mailto:ferizmalik12@gmail.com)
- WhatsApp: [+62 877-8488-9511](https://wa.me/6287784889511)