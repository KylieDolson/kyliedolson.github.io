
// Toggle dark mode class on body
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-mode");

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Optional: Change button text based on mode
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Toggle Light Mode";
    } else {
      toggleButton.textContent = "Toggle Dark Mode";
    }
  });
});
