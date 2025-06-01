document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.animation = 'blink 1s step-start infinite';
  });

  link.addEventListener('mouseleave', () => {
    link.style.animation = '';
  });
});

// Blink animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes blink {
  50% { opacity: 0; }
}
`;
document.head.appendChild(style);
