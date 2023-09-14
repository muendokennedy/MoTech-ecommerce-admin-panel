const sidebar = document.querySelector('.side-bar'),
mainContent = document.querySelector('.main-content'),
header = document.querySelector('.main-header'),
editButtons = document.querySelectorAll(".edit-button"),
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

let isSidebarHidden = false;

menuBar.onclick = () => {
  // sidebar.classList.toggle('show');

  if(isSidebarHidden === false){

    sidebar.style.width = '5rem';
    mainContent.style.width = 'calc(100% - 5rem)';
    header.style.width = 'calc(100% - 5rem)';
    header.style.left = '5rem';
    mainContent.style.marginLeft = '5rem';

    linkText.forEach((link) => {
      link.style.display = 'none';
    });

    logoTitle.textContent = "MT";
    isSidebarHidden = true;

  } else {
    sidebar.style.width = '15rem';
    mainContent.style.width = 'calc(100% - 15rem)';
    header.style.width = 'calc(100% - 15rem)';
    header.style.left = '15rem';
    mainContent.style.marginLeft = '15rem';

    linkText.forEach((link) => {
      link.style.display = 'initial';
    });

    logoTitle.textContent = "moTech";
    isSidebarHidden = false;
  }

}