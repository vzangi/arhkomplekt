$(function(){
  $('.edit-btn').click(function(){
    const { item } = $(this).data();
    const $form = $('#editForm');
    $form.find('#edit-id')[0].value = item.id;
    $form.find('#edit-name')[0].value = item.name;
    $form.find('#edit-url')[0].value = item.url;
    $form.find('#edit-logo')[0].value = item.logo;
    $form.find('#edit-img')[0].value = item.img;
    $form.modal('show');
  });
  $('.remove-btn').click(function () {
    const { item } = $(this).data();
    return confirm(`Удалить ${item.name}?`);
  });
})