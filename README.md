# jquery.simplecrossfade.js

This is a small jquery plugin of making small image garally. 
When you mouseover each thumbnail images, main image will be changed.

## Options
```
// Default options
{
    suffix_small  : "small",        // (String) suffix of thumnail images
    suffix_large  : "large",        // (String) suffix of thumnail images
    target        : "div#mainimg", // (String) jquery selector of img which you want to crossfade
    speed_fadeout : 500,            // (Number) fadeout speed which old image hides
    speed_fadein  : 300,             // (Number) fadein speed when new image appears
    padding       : 0,                // (Number) padding of mainimage area
    link          : false            // (Boolean) Main image with link

}
```

## Examples
```
// Example 1
{
  target      : "#p_mainimg img",
  suffix_small: "_S",
  suffix_large: "_L",
}


// Example 2 (same image)
{
...
suffix_small: "",
suffix_large: "",
...
}


// Example 3 (wordpress thumanile)
{
...
suffix_small: "-150x150",
suffix_large: "",
...
}
```
---


```
<link rel="stylesheet" type="text/css" media="all" href="jquery.simplecrossfade.css" />
<script type="text/javascript" src="jquery.simplecrossfade.js"></script>
<script type="text/javascript">
(function($) {
$(function(){
  $("#thumblist img").simplecrossfade({
    target        : "#targetparent img",
    suffix_small  : "_S",
    suffix_large  : "_L",
    speed_fadeout : 500,
    speed_fadein  : 500,
    padding       : 20,
    link          : true
  });
});
</script>

```