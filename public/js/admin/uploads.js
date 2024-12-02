$(function () {
  $('.remove-btn').click(function () {
    const { item } = $(this).data()
    return confirm(`Удалить ${item}?`);
  })
})