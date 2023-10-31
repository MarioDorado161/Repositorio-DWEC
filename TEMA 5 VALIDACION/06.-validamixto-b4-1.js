document.addEventListener("DOMContentLoaded", function(evento){
    const usuario = document.getElementById("uname");
    const clave = document.getElementById("pwd");
    const form = document.getElementById("form");

    form.addEventListener("submit", validarFormulario);
    
    usuario.addEventListener("keyup", function(e) {
        console.log("ha cambiado");
        if (this.value) {
            this.setCustomValidity("");
        } else {
            this.setCustomValidity("Campo vacío");
        }
    });

    clave.addEventListener("keyup", function(e) {
        console.log("ha cambiado");
        if (this.value.length >= 6) {
            this.setCustomValidity(" ");
        } else {
            this.setCustomValidity("Menos de 6 caracteres");
        }
    });

    function validarFormulario(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        let valido = true;

        if (usuario.value) {
            usuario.setCustomValidity("Campo vacío");
            valido = false;
        } else {
            usuario.setCustomValidity(" ");
        }

        if (clave.value.length < 6) {
            clave.setCustomValidity("Campo vacío");
            valido = false;
        } else {
            clave.setCustomValidity(" ");
        }

        this.classList.add("was-validated");
        if (valido) {
            this.submit();
        } else {
            usuario.setCustomValidity(" ");
        }
    }
});
