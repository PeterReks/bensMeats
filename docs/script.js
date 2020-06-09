var hamMenu = document.getElementById("hamburger");
var toggleNav = document.getElementById("mobileNav");

  hamMenu.addEventListener("click", () =>  {
    if (toggleNav.style.display === "none") {
        toggleNav.style.display = "flex";
      } else {
        toggleNav.style.display = "none";
      }

});
