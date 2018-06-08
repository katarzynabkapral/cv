$(document).ready(function(){
  $('.toggle-modal').click(function(){
    $('#myModal1').modal('toggle');
  }); 
});

$('.navbar-collapse ul li a').click(function(){
$('.navbar-toggle:visible').click();
});