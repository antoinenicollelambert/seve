$('.seve-header .burger').on('click', function() {
    $('.links-mobile').addClass('open');  
})

$(document).on('click', function(event) {
    const $menu = $('.links-mobile');
    const $burger = $('.seve-header .burger');

    if ($menu.hasClass('open') &&
        !$burger.is(event.target) &&
        $burger.has(event.target).length === 0
    ) {
        $menu.removeClass('open');
    }
});