$(function(){
  $('#menu-toggler').click(function(event) {
    event.stopPropagation();
    $('.menu').toggleClass('open');
    return false;
  })
})