$(document).ready(function(){
    $('body').append('<span class="viewport"></span>');
   
    $('.viewport').on('touch click', function(){
      $(this).hide();
    });

    $(window).on('load resize', function(){
         if ($(window).width() <= 899){
             $('body').removeClass('desktop').addClass('mobile');
         } else {
             $('body').removeClass('mobile').addClass('desktop');
         }
     });

     $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            // do stuff
        } else {
            // do other stuff
        }
    });

    $("").on('touch click', function(){
        var $this = $("");
        if ($this.hasClass("inactive")) {
            // do stuff
        }
        else {
            // do other stuff
        }
    });

 });
 