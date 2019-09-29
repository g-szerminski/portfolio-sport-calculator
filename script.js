const btn = document.querySelectorAll(".btn");
const button = document.querySelector("button");
const activeCalc = document.querySelector(".activeCalc");
const h2 = document.querySelector(".h2");
// const arr = Array.from(document.querySelectorAll(".btn"));

btn.forEach(item => {
  const changeClassActive = () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      btn.forEach(item => {
        const removeActive = () => item.classList.remove("active");
        removeActive();
      });
      item.classList.add("active");
      // activeCalc.style.display = "block";
      // activeCalc.setAttribute("target", "_blank");
      activeCalc.style.width = 70 + "%";
      activeCalc.style.height = 50 + "%";
      h2.textContent = item.textContent;
      activeCalc.addEventListener("click", function() {
        activeCalc.style.width = 0;
        activeCalc.style.height = 0;
        h2.textContent = "";
        item.classList.remove("active");
      });
    }
  };

  item.addEventListener("click", changeClassActive);
});

// class Calculator {
//   constructor(name) {
//     this.name = name;
//   }
//   showAbout() {
//     if (button.classList.contains("active")) {
//       activeCalc.style.display = "block";
//     }
//   }
// }
// const calc = new Calculator("bmi");
// calc.showAbout();
