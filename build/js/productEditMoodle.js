editForm = document.querySelector(".edit-product"),
closeButton = document.querySelector(".close i"),
mainWindow = document.querySelector("main"),
menuBar = document.querySelector('.menu-bar'),
linkText = document.querySelectorAll('.side-bar ul li a span'),
logoTitle = document.querySelector('.side-bar-title'),
switchText = document.querySelector('.switch p'),
switchModeToggle = document.querySelector('.switch .mode-toggle .switch-box');

editButtons.forEach((button) => {
  button.onclick = () => {
    editForm.classList.toggle("active");
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("active");
    window.scrollTo(0,0);
  }
});

closeButton.onclick = () => {
  editButtons.forEach((button) => {
    button.click();
  })
}