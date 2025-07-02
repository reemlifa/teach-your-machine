document
  .getElementById("scroll-down-btn")
  .addEventListener("click", function () {
    document
      .getElementById("target-section")
      .scrollIntoView({ behavior: "smooth" });
  });
