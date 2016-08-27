(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();


    // $( "a" ).click(function() {
    //   // alert( "Handler for .click() called." );
    //
    // });

    $('a[href*=#]').click(function(event){
      console.log(this)
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//     event.preventDefault();
});


    });
  // end of document ready
})(jQuery); // end of jQuery name space


console.log("Hi Danny")
