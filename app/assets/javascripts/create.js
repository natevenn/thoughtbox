function CreateLink(){
    var $form = $('#form');
    var postParams = { idea: { title: $form.find('#title').val(), body: $form.find('#url').val(), read: false } }
    $.ajax({
        url: '/api/v1/links.json',
        method: 'POST',
        dataType: 'json',
        data: postParams,
        success: function(link){
            renderIdea(link);
            clearForm($form);
        }
    });
}

function clearForm($form){
    $form.find('#title').val('');
    $form.find('#url').val('');
}
