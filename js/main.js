const menuIcon = document.querySelector(".menu-icon");
const menu = document.getElementById("menu");
const header = document.getElementById("header");
const topup = document.querySelector(".topscroll");
let navLinks = document.querySelectorAll("ul li a");
let sections = document.querySelectorAll("section");
let activeNav = document.querySelector(".active-nav");


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    menuIcon.classList.remove("fa-times");
    menu.style.right = "-110%";
}



menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-times");
    if(menu.style.right != "0%"){
        menu.style.right = "0%";
    }else{
        menu.style.right = "-110%";
    }
});

window.addEventListener("scroll", () => {
    if(window.scrollY >= 100){
        header.classList.add('sticky');
        topup.style.display = "inline";
    }
    else{
        header.classList.remove('sticky');
        topup.style.display = "none";
    }
});

topup.addEventListener("click", ()=> {
    window.scrollTo(0, 0);
});



