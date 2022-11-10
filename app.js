// Déclaration des variables et pointeur vers les classes
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Ajout d'un addEventListener on click qui rajoutera la classe active au toggle. On ouvre la fenêtre.
hamburger.addEventListener("click" , () => { 
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// Pour chaque lien, à chaque fois que l'on clique, on enlève la classe active. On ferme la fenêtre.
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>
{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



document.addEventListener('scroll', () => 
{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})


function changeBg() {
    var navbar = document.getElementById('navbar')
    var scrollValue = window.scrollY;
    if(scrollValue < 380){
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor')

    }

}

window.addEventListener('scroll', changeBg);