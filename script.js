const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-list li a");

// Function to toggle the navigation menu
function toggleNav() {
  hamburger.classList.toggle("clicked");
  nav.classList.toggle("show");
}

// Add click event listener to the hamburger icon
hamburger.addEventListener("click", () => {
  toggleNav();
});

// Close the navigation after clicking on a link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("show")) {
      toggleNav();
    }
  });
});
