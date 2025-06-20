if (localStorage.getItem('cookie-accepted') != "true") {
    $('.cookie-consent').removeClass('d-none');
}

$('.cookie-consent .button').on('click', function() {
    localStorage.setItem('cookie-accepted', "true");
    $(this).closest('.cookie-consent').addClass('d-none');
})