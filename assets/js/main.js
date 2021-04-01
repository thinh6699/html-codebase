// Slick carousel
$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 1,
  centerMode: true,
  autoplay: true,
  dots: true,
  });
});

// Tim chieu cao nhat cua mot div
// $(document).ready(function() {
//   var tallest = 0;
//   $(".card-img").each(function() {
//     var currentheight = $(this).height();
//     console.log(currentheight);
//     if (currentheight > tallest) {
//       tallest = $(this).height();
//       console.log("tallest =" + tallest);
//     }
//   });
//   $(".card-img").height(tallest);
// });

var navlinks = document.querySelectorAll(".nav-link");
console.log(navlinks);
for (i = 0; i < navlinks.length; i++) {
  var navlink = navlinks[i];
  console.log(navlink);
  }
  navlink.onclick = myFunction;
  function myFunction() {
    console.log("xin chao");
  }
