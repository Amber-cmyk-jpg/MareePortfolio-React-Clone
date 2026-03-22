# Netlify maree/ Build Fix - Steps

**Current Status**: Script works, vite starts, missing react-bootstrap import in header.jsx.

**Step 1: [PENDING] Update maree/package.json**
- Add deps: bootstrap, react-bootstrap, aos, aos/dist/aos.css

**Step 2: [PENDING] Copy files to maree/src/**
- src/header.jsx → maree/src/header.jsx
- src/header.css → maree/src/header.css
- All images/fonts (bgmar1.png, logo maree.png, Mulish/*, etc.)

**Step 3: [PENDING] Update App.jsx**
- Import/use Header component

**Step 4: [PENDING] Test `cd maree && npm run build`

**Step 5: [PENDING] Git commit/push

Next: Update package.json deps.

