
document.querySelectorAll(".showmore").forEach(function (p) {
  p.querySelector("a").addEventListener("click", function() {
    p.classList.toggle("show");
    this.textContent = p.classList.contains("show") ? "Show Less" :
    "Show More";
  });
});


document.querySelectorAll("a[href^=\"#\"]").forEach((anchor) => {
  anchor.addEventListener("click", function (ev) {
    ev.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));
    targetElement.scrollIntoView({
      block: "start",
      alignToTop: true,
      behavior: "smooth"
    });
  });
});


