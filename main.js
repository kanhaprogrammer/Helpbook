// ===== HELPBOOK MAIN JS =====

// ---- THEME ----
const THEME_KEY = "hb_theme";
function getTheme() {
  return localStorage.getItem(THEME_KEY) || "dark";
}
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  const btn = document.getElementById("themeBtn");
  if (btn)
    btn.innerHTML =
      t === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
}
function toggleTheme() {
  const next = getTheme() === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}
applyTheme(getTheme());

// ---- NAVBAR ----
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () =>
      mobileMenu.classList.toggle("open"),
    );
  }

  // Active nav link
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((a) => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });
});

// ---- TOAST ----
function showToast(msg, icon = '<i class="fas fa-check-circle"></i>') {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

// ---- COPY CODE ----
function copyCode(btn) {
  const pre = btn.closest(".code-block").querySelector("pre");
  const text = pre.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.innerHTML = "Copied!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.innerHTML = '<i class="far fa-copy"></i> Copy';
      btn.classList.remove("copied");
    }, 2000);
  });
}

// ---- CARD BUILDER ----
function buildTutorialCard(t) {
  const completed = isComplete(t.id);
  return `
    <a href="tutorial.html?id=${t.id}" class="tutorial-card" data-tech="${t.tech}">
      <div class="card-banner" style="background: ${t.colorBg};">
        <span style="position:relative;z-index:1">${t.icon}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="badge badge-${t.level.toLowerCase()}">${t.level}</span>
          <span style="font-size:0.75rem;color:var(--text-muted)">${t.tech}</span>
          ${completed ? '<span style="font-size:0.75rem;color:var(--accent-green);margin-left:auto"><i class="fas fa-check-circle"></i> Done</span>' : ""}
        </div>
        <div class="card-title">${t.title}</div>
        <div class="card-desc">${t.description}</div>
      </div>
      <div class="card-footer">
        <div class="card-info">
          <span class="card-info-item"><i class="far fa-clock"></i> ${t.duration}</span>
          <span class="card-info-item"><i class="fas fa-book-open"></i> ${t.lessons} lessons</span>
        </div>
        <span class="card-arrow"><i class="fas fa-arrow-right"></i></span>
      </div>
    </a>`;
}

function buildRecentItem(t) {
  return `
    <a href="tutorial.html?id=${t.id}" class="recent-item">
      <div class="recent-icon" style="background:${t.colorBg}">${t.icon}</div>
      <div class="recent-content">
        <div class="recent-title">${t.title}</div>
        <div class="recent-meta">${t.tech} · ${t.level} · ${t.date}</div>
      </div>
      <span class="recent-arrow"><i class="fas fa-arrow-right"></i></span>
    </a>`;
}

// ---- TRY IT EDITOR ----
function initEditor(tryItCode) {
  if (!document.getElementById("htmlPane")) return;
  document.getElementById("htmlPane").value = tryItCode.html || "";
  document.getElementById("cssPane").value = tryItCode.css || "";
  document.getElementById("jsPane").value = tryItCode.js || "";

  // Tab switching
  document.querySelectorAll(".editor-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".editor-tab")
        .forEach((t) => t.classList.remove("active"));
      document
        .querySelectorAll(".editor-panes")
        .forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document
        .getElementById(tab.dataset.target + "Pane")
        .closest(".editor-panes")
        .classList.add("active");
      const panels = document.querySelectorAll(".editor-panes");
      panels.forEach((p) => p.classList.remove("active"));
      document
        .getElementById(tab.dataset.target + "Panel")
        .classList.add("active");
    });
  });

  runCode();
}

function runCode() {
  const html = document.getElementById("htmlPane").value;
  const css = document.getElementById("cssPane").value;
  const js = document.getElementById("jsPane").value;
  const frame = document.getElementById("outputFrame");
  const doc = `<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
  frame.srcdoc = doc;
}

// ---- SEARCH ----
function initSearch(inputId, containerId) {
  const input = document.getElementById(inputId);
  const clearBtn = document.getElementById("searchClear");
  if (!input) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (clearBtn) clearBtn.classList.toggle("visible", q.length > 0);
    filterCards(q, null, containerId);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      input.value = "";
      clearBtn.classList.remove("visible");
      filterCards("", null, containerId);
    });
  }
}

function filterCards(query, tech, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const cards = container.querySelectorAll(".tutorial-card");
  let visible = 0;
  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const desc = card.querySelector(".card-desc").textContent.toLowerCase();
    const cardTech = card.dataset.tech;
    const matchQ = !query || title.includes(query) || desc.includes(query);
    const matchT = !tech || tech === "All" || cardTech === tech;
    const show = matchQ && matchT;
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });

  let noRes = container.querySelector(".no-results");
  if (visible === 0) {
    if (!noRes) {
      noRes = document.createElement("div");
      noRes.className = "no-results";
      noRes.innerHTML =
        "<h3>No tutorials found</h3><p>Try a different search or filter.</p>";
      container.appendChild(noRes);
    }
  } else if (noRes) noRes.remove();
}

// ---- RATING ----
function initRating() {
  const likeBtn = document.getElementById("likeBtn");
  const dislikeBtn = document.getElementById("dislikeBtn");
  if (!likeBtn) return;

  const tutId = new URLSearchParams(window.location.search).get("id");
  const key = "hb_rating_" + tutId;
  const saved = localStorage.getItem(key);
  if (saved === "like") likeBtn.classList.add("active");
  if (saved === "dislike") dislikeBtn.classList.add("active");

  likeBtn.addEventListener("click", () => {
    const isActive = likeBtn.classList.toggle("active");
    dislikeBtn.classList.remove("active");
    localStorage.setItem(key, isActive ? "like" : "");
    if (isActive)
      showToast("Thanks for the feedback!", '<i class="fas fa-thumbs-up"></i>');
  });
  dislikeBtn.addEventListener("click", () => {
    const isActive = dislikeBtn.classList.toggle("active");
    likeBtn.classList.remove("active");
    localStorage.setItem(key, isActive ? "dislike" : "");
    if (isActive) showToast("Thanks! We'll work on improving this.", "📝");
  });
}

// ---- BOOKMARK ----
function initBookmarkBtn(id) {
  const btn = document.getElementById("bookmarkBtn");
  if (!btn) return;
  const update = () => {
    const bm = isBookmarked(id);
    btn.innerHTML = bm
      ? '<i class="fas fa-bookmark"></i> Bookmarked'
      : '<i class="far fa-bookmark"></i> Bookmark';
    btn.style.borderColor = bm ? "var(--accent-blue)" : "";
    btn.style.color = bm ? "var(--accent-blue)" : "";
  };
  update();
  btn.addEventListener("click", () => {
    const added = toggleBookmark(id);
    update();
    showToast(
      added ? "Bookmarked!" : "Removed from bookmarks",
      added
        ? '<i class="fas fa-bookmark"></i>'
        : '<i class="fas fa-times"></i>',
    );
  });
}

// ---- TOC ACTIVE ----
function initTocHighlight() {
  const tocLinks = document.querySelectorAll(".toc-list a");
  if (!tocLinks.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          tocLinks.forEach((l) => l.classList.remove("active"));
          const match = document.querySelector(
            `.toc-list a[href="#${e.target.id}"]`,
          );
          if (match) match.classList.add("active");
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" },
  );
  document
    .querySelectorAll(".prose [id]")
    .forEach((el) => observer.observe(el));
}

// ---- COMMENTS ----
function initComments(comments) {
  const list = document.getElementById("commentList");
  const form = document.getElementById("commentForm");
  const textarea = document.getElementById("commentText");
  const submitBtn = document.getElementById("commentSubmit");
  if (!list) return;

  const renderComments = (data) => {
    list.innerHTML = data
      .map(
        (c) => `
      <div class="comment-item">
        <div class="comment-avatar">${c.author[0]}</div>
        <div class="comment-body-wrap">
          <div class="comment-author">${c.author} <span class="comment-date">${c.date}</span></div>
          <div class="comment-text">${c.text}</div>
        </div>
      </div>`,
      )
      .join("");
  };
  renderComments(comments);

  if (submitBtn && textarea) {
    submitBtn.addEventListener("click", () => {
      const text = textarea.value.trim();
      if (!text) return;
      comments.unshift({ author: "You", date: "Just now", text });
      renderComments(comments);
      textarea.value = "";
      showToast("Comment posted!", '<i class="fas fa-comments"></i>');
    });
  }
}

// ---- COMPLETE MARK ----
function initMarkComplete(id) {
  const btn = document.getElementById("markCompleteBtn");
  if (!btn) return;
  const update = () => {
    const done = isComplete(id);
    btn.innerHTML = done
      ? '<i class="fas fa-check-circle"></i> Completed'
      : "Mark as Complete";
    btn.style.background = done ? "rgba(46,204,113,0.15)" : "";
    btn.style.borderColor = done ? "var(--accent-green)" : "";
    btn.style.color = done ? "var(--accent-green)" : "";
  };
  update();
  btn.addEventListener("click", () => {
    markComplete(id);
    update();
    showToast("Marked as complete! 🎉", "🎉");
  });
}
