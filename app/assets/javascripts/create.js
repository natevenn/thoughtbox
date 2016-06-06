function CreateLink(){
    var $form = $('#form');
    var postParams = { link: { title: $form.find('#title').val(), url: $form.find('#url').val(), read_status: false } }
    $.ajax({
        url: '/api/v1/links.json',
        method: 'POST',
        dataType: 'json',
        data: postParams,
        success: function(link){
          debugger
          console.log('success')
            renderLink(link);
            clearForm($form);
        }
    });
}

function clearForm($form){
    $form.find('#title').val('');
    $form.find('#url').val('');
}
