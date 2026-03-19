# Waafoo — Coming Soon Page

A premium coming soon landing page for **Waafoo**, a smart water-tech brand.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Opens at [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
waafoo-coming-soon/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── WaafooComingSoon.jsx   ← Main page component
│   │   ├── PhoneCard.jsx          ← App mockup phone card
│   │   ├── TdsChip.jsx            ← Floating TDS mini-card
│   │   └── Icons.jsx              ← All SVG icon components
│   ├── styles/
│   │   ├── global.css             ← CSS variables + reset
│   │   └── WaafooComingSoon.module.css ← All component styles
│   ├── App.jsx
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

---

## 🎨 Design

| Token | Value | Usage |
|---|---|---|
| `--teal` | `#1FB5A8` | Primary brand, accents |
| `--teal-dark` | `#0E8F85` | Hover states |
| `--teal-deeper` | `#0A6B63` | Button hover, gradients |
| `--ink` | `#071A19` | Buttons, dark elements |
| `--bg` | `#F3FAFA` | Page background |
| `--text` | `#0D2625` | Primary text |

**Fonts:** Syne (headings) + DM Sans (body) via Google Fonts

---

## ✉️ Email Capture

The email form validates on submit and enter key. On success, the form swaps to a confirmation message. To wire up a real backend, edit `handleSubmit` in `WaafooComingSoon.jsx`:

```js
const handleSubmit = async () => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email.trim())) { /* ... */ return; }

  // Add your API call here:
  await fetch('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: { 'Content-Type': 'application/json' },
  });

  setSubmitted(true);
};
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 1100px` | Full 2-column, wide padding |
| `≤ 1100px` | 2-column, reduced padding |
| `≤ 900px` | Single column, right mockup below |
| `≤ 600px` | Mobile — smaller type, compact form |
| `≤ 400px` | Small phones |

---

© 2025 Waafoo Technologies · [connect@waafoo.in](mailto:connect@waafoo.in)
