# nilabhra.info

Personal portfolio for Nilabhra Adhikari — full-stack developer specialising in React, Next.js, and Node.js.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI components**: shadcn/ui (`radix-nova` style)
- **Animations**: Motion for React (motion/react)
- **Fonts**: Bricolage Grotesque (display) + IBM Plex Sans (body) + IBM Plex Mono (mono/annotations)
- **Package manager**: Bun

## Getting started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All site content lives in a single file:

```
data/portfolio.ts
```

Edit the exported constants there to update the hero text, experience timeline, projects, skills, contact info, and nav structure. No other files need changing for content updates.

## Building

```bash
bun run build
bun start
```

## Deploying

Deployed on [Vercel](https://vercel.com). Push to `main` to deploy.
