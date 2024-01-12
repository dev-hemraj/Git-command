const boxs = document.querySelectorAll(".box");

boxs.forEach((box) => {
  box.addEventListener("mouseover", () => {
    clearClass();
    box.classList.toggle("active");
  });
});

const clearClass = () => {
  boxs.forEach((box) => {
    box.classList.remove("active");
  });
};
