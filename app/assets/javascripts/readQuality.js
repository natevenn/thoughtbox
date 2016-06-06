function updateReadStatus(event) {
  event.preventDefault();
  var status = $(this).text();
  var linkId = $(this).attr('id');
  var tableData = $(this).closest('tr')[0]
  var newReadStatus = changeStatus(status, tableData)
  var tableStatus = changeStatusTable(status)
  var params = { link: { read_status: tableStatus } }
  updateLinkTable(linkId, params)
  renderReadStatusButton(linkId, newReadStatus)
}

function renderReadStatusButton(id, status) {
  $('#' + id).text(status)
}

function changeStatus(status, tableData) {
  if(status === 'Mark as read') {
    highLight(tableData);
    return 'Mark as unread'
  }else{
    unhighLight(tableData);
    return 'Mark as read'
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
