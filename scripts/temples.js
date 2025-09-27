document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("primary-nav");

hamburger.addEventListener("click", () => {
  if (nav.style.display === "block") {
    nav.style.display = "none";
    hamburger.textContent = "☰";
  } else {
    nav.style.display = "block";
    hamburger.textContent = "✕";
  }
});
