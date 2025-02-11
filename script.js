document.addEventListener("DOMContentLoaded", function () {
  const selector = document.getElementById("selone");
  const imageBox = document.getElementById("selectedImage");

  selector.addEventListener("change", function () {
    const selectedOption = selector.options[selector.selectedIndex];
    const imageSrc = selectedOption.getAttribute("data-image");

    if (imageSrc) {
      imageBox.src = imageSrc;
      imageBox.style.display = "block";
    } else {
      imageBox.style.display = "none";
    }
  });
});
