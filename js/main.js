const carousel_responsive = {
   0: {
      items: 1
   },
   320: {
      items: 1
   },
   560: {
      items: 2
   },
   960: {
      items: 3
   }
}

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
      responsive: carousel_responsive
   });

   // click to scroll top
   $('.move-up span').click(function () {
      $('html, body').animate({
         scrollTop: 0
      }, 2000)
   });

});