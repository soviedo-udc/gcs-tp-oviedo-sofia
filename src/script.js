
export function validarTelefono(tel) {
    return /^[0-9]+$/.test(tel);
}

if (typeof document !== "undefined") {
    const formulario = document.getElementById("formulario");
    const mensaje = document.getElementById("mensaje");
console.log("JavaScript conectado correctamente");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;

        if (!validarTelefono(telefono)) {
            mensaje.textContent = "Error: el teléfono solo debe contener números.";
            return;
        }

        mensaje.textContent = "Cliente registrado: " + nombre + " - " + telefono;
    });
}
