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
 });
 