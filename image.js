const current = document.querySelector("#current");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");

imgs.addEventListener("click", (event) => {
  const clickedImgUrl = event.target.src;

  current.src = clickedImgUrl;

  current.classList.add("fade-in");

  setTimeout(() => {
    current.classList.remove("fade-in");
  }, 600);
});