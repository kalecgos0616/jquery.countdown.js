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
            seconds: 15,	// waiting 15 sec
            template: "#button_message"
        });
    });
    $(document).on('click', '#link', function() {
        $("#link").countdown({
            seconds: 10,	// waiting 10 sec
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

####reference: 
***
http://stackoverflow.com/questions/3432969/lightweight-jquery-countdown
http://learn.jquery.com/plugins/basic-plugin-creation/
http://stackoverflow.com/questions/6118778/jquery-replacewith-find-new-element
http://stackoverflow.com/questions/14062368/new-recommended-jquery-templates
