# SMGPUB Ultimate Platform

## Overview
This project is the ultimate music licensing, distribution, and publishing platform.

## Folder Structure
- `apps/` - Frontend apps: web, admin, creator
- `backend/` - API and server
- `core/` - Core modules: publishing, licensing, distribution, royalties
- `storage/` - Audio, artwork, contracts, stems
- `ai/` - AI modules for tagging, copyright detection, recommendations
- `automation/` - Automation scripts
- `analytics/` - Analytics scripts and dashboards
- `integrations/` - Third-party integrations
- `database/` - Schemas and migrations
- `infrastructure/` - Security, cloud, environment
- `docs/` - Documentation

## Getting Started
1. Install dependencies: `npm install`
2. Run server: `node backend/server.js`
3. Run web frontend: `npm run dev`
{
  "name": "smgpub-ultimate-enterprise",
  "version": "3.0.0",
  "private": true,
  "description": "Enterprise Music Publishing & AI Licensing Platform",
  "workspaces": [
    "apps/*",
    "backend",
    "core-engines/*",
    "ai-systems/*",
    "blockchain/*"
  ],
  "scripts": {
    "dev": "npm run dev --workspaces --if-present",
    "build": "npm run build --workspaces --if-present",
    "start": "node backend/server.js",
    "test": "npm test --workspaces"
  },
  "dependencies": {
    "dotenv": "^16.4.0",
    "ethers": "^6.10.0",
    "express": "^4.18.2"
  }
}
