$(function () {
    $('nav > div > ul > li > h3').addClass('submenu-closed');
    $('nav > div > ul > li > h3').off('click').click(function() {
        if ($(this).hasClass('submenu-open')) {
            $('nav > div > ul > li > h3').addClass('submenu-closed').removeClass('submenu-open');            
        } else {
            $('nav > div > ul > li > h3').addClass('submenu-closed').removeClass('submenu-open');
            $(this).removeClass('submenu-closed').addClass('submenu-open');
        }
    });
});
