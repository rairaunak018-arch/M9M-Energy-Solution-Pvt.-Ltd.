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

  // Non-blocking UI feedback (toast) instead of alert()
  showToast("Thank you! Your booking / order request has been prepared.");

  // Open WhatsApp immediately (user gesture) then defer email navigation so handler returns fast
  try {
    window.open(whatsappURL, "_blank");
  } catch (err) {
    // ignore — popup blocker may prevent opening
  }

  // Defer navigation so the submit handler finishes quickly (avoids [Violation] log)
  setTimeout(() => {
    // Try to open mail client — user can also use action buttons shown in the toast below
    try {
      window.location.href = emailURL;
    } catch (err) {
      /* ignore */
    }
  }, 150);

  // Show action toast with fallback links in case popups are blocked
  showActionToast(whatsappURL, emailURL);
}

// Small, reusable toast for non-blocking feedback
function showToast(msg, timeout = 2200) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.position = 'fixed';
  t.style.right = '20px';
  t.style.bottom = '20px';
  t.style.background = 'rgba(0,0,0,0.8)';
  t.style.color = '#fff';
  t.style.padding = '12px 16px';
  t.style.borderRadius = '8px';
  t.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
  t.style.zIndex = 10000;
  t.style.fontSize = '14px';
  t.style.opacity = '0';
  t.style.transition = 'opacity 220ms ease, transform 220ms ease';
  t.style.transform = 'translateY(8px)';
  document.body.appendChild(t);
  requestAnimationFrame(() => { t.style.opacity = '1'; t.style.transform = 'translateY(0)'; });
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateY(8px)';
    t.addEventListener('transitionend', () => t.remove(), { once: true });
  }, timeout);
}

// Action toast with clickable fallbacks (useful when popups are blocked)
function showActionToast(whatsappURL, emailURL, timeout = 5000) {
  const c = document.createElement('div');
  c.style.position = 'fixed';
  c.style.right = '20px';
  c.style.bottom = '20px';
  c.style.background = 'rgba(0,0,0,0.88)';
  c.style.color = '#fff';
  c.style.padding = '12px 14px';
  c.style.borderRadius = '10px';
  c.style.boxShadow = '0 12px 30px rgba(0,0,0,0.25)';
  c.style.zIndex = 10000;
  c.style.fontSize = '13px';
  c.style.display = 'flex';
  c.style.gap = '10px';
  c.style.alignItems = 'center';

  const span = document.createElement('span');
  span.textContent = 'Message ready —';
  span.style.marginRight = '6px';
  c.appendChild(span);

  const a1 = document.createElement('a');
  a1.href = whatsappURL;
  a1.target = '_blank';
  a1.rel = 'noreferrer noopener';
  a1.textContent = 'Open WhatsApp';
  a1.style.color = '#000';
  a1.style.background = '#9be15d';
  a1.style.padding = '6px 8px';
  a1.style.borderRadius = '6px';
  a1.style.textDecoration = 'none';
  a1.style.fontWeight = '700';
  c.appendChild(a1);

  const a2 = document.createElement('a');
  a2.href = emailURL;
  a2.textContent = 'Open Email';
  a2.style.color = '#000';
  a2.style.background = '#ffffff';
  a2.style.padding = '6px 8px';
  a2.style.borderRadius = '6px';
  a2.style.textDecoration = 'none';
  a2.style.fontWeight = '700';
  c.appendChild(a2);

  document.body.appendChild(c);
  requestAnimationFrame(() => { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; });
  setTimeout(() => {
    c.remove();
  }, timeout);
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
