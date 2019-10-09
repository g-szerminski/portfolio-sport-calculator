const btn = document.querySelectorAll(".btn");
const popup = document.querySelector(".popup");
const popupHeader = document.querySelector(".popupHeader");
const darkBackground = document.querySelector(".darkBackground");
const popupClose = document.querySelector(".popupClose");
const popupContent = document.querySelector(".popupContent");
let calcDescription = "zzzzzzzzzzzz";

btn.forEach(item => {
  const popupDisplay = () => {
    popup.classList.add("popupDisplay");
    popupHeader.classList.add("show");
    popupContent.classList.add("show");
    popupClose.classList.add("show");
    darkBackground.classList.add("popup-overlay");
    item.classList.add("active");
    setTimeout(() => {
      popupHeader.textContent = item.textContent;
      popupContent.textContent = calcDescription;
    }, 1000);
  };
  const popupHide = () => {
    popup.classList.remove("popupDisplay");
    popupHeader.classList.remove("show");
    popupContent.classList.remove("show");
    popupClose.classList.remove("show");
    popupHeader.textContent = "";
    popupContent.textContent = "";
    item.classList.remove("active");
    darkBackground.classList.remove("popup-overlay");
  };

  item.addEventListener("click", popupDisplay);
  popupClose.addEventListener("click", popupHide);
  darkBackground.addEventListener("click", popupHide);
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

//----------------------------------------------------------------------------------------------------------------
// const changeBtnActive = () => {
//   if (item.classList.contains("active")) {
//     item.classList.remove("active");
//   }
//   item.classList.add("active");
// };
// item.addEventListener("click", changeBtnActive);
//---------------------------------------------------
// btn.forEach(item => {
//   const popupDisplay = () => {
//     // popup.style.width = 40 + "%";
//     // popup.style.height = 40 + "%";
//     popup.classList.add("popupDisplay");
//     popupHeader.classList.add("show");
//     popupContent.classList.add("show");
//     popupClose.classList.add("show");
//     // popupClose.style.visibility = "visible";
//     // popupContent.style.visibility = "visible";
//     darkBackground.classList.add("popup-overlay");
//     item.classList.add("active");
//     setTimeout(() => (popupHeader.textContent = item.textContent), 200);
//   };
//   const popupHide = () => {
//     // popup.style.width = 0;
//     // popup.style.height = 0;
//     popup.classList.remove("popupDisplay");
//     popupHeader.classList.remove("show");
//     popupContent.classList.remove("show");
//     popupClose.classList.remove("show");
//     // popupClose.style.visibility = "hidden";
//     // popupContent.style.visibility = "hidden";
//     // popupHeader.textContent = "";
//     item.classList.remove("active");
//     darkBackground.classList.remove("popup-overlay");
//   };
//---------------------------------------------
