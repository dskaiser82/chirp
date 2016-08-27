(function($){
  $(function(){

    // $('.button-collapse').sideNav();
    $('.parallax').parallax();


    });
  // end of document ready
})(jQuery); // end of jQuery name space




    $('#myButton').click(function() {
       $.scrollTo($('#myDiv'), 1000);
    });
// $('a[href*=#]').click(function(event){
//   console.log(this)
//
//     event.preventDefault();
//
//     $("body, html").animate({
//       scrollTop: $( $(this).attr('div') ).offset.top
//     }, 600);
//
//
// });

console.log("Hi Danny")
