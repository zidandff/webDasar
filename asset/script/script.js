const toggleBtn = document.querySelector('.toggle');
const mobileMenu = document.querySelector('nav ul');
const close = document.querySelector(".close");
const switchBtn = document.querySelector(".swicth")

toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.add('slide')
})

close.addEventListener('click', ()=> {
    mobileMenu.classList.remove("slide")
})

// switchBtn.addEventListener("click", ()=> {
//     if()
// })