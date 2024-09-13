document.addEventListener("DOMContentLoaded", () => {
  // Ensure Kinet is included and accessible
  if (typeof Kinet === "undefined") {
    console.error("Kinet library is not loaded.");
    return;
  }

  // Kinet instance with custom settings
  var kinet = new Kinet({
    acceleration: 0.02,
    friction: 0.18,
    names: ["x", "y"],
  });

  // Select the circle element
  var circle = document.getElementById("circle");
  if (!circle) {
    console.error('Element with ID "circle" not found.');
    return;
  }

  // Set a handler on Kinet tick event
  kinet.on("tick", function (instances) {
    circle.style.transform = `translate3d(${instances.x.current}px, ${
      instances.y.current
    }px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${
      instances.y.velocity / 2
    }deg)`;
  });

  // Animate Kinet on mousemove
  document.addEventListener("mousemove", function (event) {
    kinet.animate("x", event.clientX - window.innerWidth / 2);
    kinet.animate("y", event.clientY - window.innerHeight / 2);
  });

  // Log Kinet start and end events
  kinet.on("start", () => console.log("Kinet animation started"));
  kinet.on("end", () => console.log("Kinet animation ended"));

  // Ensure the page starts at the top on load
  window.scrollTo(0, 0);

  // Set initial theme based on checkbox state
  const toggleInput = document.getElementById("checkbox");
  if (toggleInput) {
    if (toggleInput.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.add("light-mode");
    }

    // Add event listener for theme toggle
    toggleInput.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode", toggleInput.checked);
      document.body.classList.toggle("light-mode", !toggleInput.checked);
    });
  } else {
    console.error('Element with ID "checkbox" not found.');
  }

  // Smooth scroll functionality for buttons
  const smoothScroll = (buttonId, sectionId) => {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);
    if (button && section) {
      button.addEventListener("click", () =>
        section.scrollIntoView({ behavior: "smooth" })
      );
    } else {
      console.error(
        `Element with ID "${buttonId}" or "${sectionId}" not found.`
      );
    }
  };

  smoothScroll("page2button", "section2");
  smoothScroll("learnMoreButton", "section3");
  smoothScroll("page3button", "section4");
  smoothScroll("page4button", "section1");

  // Initialize the slideshow and flip effect for each card
  function initSlideshow(cardElement) {
    const images = cardElement.querySelectorAll(".card-image img");
    const prevBtn = cardElement.querySelector(".prev-btn");
    const nextBtn = cardElement.querySelector(".next-btn");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
        img.classList.toggle("hidden", i !== index);
      });
    }

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
      });

      nextBtn.addEventListener("click", () => {
        currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
        showImage(currentIndex);
      });

      showImage(currentIndex);
    } else {
      console.error("Slideshow buttons not found.");
    }
  }

  function initFlipEffect(cardElement) {
    const content = cardElement.querySelector(".card-content");
    const switchInput = cardElement.querySelector(
      '.checkbox-wrapper input[type="checkbox"]'
    );

    if (content && switchInput) {
      switchInput.addEventListener("change", () => {
        content.style.transform = switchInput.checked
          ? "rotateY(180deg)"
          : "rotateY(0deg)";
      });
    } else {
      console.error("Flip effect elements not found.");
    }
  }

  // Apply functionality to all project cards
  document.querySelectorAll(".card").forEach((card) => {
    initSlideshow(card);
    initFlipEffect(card);
  });

  // CV button click handler
  document.getElementById("cv-button").addEventListener("click", () => {
    window.open("/docs/Ghazi_Resume___Updated.pdf", "_blank");
  });
});
