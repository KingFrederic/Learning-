# The Curriculum

A self-paced website hosting ten deep courses for teen learners. AI literacy, money, code, writing, speaking, business, data, languages, mental health, and critical thinking.

Static HTML, no build step, no framework dependencies. Markdown content rendered client-side. Deploys to Vercel in one click.

## Live

After deploying, add your URL here.

## Stack

Plain HTML, CSS, vanilla JavaScript, and [marked.js](https://github.com/markedjs/marked) loaded from a CDN to render course markdown.

That's it. No React, no Next.js, no Tailwind build, no Node modules to install. The whole site is ~10 files.

## File structure

```
.
├── index.html          # Homepage
├── courses.html        # All courses list with reading paths
├── course.html         # Course template (loads MD by URL param)
├── about.html          # About page
├── style.css           # Single stylesheet
├── script.js           # All site JS + course metadata
├── vercel.json         # Vercel deployment config
└── courses/            # Course content as Markdown
    ├── 00-index.md
    ├── 01-ai-literacy.md
    ├── 02-financial-literacy.md
    ├── 03-coding-fundamentals.md
    ├── 04-persuasive-writing.md
    ├── 05-public-speaking.md
    ├── 06-digital-entrepreneurship.md
    ├── 07-data-literacy.md
    ├── 08-second-language.md
    ├── 09-mental-health.md
    └── 10-critical-thinking.md
```

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com), click "Add New Project"
3. Import the repository
4. Leave all build settings empty (Vercel auto-detects static)
5. Click Deploy

Done. The site goes live within seconds. Vercel gives you a free `*.vercel.app` URL; you can add a custom domain later.

## Edit content

To update any course, edit the corresponding `.md` file in `/courses`. Push to GitHub and Vercel auto-deploys. No rebuild needed because the site loads markdown at runtime.

To add a new course:
1. Add a new `.md` file in `/courses/`
2. Add an entry to the `COURSES` array at the top of `script.js`
3. Push to GitHub

## Local preview

Because the site fetches markdown files at runtime, opening `index.html` directly with `file://` in a browser will fail (CORS blocks the fetch). Use a local server instead. Easiest options:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (with http-server installed)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`.

## Customization

**Colors** — edit the CSS variables at the top of `style.css` under `:root {}`. The palette is built around five tokens (`--cream`, `--ink`, `--terracotta`, `--forest`, `--gold`); change those and the whole site re-skins.

**Fonts** — also at the top of `style.css`. Currently Fraunces (display), Geist (body), JetBrains Mono (mono).

**Course metadata** — edit the `COURSES` array in `script.js` to change titles, descriptions, hours, ages, etc.

## License

Content is free for any non-commercial educational use. Built for the next generation.
