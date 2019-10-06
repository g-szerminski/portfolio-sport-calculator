const btn = document.querySelectorAll(".btn");
const activeCalc = document.querySelector(".activeCalc");
const h2 = document.querySelector(".h2");
const visuallyhidden = document.querySelector(".visuallyhidden");
const close = document.querySelector(".close");
let content = document.querySelector(".content");
// const button = document.querySelector("button");
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
      activeCalc.style.width = 55 + "%";
      activeCalc.style.height = 40 + "%";
      close.style.visibility = "visible";
      visuallyhidden.classList.add("popup-overlay");
      content.style.visibility = "visible";
      setTimeout(() => (h2.textContent = item.textContent), 200);
      // if (item.classList.contains("active"))
      close.addEventListener("click", function() {
        activeCalc.style.width = 0;
        activeCalc.style.height = 0;
        close.style.visibility = "hidden";
        h2.textContent = "";
        content.style.visibility = "hidden";
        item.classList.remove("active");
        visuallyhidden.classList.remove("popup-overlay");
      });
    }
  };
  item.addEventListener("click", changeClassActive);
});

class Calculator {
  constructor(name, about, ...data) {
    this.name = name;
    this.about = about;
    this.data = data;
  }
  showAbout(text) {
    console.log("pokazano about");
    content.textContent = this.about;
    // this.about = content.textContent;
    // this.textContent = content;
    // this.content = content;
    // return content;
    // this.about.textContent = text;
  }
  pushData(addData) {
    this.data.push(addData);
  }
}

const bmi = new Calculator("bmi", "to jest ten content", "0000");
bmi.showAbout();
