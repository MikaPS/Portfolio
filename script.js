function showTab(index, buttonId, panelId) {
  const panelGroup = document.getElementById(panelId);
  const buttonGroup = document.getElementById(buttonId);

  const panels = panelGroup.querySelectorAll(".tab-panel");
  const buttons = buttonGroup.querySelectorAll(".tab-button");

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
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.remove("active");
}
