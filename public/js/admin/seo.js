$(function () {
  $('.edit-btn').click(function () {
    const { item } = $(this).data();
    const $form = $('#editForm');
    $form.find('#edit-id')[0].value = item.id;
    $form.find('#edit-page')[0].value = item.page;
    $form.find('#edit-title')[0].value = item.title;
    $form.find('#edit-description')[0].value = item.description;
    $form.find('#edit-keywords')[0].value = item.keywords;
    $form.modal('show');
  })

  $('.remove-btn').click(function () {
    const { item } = $(this).data()
    return confirm(`Удалить ${item.page}?`);
  })
})