require('./ui/bootstrap');
require('./ui/main');

/* LeftBar */

$(document).ready(function() {

    var leftblock= $('#leftblock');
    var midblock = $('#midblock').width();

    $(leftblock).resizable({
        handles: 'e',
        maxWidth: 600,
        minWidth: 230,
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

});
