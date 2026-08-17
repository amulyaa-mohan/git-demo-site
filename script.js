/* =========================================================
   Git & GitHub Workshop — behaviour
   Small and readable on purpose. Change a value, commit it,
   and you've got a clean one-line diff to show the room.
   ========================================================= */

// 1) Fill in the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// 2) Dark / light theme toggle (remembers your choice in the browser)
const toggle = document.getElementById("themeToggle");

// Restore the saved theme when the page loads
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// 3) A tiny counter that ticks up each time you click a participant card.
//    Nothing important — just a friendly thing to edit during the demo.
let edits = 0;
const editCount = document.getElementById("editCount");

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    edits += 1;
    editCount.textContent = edits;
  });
});

// Try this as a live edit: change the greeting below and commit it.
console.log("Welcome to the Git & GitHub workshop! 🚀");
