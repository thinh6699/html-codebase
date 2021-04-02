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


// $('#myTab a').on('click', function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })
