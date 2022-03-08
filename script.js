let shareBtn = document.querySelector(".share-btn");
let socialSection = document.querySelector(".social-section");

shareBtn.addEventListener("click", function () {
   socialSection.classList.toggle("hidden");
});
