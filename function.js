/*var loader = document.getElementById("loader");

window.addEventListener("load", function () {
    setTimeout(function () {
        loader.style.display = "none";
    }, 1500);
});
*/

function nuestraOds() {
    location.href = "NuestraOds.html"
}
function principal() {
    location.href = "index.html"
}

function odsPrincipal() {
    location.href = "odsPrincipal.html"
}

function registro (){
    location.href ="form.html";
}

function contacto (){
    location.href = "contactanos.html";
}



const carruselSliders = document.querySelector(".carrusel")
const carruselItems = document.querySelectorAll(".carrusel-item")

let contador = 0;
const size = carruselItems[0].clientWidth;

carruselSliders.style.transform = "translateX (" + (-size * contador) + "px)";

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

nextButton.addEventListener("click", ()=>{
    if (contador >= carruselItems.length - 1 ) 
        return;
    carruselSliders.style.transition = "transform 0.4s ease-in-out";
    contador++;
    carruselSliders.style.transform ="translateX(" + (-size * contador) +"px)";
});

prevButton.addEventListener("click", ()=>{
    if (contador <= 0) 
        return;
    carruselSliders.style.transition = "transform 0.4s ease-in-out";
    contador--;
    carruselSliders.style.transform ="translateX(" + (-size * contador) +"px)";
});


const staticNav = document.querySelector("nav-var");
    window.addEventListener("scroll", function(){
        staticNav.classList.toggle("sticky", this.window.scrollY >60)
    });






