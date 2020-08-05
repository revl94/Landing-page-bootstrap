$(document).ready(function() {
    $("#alertNo").hide();
    $("#alertNoLength").hide();
    $("#alertNoSpecial").hide();
    $("#alertNoEmail").hide();
    $("#alertNoCommentary").hide();
    $("#form1").submit(function(e) {
        //e.preventDefault();
        // Máscara para validación de Email y nombre
        var expression = /\w+@\w+\.+[a-z]/;
        var expressionName = /^[a-zA-Z'.\s]{1,40}$/;

        var name = $('#name').val(),
            email = $('#email').val(),
            comments = $('#comments').val();
        if (name === "" || email === "" || comments === "") {
            $("#alertNo").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertNo").slideUp(500);
            });
            return false;
        } else if (name.length > 30) {
            $("#alertNoLength").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertNoLength").slideUp(500);
            });
            return false;
        } else if (!expressionName.test(name)) {
            $("#alertNoSpecial").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertNoSpecial").slideUp(500);
            });
            return false;
        } else if (!expression.test(email)) {
            $("#alertNoEmail").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertNoEmail").slideUp(500);
            });
            return false;
        } else if (comments.length > 1024) {
            $("#alertNoCommentary").fadeTo(2000, 500).slideUp(500, function() {
                $("#alertNoCommentary").slideUp(500);
            });
            return false;
        }
    });
});