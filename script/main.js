const btn = document.querySelectorAll(".btn");
const calculator = document.querySelector(".calculator");
const popup = document.querySelector(".popup");
const popupHeader = document.querySelector(".popupHeader");
const darkBackground = document.querySelector(".darkBackground");
const popupClose = document.querySelector(".popupClose");
const popupContent = document.querySelector(".popupContent");
let bmi = document.querySelector('bmi');
let hrmax = document.querySelector('hrmax')

class Calculator {
  constructor(name, about, ...data) {
    this.name = name;
    this.about = about;
    this.data = data;
    this.buttonListen();
  }

  // buttonListen() {
  //   btn.forEach(item => {
  //     item.addEventListener("click", popupShow.bind(this));
  //     console.log(this);
  //   });
  buttonListen() {
    // debugger;
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", popupShow.bind(this));
      console.log("działa");

    }

    function popupShow(e) {
      popup.classList.add("popupDisplay");
      popupHeader.classList.add("show");
      popupContent.classList.add("show");
      popupClose.classList.add("show");
      darkBackground.classList.add("popup-overlay");
      popupHeader.textContent = e.target.textContent;
      popupContent.textContent = this.about;
      popupClose.addEventListener("click", popupHide);
      darkBackground.addEventListener("click", popupHide);
      e.stopPropagation();
      console.log(this);
      return popupContent.textContent;
    }
  }

  
  pushData(addData) {
    this.data.push(addData);
    return this.data;
  }
}

hrMax = new Calculator("hrMax", "about hrmax", "1111");
bmi = new Calculator("bmi", "about bmi", "0000");

{
  //----------------------------------------------------------
  // btn.forEach(function(item) {
  //   item.addEventListener("click", bmi.popupDisplay);
  //   console.log(this);
  // });
  //---------------------------------------------------------
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
  // buttonListen() {
  //   for (let i = 0; i < btn.length; i++) {
  //     btn[i].addEventListener("click", this.popupDisplay);
  //     console.log("działa");
  //     // console.log(this);
  //   }
}
