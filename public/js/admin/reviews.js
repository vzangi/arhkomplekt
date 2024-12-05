$(function(){
  $('.edit-btn').click(function(){
    const { item } = $(this).data();
    const $form = $('#editForm');
    $form.find('#edit-id')[0].value = item.id;
    $form.find('#edit-title')[0].value = item.title;
    $form.find('#edit-description')[0].value = item.description;
    $form.find('#edit-link')[0].value = item.link;
    $form.find('#edit-date')[0].value = item.date;
    $form.find('#edit-prevuImage')[0].value = item.prevuImage;
    $form.find('#edit-video')[0].value = item.video;
    $form.modal('show');
  });
  $('.remove-btn').click(function () {
    const { item } = $(this).data();
    return confirm(`Удалить ${item.title}?`);
  });
})