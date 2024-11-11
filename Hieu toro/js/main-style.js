// slick slider=====================================
$(document).ready(function(){
  $('.portfolio-slider').slick({
      slidesToShow: 3,
      infinite: true,
      arrows: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",

      responsive: [{
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          centerMode: false
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: false
        }
      }],
  });  
});

// slick slider=====================================  

// backtotop
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}