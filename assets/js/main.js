document.addEventListener("DOMContentLoaded", () => {
  /* ==============================
     GLOBAL CONSTANTS
     ============================== */
  const WHATSAPP_NUMBER = "260979403009";

  /* ==============================
     FOOTER YEAR (auto-update)
     ============================== */
  const yearEl = document.querySelector(".current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ==============================
     SMOOTH SCROLL FOR ANCHORS
     ============================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  /* ==============================
     GENERIC WHATSAPP LINKS
     ============================== */
  document.querySelectorAll("[data-whatsapp]").forEach(btn => {
    btn.addEventListener("click", () => {
      const message = btn.getAttribute("data-whatsapp") || "";
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    });
  });
});
