# 📘 Readium Documentation

Official documentation site for **Readium** —  
a session-based reading log app that saves your reading as time.

🌐 Live Site: https://io-ceak-readium.github.io/readium-docs-public
📱 App Status: Android / iOS – Coming Soon  

---

## 🧭 About Readium

Readium is designed to:

- ⏱ Log reading sessions (start / end)
- 🗂 Organize reading activity in a timeline
- 📝 Keep book notes and session notes separately
- 💾 Store data locally on device

This repository contains the public documentation website built with **Docusaurus**.

---

## 🛠 Tech Stack

- Docusaurus
- React
- GitHub Pages
- GitHub Actions (Deployment)

---

## 🚀 Local Development

Install dependencies:

```bash
yarn
````

Start development server:

```bash
yarn start
```

The site will be available at:

```
http://localhost:3000
```

Hot reload is enabled.

---

## 🏗 Build

Generate static files:

```bash
yarn build
```

Build output directory:

```
/build
```

---

## 🚢 Deployment

Deploy to GitHub Pages:

```bash
yarn deploy
```

If SSH is required:

```bash
USE_SSH=true yarn deploy
```

---

## 📂 Project Structure

```
docs/          → Documentation markdown files  
src/           → Custom React pages & components  
static/        → Images (screenshots, badges)  
docusaurus.config.ts  
sidebars.ts  
```

---

## 📄 License

Copyright © 2026 Readium.
All rights reserved.
