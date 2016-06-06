function updateReadStatus(event) {
  event.preventDefault();
  var status = $(this).text();
  var linkId = $(this).attr('id');
  var newReadStatus = changeStatus(status)
  var tableStatus = changeStatusTable(status)
  var params = { link: { read_status: tableStatus } }
  updateLinkTable(linkId, params)
  renderReadStatusButton(linkId, newReadStatus)
}

function renderReadStatusButton(id, status) {
  debugger
  $('#' + id).text(status)
}

function changeStatus(status) {
  if(status === 'Mark as read') {
    return 'Mark as unread'
  }else{
    return 'Mark as read'
  }
}

function changeStatusTable(status) {
  if(status === 'Mark as read') {
    return 'read'
  }else{
    return 'unread'
  }
}
