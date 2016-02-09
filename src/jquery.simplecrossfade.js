/**
 * jQuery simplecrossfade v1.0.1
 * https://github.com/tomothumb/jquery.simplecrossfade
 * (c) 2016 Tomoyuki Tsujmioto
 * license: www.opensource.org/licenses/mit-license.php
 */
;(function($) {

    $.fn.simplecrossfade = function(options) {

        var elements = this;
        // OPTION
        var opts = $.extend( {}, $.fn.simplecrossfade.defaults, options );

        elements.each(function() {
            thumb = $(this);

            /**
             * Change main new image
             */
            var changeImg = function (){
                $(this)
                    .addClass("active")
                    .siblings().removeClass("active")
                ;

                var $thumbImgEle;
                if( $(this).attr("src") ){
                    $thumbImgEle = $(this);
                } else {
                    $thumbImgEle = $(this).find("img").first();
                }
                newimg = $("<img/>")
                    .attr("src", $thumbImgEle.attr("src").replace(opts.suffix_small,opts.suffix_large) )
                    .fadeIn(opts.speed_fadein).addClass("fadein");
                $(opts.target).parent().find(".fadeactive").fadeOut(opts.speed_fadeout)
                    .end()
                    .prepend(newimg)
                    ;
            };

            /**
             * Remove main old image
             */
            var removeImg = function (){
                $(opts.target).parent()
                    .find(".fadeactive")
                    .remove().end()
                    .find(".fadein")
                    .removeClass(".fadein").addClass("fadeactive")
                    ;
            };

            // event driven
            thumb.on("mouseover", changeImg);
            thumb.on("mouseout", removeImg);

        }); // --> end of each

        $(window).on("load", function(){
            $(opts.target).addClass("fadeactive")
                .css({
                    'margin': 0
                })
                .parent()
                .css({
                    'height': $(opts.target).height()
                })
                ;
        });


        // method chain
        return this;

    }; // --> End of plugin[simplecrossfade]

    // Default setting of seplugin[simplecrossfade]
    $.fn.simplecrossfade.defaults = {
        suffix_small  : "small",          // suffix of thumnail images
        suffix_large  : "large",          // suffix of thumnail images
        target        : "div#mainimg img", // jquery selector of img which you want to crossfade
        speed_fadeout : 500,              // fadeout speed which old image hides
        speed_fadein  : 300               // fadein speed when new image appears
    };

}(jQuery));
