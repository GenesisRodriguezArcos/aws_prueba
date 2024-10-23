

const buttonIniciarS = document.getElementById("sign-in");
const buttonRegis = document.getElementById("sign-up");
const contenedorFormRegister = document.querySelector(".register");
const contenedorFormLogin = document.querySelector(".login")

buttonIniciarS.addEventListener("click", e =>{
    contenedorFormRegister.classList.add("hide");
    contenedorFormLogin.classList.remove("hide");
})

buttonRegis.addEventListener("click", e =>{
    contenedorFormLogin.classList.add("hide");
    contenedorFormRegister.classList.remove("hide");
})