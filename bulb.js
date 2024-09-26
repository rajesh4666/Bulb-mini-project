const switchBtn = document.querySelector(".swtich");
const onbtn = document.querySelector('.container');

switchBtn.addEventListener("click", () => {
    onbtn.classList.toggle("on");  
});