// =======================
// NAV LINKS BLINK ON HOVER
// =======================
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.animation = 'blink 1s step-start infinite';
  });
  link.addEventListener('mouseleave', () => {
    link.style.animation = '';
  });
});

// INJECT BLINK KEYFRAMES
const blinkStyle = document.createElement('style');
blinkStyle.textContent = `
@keyframes blink {
  50% { opacity: 0; }
}
`;
document.head.appendChild(blinkStyle);

// =======================
// AUDIO CONTROLS
// =======================
const audio = document.getElementById("bg-audio");
const toggleBtn = document.getElementById("toggle-audio");

window.addEventListener("click", () => {
  audio.muted = false;
  audio.play().catch(err => console.warn("Audio play error:", err));
}, { once: true });

toggleBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    toggleBtn.textContent = "🔊 Pause Music";
  } else {
    audio.pause();
    toggleBtn.textContent = "🔈 Play Music";
  }
});

// =======================
// AJAX FORM SUBMISSION TO FORMSUBMIT.CO
// =======================

const form = document.getElementById("contact-form");
const thankYouDiv = document.getElementById("thank-you-message");

// On submit, prevent default and post via fetch
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const formData = new FormData(form);

  // POST to FormSubmit AJAX endpoint
  fetch("https://formsubmit.co/ajax/juliuskedienye61@gmail.com", {
    method: "POST",
    body: formData
  })
    .then((response) => response.json())
    .then((data) => {
      // If successful (FormSubmit returns { success: true } on success)
      if (data.success === "true" || data.success === true) {
        // Hide the form
        form.style.display = "none";
        // Show “Thank You”
        thankYouDiv.style.display = "block";
      } else {
        alert("Oops! There was a problem sending your message.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    });
});

// If the user clicks “Send Another Message,” show the form again
document.getElementById("back-to-form").addEventListener("click", function (e) {
  e.preventDefault();
  thankYouDiv.style.display = "none";
  form.style.display = "block";
  form.reset();
  form.querySelector("input[name='name']").focus();
});
