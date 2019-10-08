const btn = document.querySelectorAll(".btn");
const activeCalc = document.querySelector(".activeCalc");
const popupHeader = document.querySelector(".popupHeader");
const darkBackground = document.querySelector(".darkBackground");
const close = document.querySelector(".close");
const popupContent = document.querySelector(".popupContent");

btn.forEach(item => {
  const popupDisplay = () => {
    activeCalc.style.width = 40 + "%";
    activeCalc.style.height = 40 + "%";
    close.style.visibility = "visible";
    popupContent.style.visibility = "visible";
    // item.classList.add("active");
    darkBackground.classList.add("popup-overlay");
    setTimeout(() => (popupHeader.textContent = item.textContent), 1000);
  };
  const popupClose = () => {
    activeCalc.style.width = 0;
    activeCalc.style.height = 0;
    close.style.visibility = "hidden";
    popupContent.style.visibility = "hidden";
    popupHeader.textContent = "";
    item.classList.remove("active");
    darkBackground.classList.remove("popup-overlay");
  };
  const changeBtnActive = () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
    item.classList.add("active");
  };

  item.addEventListener("click", changeBtnActive);
  item.addEventListener("click", popupDisplay);
  close.addEventListener("click", popupClose);
  darkBackground.addEventListener("click", popupClose);
});

// class Calculator {
//   constructor(name, about, ...data) {
//     this.name = name;
//     this.about = about;
//     this.data = data;
//   }
//   showAbout(text) {
//     console.log("pokazano about");
//     content.textContent = this.about;
//     // this.about = content.textContent;
//     // this.textContent = content;
//     // this.content = content;
//     // return content;
//     // this.about.textContent = text;
//   }
//   pushData(addData) {
//     this.data.push(addData);
//   }
// }

// // const bmi = new Calculator("bmi", "to jest ten content", "0000");
// // bmi.showAbout();
