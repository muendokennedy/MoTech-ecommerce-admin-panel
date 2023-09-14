const editForm = document.querySelector(".edit-product"),
closeButton = document.querySelector(".close i"),
editButtons = document.querySelectorAll(".edit-button");

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