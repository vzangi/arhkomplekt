$(function(){
  $(".btn-choose").click(function(){
    const caller = $(this).prev()
    $("#choose-caller").val(caller.attr('id'))
    $("#chooseForm").modal('show');
  });

  $('.files-list').on('click', '.folder', function(){
    const { url } = $(this).find('span').data()
    loadDir(url)
  })

  $('.files-list').on('click', '.file', function(){
    const { url } = $(this).find('span').data();
    const caller = $("#choose-caller").val();
    $(`#${caller}`).val(url)
    $("#chooseForm").modal('hide');
  })

  function loadDir(dir = '/') {
    $.ajax({
      url: `/admin/dir${dir}`,
      success: function(data) {
        const { dirs, items } = data
        const { folders, files } = items
        const fl = $('.files-list')
        fl.empty();

        let path = '/' + dirs.join('/')
        if (path != '/') {
          path = path + '/';
          const div = $('<div>');
          div.addClass('folder')
          div.append('<i class="bi bi-folder-fill me-1"></i>');
          const p = '/' + dirs.slice(0,-1).join('/')
          div.append(`<span data-url='${p}'>..</span>`)
          fl.append(div)
        }

        for (const element of folders) {
          const div = $('<div>');
          div.addClass('folder')
          div.append('<i class="bi bi-folder-fill me-1"></i>')
          div.append(`<span data-url='${path}${element}'>${element}</span>`)
          fl.append(div)
        }

        for (const element of files) {
          const div = $('<div>');
          div.addClass('file')
          div.append(`<span data-url='/uploads${path}${element}'>${element}</span>`)
          fl.append(div)
        }
      }
    })
  }

  loadDir();
})