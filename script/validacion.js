export function validar(input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
        input.style.border = "none";
        input.parentElement.querySelector(".contacto__input--error").innerHTML = "";
    }else{
        input.style.border = "1px solid red";
        input.parentElement.querySelector(".contacto__input--error").innerHTML = 
        mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

const mensajesDeError = {
    nombre:{
        valueMissing: "Este campo no puede estar vacio",
    },
    email:{
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido",
    },
    asunto:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Al menos 6 a 40 caracteres",
    },
    mensaje:{
        valueMissing: "Este campo no puede estar vacio",
    }
}

function mostrarMensajeDeError(tipoDeInput, input){
    var mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}