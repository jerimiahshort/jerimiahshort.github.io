$(function() {
    $('#tlContent').hide();
    $('#tlOpen').click(function(e) {
        $(".quad.tl").on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
            function() {
                // Wait for the open animation to show the content
                if($('.quad.tl').hasClass('open')) {
                    $('#tlContent').show();
                    $('#tlContent').animate({opacity:1});
                    $('#tlContent p').show();
                }
                $('.quad.tl').off();
            });
        $('.quad.tl').toggleClass('open');
        $('#tlOpen').animate({opacity:0},10);
        $('#mainTitle').toggleClass('top');
        if(!($('.quad.tl').hasClass('open'))) {
            $('#tlContent').animate({opacity:0},10);
        }
        e.preventDefault();
    });
    $('#closeTL').click(function(e) {
        $('#tlContent').animate({opacity:0},10);
        $('#tlContent p').hide();
        $('#tlContent').hide();
        $('.quad.tl').toggleClass('open');
        $('#mainTitle').toggleClass('top');
        $('#tlOpen').animate({opacity:1});
    });
    $('#trOpen').click(function(e) {
        $('.quad.tr').toggleClass('open');
        $('#mainTitle').toggleClass('top');
        e.preventDefault();
    });
    $('#blOpen').click(function(e) {
        $('.quad.bl').toggleClass('open');
        $('#mainTitle').toggleClass('top');
        e.preventDefault();
    });
    $('#brOpen').click(function(e) {
        $('.quad.br').toggleClass('open');
        $('#mainTitle').toggleClass('top');
        e.preventDefault();
    });
});