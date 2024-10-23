(function () {
const formLogin= document.querySelector(".form-login");
const inputEmail = document.querySelector(".form-login input[type='email']");
const inputPass = document.querySelector(".form-login input[type='password']");
const alertaError = document.querySelector(".form-login .alerta-error");
const alertaPass = document.querySelector(".form-login .alerta-pass");

const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordRegex = /^.{4,12}$/;

const estadoValidacionCampos = {
    userEmail: false,
    userPassword: false,
};

document.addEventListener("DOMContentLoaded", () => {
    formLogin.addEventListener("submit", e => {
        e.preventDefault();
        enviarFormulario()
    });

    inputEmail.addEventListener("input", () => {
        validarCampo(emailRegex, inputEmail, "El correo solo puede tener numeros, letras, puntos y guiones")
    });

    inputPass.addEventListener("input", () => {
        validarCampo(passwordRegex, inputPass, "La contrasena debe contener de 4 a 12 digitos")
    });

})

function validarCampo(regularExpresion, campo, mensaje) {
    const validarCampo = regularExpresion.test(campo.value);

    if (validarCampo) {
        eliminarAlerta(campo.parentElement.parentElement)
        estadoValidacionCampos[campo.name] = true;
        campo.parentElement.classList.remove("error");
    }
    else {
        estadoValidacionCampos[campo.name] = false;
        mostrarAlerta(campo.parentElement.parentElement, mensaje)
        campo.parentElement.classList.add("error");
    }
}

function mostrarAlerta(referencia, mensaje) {
    eliminarAlerta(referencia)
    const alertaDiv = document.createElement("div");
    alertaDiv.classList.add("alerta")
    alertaDiv.textContent = mensaje;
    referencia.appendChild(alertaDiv)
}

function eliminarAlerta(referencia) {
    const alerta = referencia.querySelector(".alerta");

    if (alerta) {
        alerta.remove();
    }
}



//Validar envio
function enviarFormulario() {
if( estadoValidacionCampos.userEmail && 
    estadoValidacionCampos.userPassword) {
    alertaPass.classList.add("alertaPass");
    alertaError.classList.remove("alertaError");
    setTimeout(() => {
    alertaPass.classList.remove("alertaPass")  
    }, 2000);
    formLogin.reset();
}
    else {
        alertaError.classList.add("alertaError");
        alertaPass.classList.remove("alertaPass");
        setTimeout(() => {
            alertaError.classList.remove("alertaError")  
        }, 2000);
    }
};

})();