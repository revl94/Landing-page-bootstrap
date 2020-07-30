$(document).ready(function() {
    $('.card-header').click(function() {
        $(this).find('i').toggleClass('fas fa-plus fas fa-minus');
    });
});