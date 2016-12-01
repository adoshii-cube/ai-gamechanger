$(document).ready(function () {
    var nav = $('a');
    if (nav.length) {
        $('a').on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;

                $('.mdl-layout').animate({
                    scrollTop: $(hash).offset().top
                }, 1800, function () {
                    window.location.hash = hash;
                });
            }
        });
    }

    var inputFieldCheck = $("input").filter(function () {
        return $.trim($(this).val()).length === 0;
    }).length === 0;

    if (!inputFieldCheck) {
        $('#show-dialog').prop('disabled', true);
    } else {
        $('#show-dialog').prop('disabled', false);
        $('#show-dialog').addClass('mdl-color--green-600');
        $('#show-dialog').addClass('mdl-color-text--white');
    }
//    (function(){
    $('input').keyup(function () {
        var empty = false;
        $('input').each(function () {
            if ($(this).val() === '') {
                empty = true;
            }
        });
        if (empty) {
            $('#show-dialog').prop('disabled', true);
            $('#show-dialog').removeClass('mdl-color--green-600');
            $('#show-dialog').removeClass('mdl-color-text--white');
        } else {
            $('#show-dialog').prop('disabled', false);
            $('#show-dialog').addClass('mdl-color--green-600');
            $('#show-dialog').addClass('mdl-color-text--white');
        }
    });
//    });
});