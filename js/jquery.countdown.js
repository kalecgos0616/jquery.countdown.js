(function($) {
    $.fn.countdown = function(options) {
        var settings = $.extend({
            seconds: "10",
            template: "#countdown_message"
        }, options);

        String.prototype.format = function(opt) {
            return this.replace(/{(\w+)}/g, function(match, number) {
                return typeof opt[number] !== 'undefined' ? opt[number] : match;
            });
        };

        this.each(function() {
            var seconds = settings.seconds,
                elem = this,
                newobj;
            updateCountdown();

            function updateCountdown() {
                seconds--;
                if (seconds > 0) {
                    var cardTemplate = $(settings.template).html();
                    cardTemplate = "<div>"+cardTemplate+"</div>";
                    var template = cardTemplate.format({
                        "seconds": seconds
                    });
                    if (newobj) {
                        newobj = $( template ).replaceAll( newobj );
                    } else{
                        newobj = $( template ).replaceAll( elem );
                    };
                    
                    setTimeout(function() {
                        updateCountdown();
                    }, 1000);
                } else {
                    console.log('bear');
                    newobj = $( elem ).replaceAll( newobj );
                }
            }
        });

        

        return this;
    };
})(jQuery);
