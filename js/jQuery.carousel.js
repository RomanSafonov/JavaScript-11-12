(function ($){


    $.fn.carousel = function(options) {

        var defaults = {
            sizeImg: 420
        };

        var setting = $.extend(defaults, options);

        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');
        var currentLeftValue = 0;

        console.log(setting);
        //imgSize.css('max-width', options.size + 'px' );

        leftUIEl.click(function() {
            currentLeftValue += setting.sizeImg;
            currentLeftValue > 0 ? currentLeftValue = 0 : currentLeftValue;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
            console.log('currentLeftValue = '+currentLeftValue);
        });

        rightUIEl.click(function() {
            currentLeftValue -= setting.sizeImg;
            currentLeftValue > -3780 ? currentLeftValue : currentLeftValue = -3780;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
            console.log('currentLeftValue = '+currentLeftValue);
        });

    }
})(jQuery);

