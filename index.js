

function onHamburgerMenuClick(isOpen) {
  const menuElement = document.querySelector(".hamburger-backdrop");
  if (isOpen) {
    menuElement.classList.add("show");
  } else {
    menuElement.classList.remove("show");
  }
}
