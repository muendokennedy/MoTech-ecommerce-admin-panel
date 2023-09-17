const input1 = document.querySelector('.file1');
const input2 = document.querySelector('.file2');
const input3 = document.querySelector('.file3');
const input4 = document.querySelector('.file4');
const fileBox1 =  document.querySelector('.input-box1');
const fileBox2 =  document.querySelector('.input-box2');
const fileBox3 =  document.querySelector('.input-box3');
const fileBox4 =  document.querySelector('.input-box4');
const orignalInfoBox1 =  document.querySelector('.original-info1');
const orignalInfoBox2 =  document.querySelector('.original-info2');
const orignalInfoBox3 =  document.querySelector('.original-info3');
const orignalInfoBox4 =  document.querySelector('.original-info4');

input1.addEventListener('change', function(){
  // input1.click();
  let file = this.files[0];
  let fileReader = new FileReader();
  fileReader.onload = () => {
    let fileURL = fileReader.result;
    let imgTag = `<div class="uploaded-image">
    <img src="${fileURL}" alt="">
    <button type="button" class="remove-btn1"><i class="fa-solid fa-times"></i></button>
  </div>`;
  fileBox1.innerHTML  = imgTag;
  }
  fileReader.readAsDataURL(file);
});
input2.addEventListener('change', function(){
  // input2.click();
  let file = this.files[0];
  let fileReader = new FileReader();
  fileReader.onload = () => {
    let fileURL = fileReader.result;
    let imgTag = `<div class="uploaded-image">
    <img src="${fileURL}" alt="">
    <button type="button" class="remove-btn2"><i class="fa-solid fa-times"></i></button>
  </div>`;
  fileBox2.innerHTML  = imgTag;
  }
  fileReader.readAsDataURL(file);
});
input3.addEventListener('change', function(){
  // input3.click();
  let file = this.files[0];
  let fileReader = new FileReader();
  fileReader.onload = () => {
    let fileURL = fileReader.result;
    let imgTag = `<div class="uploaded-image">
    <img src="${fileURL}" alt="">
    <button type="button" class="remove-btn3"><i class="fa-solid fa-times"></i></button>
  </div>`;
  fileBox3.innerHTML  = imgTag;
  }
  fileReader.readAsDataURL(file);
});
input4.addEventListener('change', function(){
  // input4.click();
  let file = this.files[0];
  let fileReader = new FileReader();
  fileReader.onload = () => {
    let fileURL = fileReader.result;
    let imgTag = `<div class="uploaded-image">
    <img src="${fileURL}" alt="">
    <button type="button" class="remove-btn4"><i class="fa-solid fa-times"></i></button>
  </div>`;
  fileBox4.innerHTML  = imgTag;
  }
  fileReader.readAsDataURL(file);
});

window.onclick = (e) => {
  if(e.target.classList.contains('remove-btn1')){
    e.target.parentElement.remove();
    fileBox1.appendChild(orignalInfoBox1);
  }else if(e.target.parentElement.classList.contains('remove-btn1')){
    e.target.parentElement.parentElement.remove();
    fileBox1.appendChild(orignalInfoBox1);
  } else if(e.target.classList.contains('remove-btn2')){
    e.target.parentElement.remove();
    fileBox2.appendChild(orignalInfoBox2);
  }else if(e.target.parentElement.classList.contains('remove-btn2')){
    e.target.parentElement.parentElement.remove();
    fileBox2.appendChild(orignalInfoBox2);
  } else if(e.target.classList.contains('remove-btn3')){
    e.target.parentElement.remove();
    fileBox3.appendChild(orignalInfoBox3);
  }else if(e.target.parentElement.classList.contains('remove-btn3')){
    e.target.parentElement.parentElement.remove();
    fileBox3.appendChild(orignalInfoBox3);
  } else if(e.target.classList.contains('remove-btn4')){
    e.target.parentElement.remove();
    fileBox4.appendChild(orignalInfoBox4);
  }else if(e.target.parentElement.classList.contains('remove-btn4')){
    e.target.parentElement.parentElement.remove();
    fileBox4.appendChild(orignalInfoBox4);
  }
}


