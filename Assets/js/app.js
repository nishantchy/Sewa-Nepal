window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (window.scrollY > 400) {
    header.classList.add("header-bg");
  } else {
    header.classList.remove("header-bg");
  }
});

const boxes = document.querySelectorAll(".content");
const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) box.classList.add("show");
    else box.classList.remove("show");
  });
};
window.addEventListener("scroll", checkBoxes);
checkBoxes();

// gallery
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});
