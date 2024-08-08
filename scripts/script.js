// Create an instance of Kinet with custom settings
var kinet = new Kinet({
  acceleration: 0.02,
  friction: 0.18,
  names: ["x", "y"],
});

// Select the circle element
var circle = document.getElementById("circle");

// Set a handler on Kinet tick event
kinet.on("tick", function (instances) {
  circle.style.transform = `translate3d(${instances.x.current}px, ${
    instances.y.current
  }px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${
    instances.y.velocity / 2
  }deg)`;
});

// Call Kinet animate method on mousemove
document.addEventListener("mousemove", function (event) {
  kinet.animate("x", event.clientX - window.innerWidth / 2);
  kinet.animate("y", event.clientY - window.innerHeight / 2);
});

// Log Kinet start and end events
kinet.on("start", function () {
  console.log("start");
});

kinet.on("end", function () {
  console.log("end");
});

// Ensure the page starts at the top on load
document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);

  // Set initial theme based on checkbox state
  const toggleInput = document.getElementById("checkbox");
  if (toggleInput.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.add("light-mode");
  }

  // Add event listener for theme toggle
  toggleInput.addEventListener("change", () => {
    if (toggleInput.checked) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  });
});

// Cache DOM elements
// const toggleInput = document.getElementById("theme-toggle");
// const menuButton = document.querySelector(".menu");
// const galleryButton = document.querySelector(".gallery");
// const navItems = document.querySelectorAll(".nav-items");
// const boxLines = document.querySelectorAll(".box-line");
// const box = document.querySelector(".box");

// const profileCard = document.getElementById("profile-card");
// const profileContainer = document.querySelector(".profile-container");
// const behindCard = document.getElementById("behind-card");

// Modal DOM elements
// const linkedinButton = document.getElementById("linkedin-button");
// const githubButton = document.getElementById("github-button");
// const googleButton = document.getElementById("google-button");

// const linkedinModal = document.getElementById("linkedin-modal");
// const githubModal = document.getElementById("github-modal");
// const googleModal = document.getElementById("google-modal");

// const closeModalLinkedin = document.getElementById("close-modal-linkedin");
// const closeModalGithub = document.getElementById("close-modal-github");
// const closeModalGoogle = document.getElementById("close-modal-google");

// Function to remove a specific class from multiple elements
// const removeClasses = (elements, className) => {
//   elements.forEach((element) => element.classList.remove(className));
// };

// Initial setup to ensure the menu and box are hidden
// removeClasses(navItems, "show-menu");
// removeClasses(boxLines, "box-line-show");
// box.classList.remove("box-show");

// Toggle theme based on the switch
// toggleInput.addEventListener("change", () => {
//   if (toggleInput.checked) {
// Dark mode
//   document.body.style.background = "var(--background-dark)";
// } else {
// Light mode
//     document.body.style.background = "var(--background-light)";
//   }
// });

// Menu button click event listener
// if (menuButton) {
//   menuButton.addEventListener("click", () => {
//     navItems.forEach((item) => item.classList.toggle("show-menu"));
//     removeClasses(boxLines, "box-line-show");
//   });
// }

// Gallery button click event listener
// if (galleryButton) {
//   galleryButton.addEventListener("click", () => {
//     box.classList.toggle("box-show");
//     boxLines.forEach((line) => line.classList.toggle("box-line-show"));
//     removeClasses(navItems, "show-menu");
//   });
// }

// Functions to open and close modals
// const toggleModal = (modal, display) => {
//   modal.style.display = display;
// };

// const openModal = (modal) => toggleModal(modal, "block");
// const closeModal = (modal) => toggleModal(modal, "none");

// Event Listeners for modals
// linkedinButton?.addEventListener("click", () => openModal(linkedinModal));
// githubButton?.addEventListener("click", () => openModal(githubModal));
// googleButton?.addEventListener("click", () => openModal(googleModal));

// closeModalLinkedin?.addEventListener("click", () =>
//   closeModal(linkedinModal)
// );
// closeModalGithub?.addEventListener("click", () => closeModal(githubModal));
// closeModalGoogle?.addEventListener("click", () => closeModal(googleModal));

// Close modals if clicked outside of the content
// window.addEventListener("click", (event) => {
//   if (event.target === linkedinModal) {
//     closeModal(linkedinModal);
//   } else if (event.target === githubModal) {
//     closeModal(githubModal);
//   } else if (event.target === googleModal) {
//     closeModal(googleModal);
//   }
// });

// Keyboard accessibility for closing modals
//   window.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//       [linkedinModal, githubModal, googleModal].forEach((modal) => {
//         if (modal.style.display === "block") {
//           closeModal(modal);
//         }
//       });
//     }
//   });

//   profileCard.addEventListener("click", () => {
//     profileContainer.classList.toggle("show-behind");
//     behindCard.classList.toggle("show-behind");
//   });
