# z-tabs
Tabs on native JS

## install
add  
```html
<!--css-->
<link rel="stylesheet" href="css/z-tabs.css">
<!--or-->
<link rel="stylesheet" href="css/z-tabs.min.css">

<!--js-->
<script src="js/z-tabs.js"></script>
<!--or-->
<script src="js/z-tabs.min.js"></script>
```
add class
```html
<div class="container z-tabs-container" id="about">
    <div class=" z-tabs-wrapper">
        <div class="z-tab">btn</div>
        <div class="z-tab">btn</div>
        <div class="z-tab">btn</div>
    </div>
    <div class="z-tabs-content">
        ....
    </div>
</div>
```
and init in js 
```js
document.addEventListener("DOMContentLoaded", function() {
  new zTabs('.z-tabs-container');
})

```