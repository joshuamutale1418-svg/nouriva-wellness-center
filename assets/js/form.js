document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  const WHATSAPP_NUMBER = "260979403009";

  form.addEventListener("submit", event => {
    event.preventDefault();

    // Collect fields
    const name = form.querySelector("#name")?.value.trim();
    const phone = form.querySelector("#phone")?.value.trim();
    const email = form.querySelector("#email")?.value.trim();
    const service = form.querySelector("#service")?.value;
    const message = form.querySelector("#message")?.value.trim();

    // Basic validation (keep friction low)
    if (!name || !phone || !service) {
      alert("Please fill in your name, phone number, and service.");
      return;
    }

    // Build WhatsApp message
    const text = `
Hello Nouriva Wellness Centre,

Name: ${name}
Phone: ${phone}
Email: ${email || "N/A"}

Service Requested:
${service}

Message:
${message || "N/A"}
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    // Open WhatsApp
    window.open(url, "_blank");

    // Optional: reset form after submission
    form.reset();
  });
});
