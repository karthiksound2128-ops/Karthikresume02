// Simple JS for scroll effect and highlight
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 100;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      sec.style.border = "2px solid #003366";
    } else {
      sec.style.border = "none";
    }
  });
});
