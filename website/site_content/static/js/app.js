/**
 * <div class="collapse-button"> is clicked.
 */
function toggleCollapseButton() {
  this.classList.toggle("change");

  /* Additionally, display remainder of contents by displaying list. */
  var navBar = document.getElementById("nav-bar");
  if (navBar.className === "") {
    navBar.className = "responsive";
  } else {
    navBar.className = "";
  }
}

$("#collapse-button").click(toggleCollapseButton);