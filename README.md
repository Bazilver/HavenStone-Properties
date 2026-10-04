# HavenStone Properties

A fictional premium real-estate website concept designed for a portfolio/demo build. Built with React, Vite, TypeScript, and Tailwind CSS, the project presents a polished Lagos property marketplace with a luxury brand aesthetic and multi-page browsing experience.

## Overview

HavenStone Properties is a demo concept for a modern real-estate business. It includes:

- a luxury landing page and brand experience
- property listings with filters and search controls
- individual property detail pages
- about, agent, service, and contact sections
- responsive navigation for desktop and mobile
- demo-only forms and interaction states

The content is intentionally fictional and is not connected to a live backend or real property inventory.

## Demo disclaimer

This project is a fictional website created for demonstration purposes only.

All of the following are sample content:

- property listings and prices
- agent profiles and bios
- phone numbers and email addresses
- business descriptions and service offerings
- contact and viewing flows

No real property transactions, bookings, or enquiries are processed.

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM

## Project structure

```text
src/
  App.tsx                Main routing setup
  main.tsx               Application entry point
  index.css              Global styles and design tokens
  components/            Reusable layout, cards, icons, SEO, and UI elements
  data/                  Fictional property and agent data
  pages/                 Route-level screens for the site
  hooks/                 Reserved for future reusable hooks
  lib/                   Small utility and formatting helpers
  assets/                Static assets or future local media
```

## Features

- Responsive property browsing experience
- Search and filter UI tailored for real-estate search flows
- Featured property cards with pricing, location, and amenity summaries
- URL-driven filtering and route navigation
- Property detail pages with gallery, features, and amenities
- Content sections for agents, services, and company positioning
- Contact and viewing request interactions presented as demo confirmations only

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local Vite URL in your browser, typically:

```text
http://localhost:5173
```

## Available scripts

```bash
npm run dev
```
Starts the Vite development server.

```bash
npm run build
```
Builds the production bundle for deployment.

```bash
npm run lint
```
Runs TypeScript validation without emitting build output.

## Production build notes

This project is configured for a standard Vite + React deployment and can be deployed to any static host or platform that supports frontend builds.

## Notes for use

- The site is built around sample content and is intended as a UI/UX concept.
- Search and page data are static, stored in the app data layer.
- Forms are intentionally non-functional and designed to demonstrate flows without claiming real submissions.

## License

This project is provided as a portfolio/demo concept. Usage is intended for learning, demonstration, and mockup purposes unless otherwise stated by the owner.
