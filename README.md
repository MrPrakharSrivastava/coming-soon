# Waafoo — Coming Soon (Vite + React)

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Opens at **http://localhost:5173**

## 📦 Build

```bash
npm run build    # outputs to /dist
npm run preview  # preview production build
```

## 📁 Structure

```
waafoo-vite/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                        ← CSS variables + reset
    └── components/
        ├── WaafooComingSoon.jsx          ← Main page
        ├── WaafooComingSoon.module.css
        ├── ROCard.jsx                    ← Split RO service card
        ├── ROCard.module.css
        ├── TdsChip.jsx                   ← Floating TDS badge
        ├── TdsChip.module.css
        └── Icons.jsx                     ← SVG icon components
```

## 🎨 Fonts
Helvetica / Arial (system font — no external load)

## ✉️ Email CTA
Wire up `handleSubmit` in `WaafooComingSoon.jsx` to your API endpoint.
