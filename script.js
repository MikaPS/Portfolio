function showTab(index) {
  const panels = document.querySelectorAll(".tab-panel");
  const buttons = document.querySelectorAll(".tab-button");

  panels.forEach((panel) => panel.classList.remove("active"));
  buttons.forEach((button) => button.classList.remove("active"));

  panels[index].classList.add("active");
  buttons[index].classList.add("active");
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function closeMenu() {
  navLinks.classList.remove("active");
}
