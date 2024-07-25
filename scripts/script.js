document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM elements
  const toggleInput = document.getElementById("theme-toggle");
  const menuButton = document.querySelector(".menu");
  const galleryButton = document.querySelector(".gallery");
  const navItems = document.querySelectorAll(".nav-items");
  const boxLines = document.querySelectorAll(".box-line");
  const box = document.querySelector(".box");

  const profileCard = document.getElementById("profile-card");
  const profileContainer = document.querySelector(".profile-container");
  const behindCard = document.getElementById("behind-card");

  // Modal DOM elements
  const linkedinButton = document.getElementById("linkedin-button");
  const githubButton = document.getElementById("github-button");
  const googleButton = document.getElementById("google-button");

  const linkedinModal = document.getElementById("linkedin-modal");
  const githubModal = document.getElementById("github-modal");
  const googleModal = document.getElementById("google-modal");

  const closeModalLinkedin = document.getElementById("close-modal-linkedin");
  const closeModalGithub = document.getElementById("close-modal-github");
  const closeModalGoogle = document.getElementById("close-modal-google");

  // Function to remove a specific class from multiple elements
  const removeClasses = (elements, className) => {
    elements.forEach((element) => element.classList.remove(className));
  };

  // Initial setup to ensure the menu and box are hidden
  removeClasses(navItems, "show-menu");
  removeClasses(boxLines, "box-line-show");
  box.classList.remove("box-show");

  // Toggle theme based on the switch
  toggleInput.addEventListener("change", () => {
    const isChecked = toggleInput.checked;

    // Change gradient background based on the toggle
    document.body.style.background = isChecked
      ? "linear-gradient(to right, #2c3e50 20%, #eaeade 20%)" // Dark mode gradient
      : "linear-gradient(to right, #eaeade 20%, #2c3e50 20%)"; // Light mode gradient
  });

  // Menu button click event listener
  if (menuButton) {
    menuButton.addEventListener("click", () => {
      navItems.forEach((item) => item.classList.toggle("show-menu"));
      removeClasses(boxLines, "box-line-show");
    });
  }

  // Gallery button click event listener
  if (galleryButton) {
    galleryButton.addEventListener("click", () => {
      box.classList.toggle("box-show");
      boxLines.forEach((line) => line.classList.toggle("box-line-show"));
      removeClasses(navItems, "show-menu");
    });
  }

  // Functions to open and close modals
  const toggleModal = (modal, display) => {
    modal.style.display = display;
  };

  const openModal = (modal) => toggleModal(modal, "block");
  const closeModal = (modal) => toggleModal(modal, "none");

  // Event Listeners for modals
  linkedinButton?.addEventListener("click", () => openModal(linkedinModal));
  githubButton?.addEventListener("click", () => openModal(githubModal));
  googleButton?.addEventListener("click", () => openModal(googleModal));

  closeModalLinkedin?.addEventListener("click", () =>
    closeModal(linkedinModal)
  );
  closeModalGithub?.addEventListener("click", () => closeModal(githubModal));
  closeModalGoogle?.addEventListener("click", () => closeModal(googleModal));

  // Close modals if clicked outside of the content
  window.addEventListener("click", (event) => {
    if (event.target === linkedinModal) {
      closeModal(linkedinModal);
    } else if (event.target === githubModal) {
      closeModal(githubModal);
    } else if (event.target === googleModal) {
      closeModal(googleModal);
    }
  });

  // Keyboard accessibility for closing modals
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      [linkedinModal, githubModal, googleModal].forEach((modal) => {
        if (modal.style.display === "block") {
          closeModal(modal);
        }
      });
    }
  });

  profileCard.addEventListener("click", () => {
    profileContainer.classList.toggle("show-behind");
    behindCard.classList.toggle("show-behind");
  });
});
