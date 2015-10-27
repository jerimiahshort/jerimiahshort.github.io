$(function() {
    // Hide all content
    $('#tlContent').hide();
    $('#trContent').hide();
    $('#blContent').hide();
    $('#brContent').hide();

    // Top Left Quad
    $('#tlOpen').click(function(e) {
        $('.quad.tl').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
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

    // Top Right Quad
    $('#trOpen').click(function(e) {
        $('.quad.tr').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
            function() {
                // Wait for the open animation to show the content
                if($('.quad.tr').hasClass('open')) {
                    $('#trContent').show();
                    $('#trContent').animate({opacity:1});
                    $('#trContent p').show();
                }
                $('.quad.tr').off();
            });
        $('.quad.tr').toggleClass('open');
        $('#trOpen').animate({opacity:0},10);
        $('#mainTitle').toggleClass('top');
        if(!($('.quad.tr').hasClass('open'))) {
            $('#trContent').animate({opacity:0},10);
        }
        e.preventDefault();
    });
    $('#closeTR').click(function(e) {
        $('#trContent').animate({opacity:0},10);
        $('#trContent p').hide();
        $('#trContent').hide();
        $('.quad.tr').toggleClass('open');
        $('#mainTitle').toggleClass('top');
        $('#trOpen').animate({opacity:1});
    });

    // Bottom Left Quad
    $('#blOpen').click(function(e) {
        $('.quad.bl').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
            function() {
                // Wait for the open animation to show the content
                if($('.quad.bl').hasClass('open')) {
                    $('#blContent').show();
                    $('#blContent').animate({opacity:1});
                    $('#blContent p').show();
                }
                $('.quad.bl').off();
            });
        $('.quad.bl').toggleClass('open');
        $('#blOpen').animate({opacity:0},10);
        $('#mainTitle').toggleClass('top');
        if(!($('.quad.bl').hasClass('open'))) {
            $('#blContent').animate({opacity:0},10);
        }
        e.preventDefault();
    });
    $('#closeBL').click(function(e) {
        $('#blContent').animate({opacity:0},10);
        $('#blContent p').hide();
        $('#blContent').hide();
        $('.quad.bl').toggleClass('open');
        $('#mainTitle').toggleClass('top');
        $('#blOpen').animate({opacity:1});
    });

    // Bottom Right Quad
    $('#brOpen').click(function(e) {
        $('.quad.br').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
            function() {
                // Wait for the open animation to show the content
                if($('.quad.br').hasClass('open')) {
                    $('#brContent').show();
                    $('#brContent').animate({opacity:1});
                    $('#brContent p').show();
                }
                $('.quad.br').off();
            });
        $('.quad.br').toggleClass('open');
        $('#brOpen').animate({opacity:0},10);
        $('#mainTitle').toggleClass('top');
        if(!($('.quad.br').hasClass('open'))) {
            $('#brContent').animate({opacity:0},10);
        }
        e.preventDefault();
    });
    $('#closeBR').click(function(e) {
        $('#brContent').animate({opacity:0},10);
        $('#brContent p').hide();
        $('#brContent').hide();
        $('.quad.br').toggleClass('open');
        $('#mainTitle').toggleClass('top');
        $('#brOpen').animate({opacity:1});
    });
});