console.log("Portfolio Loaded Successfully");

// Hire Me button
document.getElementById("hireBtn").onclick = () => {
  alert("Thank you for your interest! Please contact me via email.");
};

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
});
