document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("detailsModal");
  const closeModal = document.querySelector(".close-modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalSpecs = document.getElementById("modalSpecs");

  const detailButtons = document.querySelectorAll(".show-details");

  detailButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const title = this.getAttribute("data-title");
      const description = this.getAttribute("data-description");
      const specs = this.getAttribute("data-specs");

      modalTitle.innerText = title;
      modalDescription.innerText = description;
      modalSpecs.innerHTML = specs;

      modal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});


window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);
  }); 