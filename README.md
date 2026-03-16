# SMGPUB Ultimate Platform

## Overview
This project is the ultimate music licensing, distribution, and publishing platform.

## Folder Structure
- `apps/` - Frontend apps: web, website, admin, creator
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


# SMGPUB Multiverse Enterprise 🚀

An end-to-end digital media publishing platform featuring AI copyright detection and smart-contract royalty distribution.

## Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JS (Modular ES6)
- **Backend:** Node.js, Express
- **Database:** MongoDB (Metadata) & AWS S3 (High-fidelity Audio)
- **AI:** Custom Audio Fingerprinting Engine
- **Blockchain:** Ethereum-compatible Copyright Ledger

## Setup
1. Clone the repository.
2. Run `npm install`.
3. Configure your `.env` based on `.env.example`.
4. Run `npm start` to launch the API and Frontend.

## Architecture Highlights
- `/apps/creator-studio`: Dedicated UI for artists to manage splits.
- `/ai-systems`: Heavy-lifting algorithms for metadata generation.
- `/core-engines`: The business logic for PRO registrations (ASCAP/BMI).
