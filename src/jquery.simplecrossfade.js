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

        var makeImg = function(src){
            var $Ele = $("<img/>")
                    .attr("src", src )
                ;
            return $Ele;
        };

        var makeAnchor = function($imgEle){

            var $Ele = $("<a></a>")
                    .attr("href", $imgEle.attr('src') )
                    .append($imgEle)
                ;
            return $Ele;
        };

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
                $imgEle = makeImg( $thumbImgEle.attr("src").replace(opts.suffix_small,opts.suffix_large) );
                if(opts.link===true){
                    $imgEle = makeAnchor($imgEle);
                }
                $imgEle.addClass("fadein");

                $(opts.target)
                    .find(".fadeactive").fadeOut(opts.speed_fadeout)
                    .end()
                    .prepend($imgEle)
                ;

                opts.callback();
            };

            /**
             * Remove main old image
             */
            var removeImg = function (){

                $(opts.target)
                    .find(".fadeactive")
                    .remove().end()
                    .find(".fadein")
                    .removeClass("fadein").addClass("fadeactive")
                ;
            };

            // event driven
            thumb.on("mouseover", changeImg);
            thumb.on("mouseout", removeImg);

        }); // --> end of each

        $(window).on("load", function(){
            var targetSelector = ( opts.link === true ) ? "a" : "img" ;
            $(targetSelector, opts.target).addClass("fadeactive")
                .end()
                .css({
                    'height': $('img', opts.target).height() + ( opts.padding * 2 )
                })
            ;
        });


        // method chain
        return this;

    }; // --> End of plugin[simplecrossfade]

    // Default setting of seplugin[simplecrossfade]
    $.fn.simplecrossfade.defaults = {
        suffix_small  : "small",       // (String) suffix of thumnail images
        suffix_large  : "large",       // (String) suffix of thumnail images
        target        : "div#mainimg", // (String) jquery selector of img which you want to crossfade
        speed_fadeout : 500,           // (Number) fadeout speed which old image hides
        speed_fadein  : 300,           // (Number) fadein speed when new image appears
        padding       : 0,             // (Number) padding of mainimage area
        link          : false,         // (Boolean) Main image with link
        callback      : function(){}   // (function) Define Callback function
    };

}(jQuery));
