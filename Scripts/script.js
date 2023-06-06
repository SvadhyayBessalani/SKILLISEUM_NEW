// custom js

AOS.init({
    duration: 1000,
    delay: 200,
    offset: 100,
});

$(document).ready(function () {
    $("#togglebars").click(function(){
        $(".wrapper").addClass("intro");
        
    });
      $("#closebar,.overlay ").click(function(){
          $(".wrapper").removeClass("intro");
          $(".overlay").removeClass("intro");
    });

});


$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    dots:false,
    autoplay: true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });



$('.brand-carouseltwo').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:3
      }
    }
  });


// $('.Instructors').owlCarousel({
//     loop:true,
//     margin:10,
//     autoplay:true,
//     dots:false,
//     arrow:false,
//     nav: true,
//     autoplay: true,
//     autoplayHoverPause: true,
//     responsive:{
//       0:{
//         items:1
//       },
//       600:{
//         items:3
//       },
//       1000:{
//         items:3
//       }
//     }
//   });


jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  items:1,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});


 
 function accordions(className) {
    console.log(className);
    $('#accordionExample1 .accordion-collapse').removeClass("show");
    $(`#${className}`).hasClass("show") ? $(`#${className}`).removeClass("show") : $(`#${className}`).addClass("show");
  }
   


    // $(function(){
    //     $(".accordian h3").click(function(e){
    //       $('accordian h3').find('.fa.fa-plus open').toggleClass('open');
    //       $($(e.target).find('.fa.fa-plus').toggleClass('open'));
    //     $(".accordian ul ul").slideUp();
    //       if ($(this).next().is(":hidden")){
    //       $(this).next().slideDown();
    //       }
    //     });
        
      
    //   });



// ================= progress bar =================

jQuery('.is-progress-bar > span').each(function() {
    let progressBar = jQuery(this);
    let width = jQuery(this).data('percent');
    progressBar.css({
        'transition': 'width 2s'
    });
    progressBar.css("width", "20%");
    setTimeout(function() {
        // progressBar.appear(function() {
        //     progressBar.css('width', width + '%');
        // });
    }, 500);
});



