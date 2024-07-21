const acc = document.getElementsByClassName("accordion");
let index;

function handleToggle() {
  this.classList.toggle("active");
  const panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

for (index = 0; index < acc.length; index++) {
  acc[index].addEventListener("click", handleToggle);
}
