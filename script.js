const aboutBmiButton = document.querySelector(".aboutBmiButton");
const checkBmiButton = document.querySelector(".checkBmiButton");

const aboutBmi = () => {
  if (checkBmiButton.classList.contains("active")) {
    checkBmiButton.classList.toggle("active");
  }
  aboutBmiButton.classList.toggle("active");
};
const checkYourBmi = () => {
  if (aboutBmiButton.classList.contains("active")) {
    aboutBmiButton.classList.toggle("active");
  }
  checkBmiButton.classList.toggle("active");
};

aboutBmiButton.addEventListener("click", aboutBmi);
checkBmiButton.addEventListener("click", checkYourBmi);
