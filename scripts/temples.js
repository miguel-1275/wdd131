document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("primary-nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburger.textContent = nav.classList.contains("open") ? "✕" : "☰";
});