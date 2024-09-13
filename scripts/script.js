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
  // -----------------------------------------------------------------------------
  // PART - SCROLL
  // PAGE 1 -> 2 button
  const page2button = document.getElementById("page2button");
  const section2 = document.getElementById("section2");

  if (page2button && section2) {
    page2button.addEventListener("click", function () {
      // Smooth scroll to Section 2
      section2.scrollIntoView({ behavior: "smooth" });
    });
  }
  //
  // Add smooth scroll functionality for "Learn More" button
  const learnMoreButton = document.getElementById("learnMoreButton");
  const section3 = document.getElementById("section3");

  if (learnMoreButton && section3) {
    learnMoreButton.addEventListener("click", function () {
      // Smooth scroll to Section 3
      section3.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Add smooth scroll functionality for "Learn More" button
  const page3button = document.getElementById("page3button");
  const section4 = document.getElementById("section4");

  if (page3button && section4) {
    page3button.addEventListener("click", function () {
      // Smooth scroll to Section 4
      section4.scrollIntoView({ behavior: "smooth" });
    });
  }

  // -----------------------------------------------------------------------------

  // Function to initialize the slideshow for each card
  function initSlideshow(cardElement) {
    const images = cardElement.querySelectorAll(".card-image img");
    const prevBtn = cardElement.querySelector(".prev-btn");
    const nextBtn = cardElement.querySelector(".next-btn");
    let currentIndex = 0;

    // Function to show image based on index
    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.remove("active");
        img.classList.add("hidden");
        if (i === index) {
          img.classList.add("active");
          img.classList.remove("hidden");
        }
      });
    }

    // Event listeners for the buttons
    prevBtn.addEventListener("click", function () {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      showImage(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
      currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      showImage(currentIndex);
    });

    // Initialize the first image as active
    showImage(currentIndex);
  }

  // Function to initialize the flip effect for each card
  function initFlipEffect(cardElement) {
    const content = cardElement.querySelector(".card-content");
    const switchInput = cardElement.querySelector(
      '.checkbox-wrapper input[type="checkbox"]'
    );

    switchInput.addEventListener("change", () => {
      if (switchInput.checked) {
        content.style.transform = "rotateY(180deg)";
      } else {
        content.style.transform = "rotateY(0deg)";
      }
    });
  }

  // Apply functionality to all project cards
  const projectCards = document.querySelectorAll(".card");
  projectCards.forEach((card) => {
    initSlideshow(card);
    initFlipEffect(card);
  });

  //---------------------
});
