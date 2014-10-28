jquery.countdown.js
===================

###Description: countdown a little seconds after clicking button or link

###Useage: 

####HTML:

```html
<a href="#" id="link">link</a>
<input type="button" id="button" value="button" />
```

####javascript:

```js
$(function() {
    $(document).on('click', '#button', function() {
        $("#button").countdown({
            seconds: 15,
            template: "#button_message"
        });
    });
    $(document).on('click', '#link', function() {
        $("#link").countdown({
            seconds: 10,
            template: "#link_message"
        });
    });

});
</script>
<script type="text/template" id="button_message">
    <b>{seconds}</b>秒后重新发送
</script>
<script type="text/template" id="link_message">
    You have <i>{seconds}</i> seconds remaining
</script>
```

######note: &lt;script type="text/template" id="id"&gt; is important that replace DOM during countdown. You can customize your HTML structure there.

