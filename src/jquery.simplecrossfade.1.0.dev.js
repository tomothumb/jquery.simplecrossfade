/**
 * jQuery simplecrossfade v1.0 - 2012-11-10
 * https://github.com/tomothumb/jquery.simplecrossfade
 * (c) 2012 Tomoyuki Tsujmioto
 * license: www.opensource.org/licenses/mit-license.php
 */
;(function($) {


  $.fn.simplecrossfade = function(options) {

    var elements = this;
    // OPTION
    var opts = $.extend( {}, $.fn.simplecrossfade.defaults, options );
    $(opts.target).addClass("fadeactive");

    elements.each(function() {
      thumb = $(this);

      // Change main new image
      var changeImg = function (){
        newimg = $("<img/>")
                  .attr("src", $(this).attr("src").replace(opts.suffix_small,opts.suffix_large) )
                  .fadeIn(opts.speed_fadein).addClass("fadein");
        $(opts.target).parent().find(".fadeactive").fadeOut(opts.speed_fadeout)
                      .end()
                      .prepend(newimg)
                      ;
      } // --> End of functioo[changeImg]

      // Remove main old image
      var removeImg = function (){
        $(opts.target).parent()
                      .find(".fadeactive")
                        .remove().end()
                      .find(".fadein")
                        .removeClass(".fadein").addClass("fadeactive")
                       ;
      } // --> End of functioo[removeImg]

      // event driven
      thumb.on("mouseover", changeImg);
      thumb.on("mouseout", removeImg);

    }); // --> end of each

    // method chain
    return this;

  }; // --> End of plugin[simplecrossfade]

  // Default setting of seplugin[simplecrossfade]
  $.fn.simplecrossfade.defaults = {
    suffix_small  : "small",          // suffix of thumnail images
    suffix_large  : "large",          // suffix of thumnail images
    target        : "div#mainimg img", // jquery selector of img which you want to crossfade
    speed_fadeout : 200,              // fadeout speed which old image hides
    speed_fadein  : 500               // fadein speed when new image appears
  };

}(jQuery))