/**
 * <div class="collapse-button"> is clicked.
 */
function toggleCollapseButton(collapseButton) {
  collapseButton.classList.toggle("change");

  /* Additionally, display remainder of contents by displaying list. */
  var navBar = document.getElementById("nav-bar");
  if (navBar.className === "") {
    navBar.className = "responsive";
  } else {
    navBar.className = "";
  }
}