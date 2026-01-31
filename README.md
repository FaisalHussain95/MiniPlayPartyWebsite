# MiniPlayParty Website

Official website for MiniPlayParty - A multi mini-game mobile application.

## About

This website serves as the information hub for MiniPlayParty, providing:
- Privacy Policy
- Terms of Service
- About page
- General information about the game

## Tech Stack

- **Framework**: Nuxt 4
- **Content Management**: Nuxt Content
- **UI Components**: Nuxt UI
- **Styling**: Tailwind CSS
- **Icons**: Nuxt Icon
- **Image Optimization**: Nuxt Image
- **Code Quality**: ESLint with @nuxt/eslint

## Game Overview

MiniPlayParty is a multi mini-game app featuring:

### Authentication
- Apple Sign-In
- Google Play Games
- Username/Password

### Core Features
- **Room System**: Create and manage game rooms
- **Invitations**: Send and accept room invitations
- **Admin Controls**: Room creators and designated admins can manage rooms
- **Mini-Games**: Multiple mini-games to play with friends
- **Tutorial**: Optional onboarding tutorial for new users

### Room Features
- Custom room names
- Custom room images
- User invitation lists
- Multiple administrators
- Room editing capabilities (for admins)

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Generate Static Site

Generate a static version of the site:

```bash
npm run generate
```

## Project Structure

```
.
├── app/
│   ├── components/     # Vue components
│   └── pages/          # Page components
├── content/            # Markdown content files
│   ├── index.md        # Home page
│   ├── about.md        # About page
│   ├── privacy-policy.md
│   └── terms-of-service.md
├── public/             # Static assets
├── nuxt.config.ts      # Nuxt configuration
└── package.json        # Dependencies and scripts
```

## Content Management

Content is managed using Markdown files in the `content/` directory. The Nuxt Content module provides:
- File-based CMS
- Markdown support
- Vue component integration in Markdown
- Full-text search capabilities

## Deployment

This site can be deployed to various platforms:
- Vercel
- Netlify
- Cloudflare Pages
- Any Node.js hosting

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## License

© 2026 MiniPlayParty. All rights reserved.
