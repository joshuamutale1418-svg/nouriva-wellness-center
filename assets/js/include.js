async function loadHTML(id, file) {
  const element = document.getElementById(id);
  if (!element) return;

  const response = await fetch(file);
  element.innerHTML = await response.text();
}

async function initIncludes() {
  // Ensure header is loaded first so scripts depending on it can initialize
  await loadHTML("header", "partials/header.html");
  // Notify other scripts that header/partials are available
  document.dispatchEvent(new Event('headerLoaded'));
  // mark header as loaded for scripts that may load afterwards
  try { window.__headerLoaded = true; } catch (e) { /* noop */ }

  // Load the rest (not strictly required to be sequential)
  await loadHTML("footer", "partials/footer.html");
  await loadHTML("contact-form", "partials/contact-form.html");
  await loadHTML("cta", "partials/cta.html");
  await loadHTML("meta", "seo/meta.html");
}

initIncludes();

