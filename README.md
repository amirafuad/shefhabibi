# Shef Habibi

A landing page for Shef Habibi, a restaurant serving authentic Middle Eastern cuisine. It introduces the brand, lets customers pre-order through WhatsApp, and links to the restaurant's social media.

**Live site:** https://shefhabibi.com

## Features

- Responsive layout that works on desktop and mobile
- One-tap pre-order button that opens WhatsApp
- Links to Instagram, Facebook and TikTok
- Optimized images with `next/image`

## Tech

- [Next.js](https://nextjs.org) (App Router) and React
- TypeScript
- ESLint
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
git clone https://github.com/amirafuad/shefhabibi.git
cd shefhabibi
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page updates as you edit `app/page.tsx`.

## Project structure

```
app/      Pages and layout (Next.js App Router)
public/   Static assets such as the logo and social media icons
```

## Deployment

Every push to `main` can be deployed automatically through Vercel. To build locally:

```bash
npm run build
npm start
```

## About this project

Built as an individual project to practice building and shipping a real site for a small business with Next.js.
