function validar() {
    var nombre, email, comentarios, expresion, expresionName;

    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    comentarios = document.getElementById("comentarios").value;

    // Máscara para validación de Email y nombre
    expresion = /\w+@\w+\.+[a-z]/;
    expresionName = /\[a-z]/;

    if (nombre === "" || email === "" || comentarios === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else
    if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    } else if (!expresionName.test(nombre)) {
        alert("El nombre no debe contener numeros ni caracteres especiales");
        return false;
    } else if (email.length > 100) {
        alert("El correo es muy largo");
        return false;
    } else if (!expresion.test(email)) {
        alert("El correo no es valido");
        return false;

    } else if (comentarios.length > 1024) {
        alert("El nombre es muy largo");
        return false;
    }

}