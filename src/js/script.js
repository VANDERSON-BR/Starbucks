const mobileBtn = document.querySelector(".btn-mobile");
const navLinks = document.querySelector("#nav-links");
const icon = document.querySelector(".btn-mobile i");
const header = document.getElementById("header");

window.addEventListener("scroll" , ()=>{

    if(window.scrollY > 0){
        header.style.boxShadow = "0 4px 6px rgba(0 , 0 , 0 , 0.1)"
    } else {
        header.style.boxShadow = "none"
    }
});

navLinks.querySelectorAll("a").forEach((link , index) => {
    link.addEventListener("click" , ()=>{
        navLinks.classList.remove("show");
        
        if(icon.classList.contains("fa-bars")){
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
});

mobileBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("show");
    icon.classList.toggle("fa-times");
    icon.classList.toggle("fa-bars");
});



// Scroll suave com offset personalizado

