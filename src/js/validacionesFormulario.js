$(document).ready(function() {
    $("#alertNo").hide();
    $("#alertNoLength").hide();
    $("#alertNoEspecial").hide();
    $("#alertNoCorreo").hide();
    $("#alertNoComentario").hide();
    $("#form1").submit(function(e) {
        //e.preventDefault();
        // Máscara para validación de Email y nombre
        var expresion = /\w+@\w+\.+[a-z]/;
        var expresionName = /^[a-zA-Z'.\s]{1,40}$/;

        var nombre = $('#nombre').val(),
            email = $('#email').val(),
            comentarios = $('#comentarios').val();
        if (nombre === "" || email === "" || comentarios === "") {
            $("#alertNo").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertNo").slideUp(500);
            });
            return false;
        } else if (nombre.length > 30) {
            $("#alertNoLength").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertNoLength").slideUp(500);
            });
            return false;
        } else if (!expresionName.test(nombre)) {
            $("#alertNoEspecial").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertNoEspecial").slideUp(500);
            });
            return false;
        } else if (!expresion.test(email)) {
            $("#alertNoCorreo").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertNoCorreo").slideUp(500);
            });
            return false;
        } else if (comentarios.length > 1024) {
            $("#alertNoComentario").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertNoComentario").slideUp(500);
            });
            return false;
        }
    });
});