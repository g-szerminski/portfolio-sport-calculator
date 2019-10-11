const btn = document.querySelectorAll(".btn");
const popup = document.querySelector(".popup");
const popupHeader = document.querySelector(".popupHeader");
const darkBackground = document.querySelector(".darkBackground");
const popupClose = document.querySelector(".popupClose");
const popupContent = document.querySelector(".popupContent");

class Calculator {
  constructor(name, about, ...data) {
    this.name = name;
    this.about = about;
    this.data = data;
  }
  popupDisplay() {
    popup.classList.add("popupDisplay");
    popupHeader.classList.add("show");
    popupContent.classList.add("show");
    popupClose.classList.add("show");
    darkBackground.classList.add("popup-overlay");
    popupHeader.textContent = this.textContent;
    popupContent.textContent = this.textContent;
    popupClose.addEventListener("click", popupHide);
    darkBackground.addEventListener("click", popupHide);
  }
  pushData(addData) {
    this.data.push(addData);
  }
}
const bmi = new Calculator("name: bmi", "about bmiiiiiiii", "0000");
const hrMax = new Calculator("name: hrMax", "about hrMaxxxxxxxxx", "1111");

btn.forEach(function(item) {
  item.addEventListener("click", bmi.popupDisplay);
});
{
  //----------------------------------------------------------
  // const changeClassActive = function() {
  //   if (this.classList.contains("active")) {
  //     this.classList.remove("active");
  //   } else {
  //     btn.forEach(item => {
  //       item.classList.remove("active");
  //     });
  //     this.classList.add("active");
  //   }
  // };
  // btn.forEach(item => {
  //   item.addEventListener("click", changeClassActive);
  // });
  //----------------------------------------------------------
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
}
