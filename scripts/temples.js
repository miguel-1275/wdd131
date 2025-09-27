document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = "Last Modified: " + document.lastModified;

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("primary-nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
  hamburger.textContent = nav.classList.contains("show") ? "✕" : "☰";
});
