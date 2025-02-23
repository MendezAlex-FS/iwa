function smoothScroll() {
  const navLinks = document.querySelectorAll("nav a, #favorites a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const navHash = document.querySelector(link.hash);
      navHash.scrollIntoView({ behavior: "smooth" });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("contactMeButton");
  if (element) {
    element.addEventListener("click", function () {
      alert("This will only work if you have and email client is installed.");
    });
  }

  smoothScroll();
});
