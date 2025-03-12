# Watcher

A modern web application for sharing and discovering movie/TV show recommendations with friends.

## Features

- 🎬 Search and share movie/TV show recommendations
- 🌙 Beautiful dark mode interface
- 🔒 Secure Google authentication
- ⚡ Real-time updates
- 📚 Private bookmarking
- 🔍 Smart search functionality

## Tech Stack

- **Frontend:**
  - React with TypeScript
  - Vite
  - Tailwind CSS
  - React Router

- **Backend:**
  - Node.js with Express
  - TypeScript
  - Prisma (PostgreSQL)
  - Socket.io

## Prerequisites

- Node.js >= 18
- pnpm
- PostgreSQL

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
cd watcher
```

2. Install dependencies
```bash
pnpm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start development servers
```bash
# Frontend
pnpm --filter frontend dev

# Backend
pnpm --filter backend dev
```

## Project Structure

```
watcher/
├── frontend/          # React frontend application
├── backend/           # Express backend server
├── package.json       # Root package.json for workspaces
└── README.md         # This file
```

## License

MIT 