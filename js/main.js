$(document).ready(function () {
   $nav = $('.nav');
   $('.toggle-collapse').click(function () {
      $nav.toggleClass('collapse');
   })

   // Owl-carousel for blog
   $('.owl-carousel').owlCarousel({
      loop: true,
      center: true,
      autoplay: true,
      // items: 1,
      nav: true,
      dots: true,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 3
         }
      }
   });

   // click to scroll top
   $('.move-up span').click(function () {
      $('html, body').animate({
         scrollTop: 0
      }, 2000)
   });

});