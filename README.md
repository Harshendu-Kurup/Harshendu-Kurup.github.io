# Portfolio (Harshendu V Kurup)

Minimal, professional single-page portfolio built with plain HTML/CSS/JS — ready for GitHub Pages.

## Customize (2 minutes)
- **Resume**: replace `assets/Harshendu_V_Kurup_Resume.pdf` with your real resume PDF (same filename).
- **Photo (optional)**: replace `assets/profile.jpg` with a real image (recommended ~600×600, compressed).
- **Projects**: update/extend project links in `index.html` (search for `Repo`).

## Run locally
You can open `index.html` directly, but a small local server is better (links/JS behave consistently).

### Option A: Python

```bash
cd portfolio
python -m http.server 5173
```

Then open `http://localhost:5173`.

### Option B: VS Code Live Server
If you use the Live Server extension, right-click `index.html` → **Open with Live Server**.

## Deploy to GitHub Pages

### Recommended: use a dedicated repository
1. Create a new GitHub repo, e.g. `portfolio` (public).
2. Copy the contents of this `portfolio/` folder into the **root** of that repo.
   - The repo root should contain `index.html`, `styles.css`, `script.js`, and `assets/`.
3. Push to GitHub.
4. In GitHub: **Settings → Pages**
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or `master`)
   - **Folder**: `/ (root)`
5. Wait for the site to publish, then open the provided URL.

### Alternative: keep this folder inside a repo
GitHub Pages does not deploy from an arbitrary subfolder by default. If you want to keep `portfolio/`
inside another repository, the simplest approach is to move/copy the site files to the repo root
or to a `/docs` folder and configure Pages to that.

## Notes
- This site intentionally avoids publishing sensitive personal details (e.g., DOB, full street address).
