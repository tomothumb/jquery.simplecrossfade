# jquery.simplecrossfade.js

This is a small jquery plugin of making small image garally. 
When you mouseover each thumbnail images, main image will be changed.

```

//example

  $(function() {
   $("#p_subimglist img").simplecrossfade({
     target: "#p_mainimg img",
     suffix_small: "_S",
     suffix_large: "_L",
   });
 });

```

//example2
//(option setting for wordpress)

  suffix_small: "-150x150",
  suffix_large: "",

---

start
<link rel="stylesheet" type="text/css" media="all" href="jquery.simplecrossfade.css" />
<script type="text/javascript" src="jquery.simplecrossfade.1.0.min.js"></script>
<script type="text/javascript">
(function($) {
  jQuery.fn.exists = function(){return this.length>0;}
  $(function(){
    if($('#thumblist img').exists()){
      $("#thumblist img").simplecrossfade({
        target        : "#targetparent img",
        suffix_small  : "_S",
        suffix_large  : "_L",
        speed_fadeout : 500,
        speed_fadein  : 500
      });
    }
  });
}(jQuery))
</script>

```