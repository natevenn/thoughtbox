function updateReadStatus(event) {
  event.preventDefault();
  var status = $(this).text();
  var linkId = $(this).attr('id');
  var tableData = $(this).closest('tr')[0]
  var newReadStatus = changeStatus(linkId, status, tableData)
  var tableStatus = changeStatusTable(status)
  var params = { link: { read_status: tableStatus } }
  updateLinkTable(linkId, params)
  //renderReadStatusButton(linkId, newReadStatus)
}

function renderReadStatusButton(id, status) {
  $('#' + id).text(status)
}

function changeStatus(linkId, status, tableData) {
  if(status === 'Mark as read') {
    highLight(tableData);
    var newStatus = '<td>read <a class=readStatus id=' + linkId + ' href=#>Mark as unread</a> <a href=/links' + linkId + '/edit>Edit</a></td>'
    $('#' + linkId).parent().replaceWith(newStatus)
  }else{
    unhighLight(tableData);
    var newStatus = '<td>unread <a class=readStatus id=' + linkId + ' href=#>Mark as read</a> <a href=/links' + linkId + '/edit>Edit</a></td>'
    $('#' + linkId).parent().replaceWith(newStatus)
  }
}

function highLight(data) {
  $(data).addClass('strikeout')
}

function unhighLight(data) {
  $(data).removeClass('strikeout')
}

function changeStatusTable(status) {
  if(status === 'Mark as read') {
    return 'read'
  }else{
    return 'unread'
  }
}
