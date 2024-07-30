$(function () {
    $('.nav-btn').on('click', function () {
        $(this).toggleClass('open');
    });
});

$(window).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("#header").addClass('glass-effect');
        } else {
            $("#header").removeClass("glass-effect");
        }
    })

    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },3000);
    });

    let elem = $('#navbar-toggler');
    if (elem.length) {
        $('#navbar-toggler').on('click', function() {
            console.log('asdsdasd');
            var customNavbarCollapse = $('#navbarSupportedContent');
            if (customNavbarCollapse.hasClass('show')) {
                customNavbarCollapse.removeClass('show');
            } else {
                customNavbarCollapse.addClass('show');
            }
        });
    }
});