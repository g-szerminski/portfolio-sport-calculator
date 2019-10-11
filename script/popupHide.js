function popupHide() {
  popup.classList.remove("popupDisplay");
  popupHeader.classList.remove("show");
  popupContent.classList.remove("show");
  popupClose.classList.remove("show");
  // popupHeader.textContent = "";
  // popupContent.textContent = "";
  btn.forEach(item => item.classList.remove("active"));
  darkBackground.classList.remove("popup-overlay");
}
