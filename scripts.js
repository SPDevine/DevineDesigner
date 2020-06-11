$( "#clickme" ).click(function() {
  $( "#herobox2").fadeToggle("fast", function() {
  });
  $( "#clickme").fadeToggle("fast", function() {
  });
//Replace above with below
  $( "#herobox3").delay(200).fadeToggle("fast", function() {
  });
  $( "#clickmeagain").delay(200).fadeToggle("fast", function() {
        $(this).css('display','inline-block');
    // Animation complete.
  });
});

//The Reverse

$( "#clickmeagain" ).click(function() {
  $( "#herobox3").fadeToggle("fast", function() {
  });
  $( "#clickmeagain").fadeToggle("fast", function() {
  });
  //Replace above with below
  $( "#herobox2").delay(200).fadeToggle("fast", function() {
  });
  $( "#clickme").delay(200).fadeToggle("fast", function() {
  });
});

