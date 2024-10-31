$(function(){
  $('#blog_categories li').click(function() {
    $('#blog_categories li.active').removeClass('active');
    $(this).addClass('active');

    const { id } = $(this).data();
    const ids = (''+id).split(',');
    const items = $(".blog__items__box li")
    for (item of items) {
      const itemId = $(item).data().id
      if (ids.includes(''+itemId)) {
        $(item).show()
      } else {
        $(item).hide()
      }
    }
  });
})