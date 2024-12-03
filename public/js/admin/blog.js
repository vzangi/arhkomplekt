$(function(){
  $('.edit-btn').click(function(){
    const { item } = $(this).data();
    const $form = $('#editForm');
    $form.find('#edit-id')[0].value = item.id;
    $form.find('#edit-name')[0].value = item.name;
    $form.modal('show');
  });
  $('.remove-btn').click(function () {
    const { item } = $(this).data();
    return confirm(`Удалить ${item.name}?`);
  });
})