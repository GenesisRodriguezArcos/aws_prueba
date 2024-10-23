const formRegistro = document.querySelector(".registro-form");
const inputName = document.querySelector(".registro-form input[type='text']");
const inputLastName = document.querySelector(".last-name");
const inputEmail = document.querySelector(".registro-form input[type='email']");
const inputPass = document.querySelector(".registro-form input[type='password']");
const alertaError = document.querySelector(".alerta-error");
const alertaPass = document.querySelector(".alerta-pass");

const userNameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü'-]{3,}(?: [A-Za-zÁÉÍÓÚáéíóúÑñÜü'-]+)*$/;
const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordRegex = /^.{4,12}$/;

const estadoValidacionCampos = {
    userName: false,
    userLastName: false,
    userEmail: false,
    userPassword: false,
};

document.addEventListener("DOMContentLoaded", () => {
    formRegistro.addEventListener("submit", e => {
        e.preventDefault();
        enviarFormulario()
    });

    inputName.addEventListener("input", () => {
        validarCampo(userNameRegex, inputName, "El usuario debe tener como minimo 3 digitos, solo puede contener letras y guiones")
    });

    inputLastName.addEventListener("input", () => {
        validarCampo(userNameRegex, inputLastName, "El usuario debe tener como minimo 3 digitos, solo puede contener letras y guiones")
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
if(estadoValidacionCampos.userName &&
    estadoValidacionCampos.userLastName && 
    estadoValidacionCampos.userEmail && 
    estadoValidacionCampos.userPassword) {
    alertaPass.classList.add("alertaPass");
    alertaError.classList.remove("alertaError");
    setTimeout(() => {
      alertaPass.classList.remove("alertaPass")  
    }, 2000);
    formRegistro.reset();
}
    else {
        alertaError.classList.add("alertaError");
        alertaPass.classList.remove("alerPass");
        setTimeout(() => {
            alertaError.classList.remove("alertaError")  
        }, 2000);
    }
};
