function CreateLink(){
    var $form = $('#form');
    var postParams = { link: { title: $form.find('#title').val(), url: $form.find('#url').val(), read_status: 'unread' } }
    $.ajax({
        url: '/api/v1/links',
        type: 'POST',
        dataType: 'json',
        data: postParams,
        success: function(link){
            renderLink(link);
            clearForm($form);
        },
        error: function(xhr, textStatus, error) {
          sendErrorMsg();
          clearForm($form);
        }
    });
}

function sendErrorMsg() {
  $("#url").after('<br><span class="error">Invalid Url</span>');
}

function clearForm($form){
    $form.find('#title').val('');
    $form.find('#url').val('');
}
