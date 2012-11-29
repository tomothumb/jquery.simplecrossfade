# jquery.makeanime.js

jquery plugin for simple image garally
when you mouseover thumbnail images, main image will change.

@example
  $(function() {
   $("#p_subimglist img").simplecrossfade({
     target: "#p_mainimg img",
     suffix_small: "-80x80",
     suffix_large: "",
   });
 });

@example2
(option setting for wordpress)
  suffix_small: "-150x150",
  suffix_large: "",
