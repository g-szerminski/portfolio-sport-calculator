function popupHide() {
  popup.classList.remove("popupDisplay");
  popupHeader.classList.remove("show");
  popupContent.classList.remove("show");
  popupClose.classList.remove("show");
  // popupHeader.textContent = "";
  // popupContent.textContent = "";
  btn.forEach(item => item.classList.remove("active"));
  // btn.classList.remove("active");
  darkBackground.classList.remove("popup-overlay");
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
  console.log(this.data);
  console.log(this);
  
}

// const popupShow = () => {
//   popup.classList.add("popupDisplay");
//   popupHeader.classList.add("show");
//   popupContent.classList.add("show");
//   popupClose.classList.add("show");
//   darkBackground.classList.add("popup-overlay");
//   popupHeader.textContent = this.name;
//   popupContent.textContent = this.about;
//   popupClose.addEventListener("click", popupHide);
//   darkBackground.addEventListener("click", popupHide);
//   console.log(this);
//   return this.name;
// };
function dodaj(liczba1, liczba2) {
  var wynik = liczba1 + liczba2;
  return wynik;
  // return liczba1 + liczba2;
}
const wynik = dodaj(4, 5)