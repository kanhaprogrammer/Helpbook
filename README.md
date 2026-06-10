# 📖 Helpbook — Master Web Development

> A free, structured web development learning platform for beginners and intermediate developers. No account needed. No paywalls. Just open and learn.

---

## 🌐 Live Pages

|Page|File|Description|
|---|---|---|
|Home|`index.html`|Landing page with hero, tutorial cards, and recent list|
|Tutorials|`tutorials.html`|Browse, search, sort, and filter all tutorials|
|Tutorial|`tutorial.html`|Individual tutorial view with TOC, editor, comments|
|Dashboard|`dashboard.html`|Personal learning progress tracker|
|About|`about.html`|Mission, features, and tech coverage overview|

---

## 📁 Project Structure

```
helpbook/
├── index.html        # Home page
├── tutorials.html    # All tutorials browser
├── tutorial.html     # Single tutorial viewer (dynamic via ?id=)
├── dashboard.html    # User dashboard
├── about.html        # About page
├── style.css         # Global styles (dark/light theme, components)
├── main.js           # Shared JS — theme, cards, editor, comments
├── data.js           # Tutorial data (content, code, TOC, comments)
└── favicon.png       # Site icon
```

---

## 🎓 Tutorials Included

|ID|Title|Tech|Level|Duration|Lessons|
|---|---|---|---|---|---|
|`html-basics`|HTML Basics: Structure of the Web|HTML|Beginner|25 min|10|
|`css-flexbox`|CSS Flexbox: Modern Layouts Made Easy|CSS|Beginner|30 min|12|
|`js-dom`|JavaScript DOM Manipulation|JavaScript|Intermediate|40 min|14|
|`tailwind-intro`|Tailwind CSS: Utility-First Styling|Tailwind|Beginner|35 min|11|
|`nodejs-express`|Node.js & Express: Build Your First API|Node.js|Intermediate|50 min|16|
|`mongodb-basics`|MongoDB: NoSQL Database for Developers|MongoDB|Intermediate|45 min|13|
|`git-github`|Git & GitHub: Version Control for Devs|Tools|Beginner|30 min|10|

---

## ✨ Features

- **Live Code Playground** — HTML, CSS, and JS editor built into every tutorial. Run code without leaving the page.
- **Dark / Light Theme** — Toggle via the navbar button; preference saved in `localStorage`.
- **Search & Filter** — Filter tutorials by technology, difficulty level, or a search keyword. Sort by name, level, or duration.
- **Bookmarks** — Bookmark tutorials and resume them from the dashboard.
- **Progress Tracking** — Mark tutorials as complete; progress is shown in the sidebar and dashboard.
- **Table of Contents** — Auto-generated TOC with active section highlighting via IntersectionObserver.
- **Comments** — Per-tutorial comment section (session-scoped, no backend required).
- **Ratings** — Thumbs up / thumbs down feedback per tutorial, persisted in `localStorage`.
- **Related Tutorials** — Automatically shown based on matching tech or level.
- **Responsive Design** — Mobile-friendly with a hamburger menu for small screens.

---

## 📄 License

© 2026 Helpbook. Built for learners, by learners. Free forever.
