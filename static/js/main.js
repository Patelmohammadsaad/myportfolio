// Sirf 2 chhote kaam: footer me saal + mobile menu kholna/band karna.

// Footer me current year likh do (2026, 2027...)
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile par menu button dabao to links dikho / chhupao
var menuBtn = document.getElementById("menu-btn");
var navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Kisi link par click karo to menu band ho jaye
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});
