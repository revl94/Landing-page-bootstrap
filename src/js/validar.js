function validar() {
    // expresion, expresionName;

    var nombre = $('#nombre').val(),
        email = $('#email').val(),
        comentarios = $('#comentarios').val();

    // Máscara para validación de Email y nombre
    var expresion = /\w+@\w+\.+[a-z]/;
    var expresionName = /^[a-zA-Z'.\s]{1,40}$/;

    if (nombre === "" || email === "" || comentarios === "") {
        //alert("Todos los campos son obligatorios");
        $("span").text("Todos los campos son obligatorios.").show();
        return false;
    }
    else if(nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    } else if (!expresionName.test(nombre)) {
        alert("El nombre no debe contener numeros ni caracteres especiales");
        return false;
    } else
    if (email.length > 100) {
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