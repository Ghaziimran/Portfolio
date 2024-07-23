document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM elements
  const toggleInput = document.getElementById("theme-toggle");
  const menuButton = document.querySelector(".menu");
  const galleryButton = document.querySelector(".gallery");
  const navItems = document.getElementsByClassName("nav-items");
  const boxLines = document.getElementsByClassName("box-line");
  const box = document.querySelector(".box");
  const typingElement = $(".typing");

  // Function to remove a specific class from multiple elements
  const removeClasses = (elements, className) => {
    Array.from(elements).forEach((element) =>
      element.classList.remove(className)
    );
  };

  // Initial setup to ensure the menu and box are hidden
  removeClasses(navItems, "show-menu");
  removeClasses(boxLines, "box-line-show");
  box.classList.remove("box-show");

  // Toggle theme based on the switch
  toggleInput.addEventListener("change", () => {
    document.body.classList.toggle("background-toggled", toggleInput.checked);
    document.body.classList.toggle("background-default", !toggleInput.checked);
  });

  // Menu button click event listener
  if (menuButton) {
    menuButton.addEventListener("click", () => {
      Array.from(navItems).forEach((item) =>
        item.classList.toggle("show-menu")
      );
      removeClasses(boxLines, "box-line-show");
    });
  }

  // Gallery button click event listener
  if (galleryButton) {
    galleryButton.addEventListener("click", () => {
      box.classList.toggle("box-show");
      Array.from(boxLines).forEach((line) =>
        line.classList.toggle("box-line-show")
      );
      removeClasses(navItems, "show-menu");
    });
  }

  // Typing effect reset on click
  if (typingElement.length > 0) {
    typingElement.on("click", () => {
      typingElement.removeClass("animate");
      // Use a short timeout to ensure the class removal takes effect before re-adding it
      setTimeout(() => typingElement.addClass("animate"), 10);
    });
  }
});
