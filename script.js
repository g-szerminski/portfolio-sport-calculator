const btn = document.querySelectorAll(".btn");
const button = document.querySelectorAll("button");

// const changeClassActive = () => {
//   if (btn.classList.contains("active")) {
//     btn.classList.toggle("active");
//   }
//   btn.classList.toggle("active");
// };
// btn.addEventListener("click", changeClassActive);
btn.forEach(item => {
  // item.className = "btn";
  const changeClassActive = () => {
    item.classList.toggle("active");
  };
  item.addEventListener("click", changeClassActive);
});

// const aboutBmiButton = document.querySelector(".aboutBmiButton");
// const checkBmiButton = document.querySelector(".checkBmiButton");
// const aboutBmi = () => {
//   if (checkBmiButton.classList.contains("active")) {
//     checkBmiButton.classList.toggle("active");
//   }
//   aboutBmiButton.classList.toggle("active");
// };
// const checkYourBmi = () => {
//   if (aboutBmiButton.classList.contains("active")) {
//     aboutBmiButton.classList.toggle("active");
//   }
//   checkBmiButton.classList.toggle("active");
// };
// aboutBmiButton.addEventListener("click", aboutBmi);
// checkBmiButton.addEventListener("click", checkYourBmi);
