function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");

  // Guard clause (prevents console errors if markup changes)
  if (!toggle || !nav) return;

  // Prevent double-initialization
  if (toggle.dataset.navInitialized) return;
  toggle.dataset.navInitialized = 'true';

  // Toggle mobile menu
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("open");
  });

  // Close menu when a link is clicked (mobile UX)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggle.classList.remove("open");
    });
  });

  // Highlight active page
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });
}

// Initialize on DOMContentLoaded or when header partial is inserted
// expose for callers that run before this script is parsed
try { window.initNav = initNav; } catch (e) { /* noop */ }

document.addEventListener('DOMContentLoaded', initNav);
document.addEventListener('headerLoaded', initNav);

// If include.js already loaded the header before this script ran, initialize now
if (window.__headerLoaded) {
  initNav();
}
