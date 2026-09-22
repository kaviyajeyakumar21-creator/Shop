let menuIcon = document.getElementById("menuIcon");
let mobileMenu = document.getElementById("mobileMenu");
let icon = document.getElementById("icon");
menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  
  icon.innerText = icon.innerText == "menu"? "close" : "menu";
});
