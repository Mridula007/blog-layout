// Dark mode toggle logic
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  // Save the preference
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});