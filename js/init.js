(function($){
  $(function(){

    // $('.button-collapse').sideNav();
    $('.parallax').parallax();


    });
  // end of document ready
})(jQuery); // end of jQuery name space


      //myButton is the id
    $('#myContact').click(function() {
      //myDiv is the href
       $.scrollTo($('#myDiv'), 1000);
    });

      //myButton is the id
    $('#myButton').click(function() {
      //myDiv is the href
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
