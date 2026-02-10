const bookingForm = document.getElementById("bookingForm");

// Exit if booking form doesn't exist (e.g., on pages without the form)
if (!bookingForm) return;

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "260979403009";

  const text = `
Hello Nouriva Wellness Centre,

My name is ${name}.
Phone: ${phone}
Email: ${email || "N/A"}

I would like to book a consultation for:
${service}

Message:
${message || "N/A"}
  `;

  const encodedText = encodeURIComponent(text);

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodedText}`,
    "_blank"
  );
});
