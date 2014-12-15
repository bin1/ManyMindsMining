/**
 * Created by B on 12/15/2014.
 */
var cached;

$(function() {
    $('.content').on('focusout', function(event) {
        if(cached!=this.innerHTML) {
            console.log(event);
            cached = this.innerHTML;
        }
    });
});