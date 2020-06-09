var hamMenu = document.querySelector("#hamburger");
var hamOpen = document.querySelector("#mobileNav");

hamMenu.addEventListener("click", () => {
  if (hamMenu.style.display === "block") {
    hamOpen.style.display = "flex";
    hamMenu.style.display = "none";
  } else {
    hamMenu.style.display = "block"
  }
});

  hamOpen.addEventListener("click", () => {
    if (hamMenu.style.display === "none") {
      hamMenu.style.display = "block";
      hamOpen.style.display = "none";
    }

});
