require('./ui/main');

/* LeftBar */

$(document).ready(function() {

    var leftblock= $('#leftblock');
    var midblock = $('#midblock').width();

    $(leftblock).resizable({
        handles: 'e',
        maxWidth: 600,
        minWidth: 300,
        resize: function(event, ui){
            var currentWidth = ui.size.width;
            var padding = 12;
            $(this).width(currentWidth);
            $('#midblock').width(midblock - currentWidth - padding);
        },
        stop: function (event, ui) {
            var lbwidth = ui.size.width;
            var mbwidth = $('#midblock').width();
            $.cookie('lbw', lbwidth);
            $.cookie('mbw', mbwidth);
        }
    });

    $('#leftblock').width($.cookie('lbw'));
    $('#midblock').width($.cookie('mbw'));

    $('#leftblock').on('resize', function () {
        if ($('#leftblock').width() < 475){
            $('.leftmenu-info').hide();
        } else {
            $('.leftmenu-info').show();
        }
    })

    $(window).on('load', function () {
        if ($('#leftblock').width() < 475){
            $('.leftmenu-info').hide();
        } else {
            $('.leftmenu-info').show();
        }
    })

});
