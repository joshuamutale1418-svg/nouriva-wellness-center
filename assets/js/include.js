async function loadHTML(id, file) {
  const element = document.getElementById(id);
  if (!element) return;

  const response = await fetch(file);
  element.innerHTML = await response.text();
}

loadHTML("header", "partials/header.html");
loadHTML("footer", "partials/footer.html");
loadHTML("contact-form", "partials/contact-form.html");
loadHTML("cta", "partials/cta.html");
loadHTML("meta", "seo/meta.html");

