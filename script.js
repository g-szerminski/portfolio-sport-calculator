const btn = document.querySelectorAll(".btn");
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
    }
  };
  item.addEventListener("click", changeClassActive);
});
