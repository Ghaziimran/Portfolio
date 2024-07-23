// Theme Toggle
const toggleInput = document.getElementById("theme-toggle");
toggleInput.addEventListener("change", () => {
  document.body.style.backgroundColor = toggleInput.checked
    ? "#2c3e50"
    : "#fff";
});

// Function to remove a specific class from multiple elements
const removeClasses = (elements, className) => {
  Array.from(elements).forEach((element) =>
    element.classList.remove(className)
  );
};

// Initial setup to ensure the menu and box are hidden
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.getElementsByClassName("nav-items");
  const boxLines = document.getElementsByClassName("box-line");
  const box = document.querySelector(".box");

  removeClasses(navItems, "show-menu");
  removeClasses(boxLines, "box-line-show");
  box.classList.remove("box-show");
});

// Click event listener for the menu
document.querySelector(".menu").addEventListener("click", () => {
  const navItems = document.getElementsByClassName("nav-items");
  const boxLines = document.getElementsByClassName("box-line");

  Array.from(navItems).forEach((item) => item.classList.toggle("show-menu"));
  removeClasses(boxLines, "box-line-show");
});

// Click event listener for the gallery
document.querySelector(".gallery").addEventListener("click", () => {
  const box = document.querySelector(".box");
  const boxLines = document.getElementsByClassName("box-line");
  const navItems = document.getElementsByClassName("nav-items");

  box.classList.toggle("box-show");
  Array.from(boxLines).forEach((line) =>
    line.classList.toggle("box-line-show")
  );
  removeClasses(navItems, "show-menu");
});
