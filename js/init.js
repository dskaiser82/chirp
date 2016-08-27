(function($){
  $(function(){

    // $('.button-collapse').sideNav();
    $('.parallax').parallax();




    });
  // end of document ready
})(jQuery); // end of jQuery name space


$('a[href*=#]').click(function(event){
  console.log(this)
      alert($("div").scrollTop() + " px");
});

console.log("Hi Danny")
