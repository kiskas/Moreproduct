$(document).ready(function () {

    // stars rating
    $(function(){
        $('.rating').rating({
            fx: 'full',
            image: 'images/stars2.png',
            loader: 'images/ajax-loader.gif',
            callback: function(responce){

                this.vote_success.fadeOut(2000);
            }
        });
    });

});