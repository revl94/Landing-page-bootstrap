$(document).ready(function() {
    $('.collapse.show').each(function() {
        $(this).prev('.card-header').find('.fas').addClass('fa-minus').removeClass('fa-plus');
    });
    $('.collapse').on('show.bs.collapse', function() {
        $(this).prev('.card-header').find('.fas').removeClass('fa-plus').addClass('fa-minus');

    }).on('hide.bs.collapse', function() {
        $(this).prev('.card-header').find('.fas').removeClass('fa-minus').addClass('fa-plus');
    })
});