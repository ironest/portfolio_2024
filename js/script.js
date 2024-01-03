const handleNavbarClick = (event, lis) => {
  for (li of lis) {
    li.classList.remove("active");
  }
  event.target.classList.add("active");

  const targetElement = event.target.innerHTML.toLowerCase();
  const targetPosition = document.getElementById(targetElement).offsetTop;

  window.scroll({
    top: targetPosition,
    left: 0,
    behavior: "smooth",
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // Navbar Configuration

  const lis = document.querySelectorAll("#navbar > li");

  for (li of lis) {
    li.addEventListener("click", (event) => handleNavbarClick(event, lis));
  }
});
