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

  // Add smooth scroll functionality for "Learn More" button
  const learnMoreButton = document.getElementById("learnMoreButton");
  const section3 = document.getElementById("section3");

  if (learnMoreButton && section3) {
    learnMoreButton.addEventListener("click", function () {
      // Smooth scroll to Section 3
      section3.scrollIntoView({ behavior: "smooth" });
    });
  }

  // PAGE 1 -> 2 button
  const page2button = document.getElementById("page2button");
  const section2 = document.getElementById("section2");

  if (page2button && section2) {
    page2button.addEventListener("click", function () {
      // Smooth scroll to Section 2
      section2.scrollIntoView({ behavior: "smooth" });
    });
  }
});
