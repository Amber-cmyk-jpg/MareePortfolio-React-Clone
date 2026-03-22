# Netlify Build Fix - TODO Steps

## Plan Breakdown
**Goal**: Fix Netlify "npm run build" error by completing root package.json and adjusting netlify.toml for root deploy.

**Step 1: ✓ Edit package.json**  
- Added "scripts" section with "build": "vite build".  
- Added dependencies matching maree/ (react, vite, etc.).

**Step 2: ✓ Edit netlify.toml**  
- Removed base="maree".  
- Ensured publish="dist".

**Step 3: [PENDING] Run `npm install`**  
- Install new dependencies.

**Step 4: [PENDING] Test build**  
- Run `npm run build` locally, verify dist/ folder created.

**Step 5: [PENDING] Push & redeploy**  
- Commit changes, push to Git, trigger Netlify build.

Next: Run installations and test.

