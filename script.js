const navbar = document.getElementById("navbar");
const sectionTwo = document.getElementById("firsthero");
const button = document.getElementById("getstarted")

// Funzione che rileva la posizione della sezione
function changeNavbarColor() {
    const sectionTop = sectionTwo.getBoundingClientRect().top;

    if (sectionTop <= 0) {
        navbar.classList.add("navbarscroll")
        button.classList.add("getscrolled");
       
    } else {
        navbar.classList.remove("navbarscroll")
        button.classList.remove("getscrolled"); 
    }
}


window.addEventListener("scroll", changeNavbarColor);