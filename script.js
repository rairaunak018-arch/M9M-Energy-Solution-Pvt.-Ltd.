function sendMessage(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let product = document.getElementById("product").value;
  let message = document.getElementById("message").value;

  let text =
    `New Inquiry from M9M Energy Website\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Product/Brand: ${product}\n` +
    `Message: ${message}`;

  // WhatsApp
  let whatsappNumber = "919XXXXXXXXX"; // your number
  let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  // Email
  let emailURL = `mailto:m9menergy@gmail.com?subject=New Product Inquiry&body=${encodeURIComponent(text)}`;

  alert("Thank you! Your booking / order request has been sent.");

  window.open(whatsappURL, "_blank");
  window.location.href = emailURL;
}
// Scroll animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      section.classList.add("show");
    }
  });
});
