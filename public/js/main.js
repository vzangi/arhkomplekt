$(function(){
  $('#item_categories li').click(function(){
    const { id } = $(this).data();
    
    $('#item_categories li.active').removeClass('active');
    $(this).addClass('active');

    $('.categories__items__list.active').removeClass('active');
    $(`.categories__items__list[data-id='${id}']`).addClass('active');
  });
});