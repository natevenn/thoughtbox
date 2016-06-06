$(document).ready(function() {

  var $body = $('body');

 fetchAllLinks();

  $('.save-btn').click(function() {
    CreateLink();
  })

  $body.on('click', 'a.readStatus', updateReadStatus);

});

function fetchAllLinks() {
  $.getJSON('/api/v1/links', function(links) {
    sortLinks(links)
  });
}

var readStatus = { 0:'unread', 1:'read' }

function sortLinks(links) {
    $(links).sort(function(a, b){
        return a.id - b.id
    }).each(function(index, link) {
        renderLink(link);
    })
}


function updateLinkTable(id, params) {
    $.ajax({
        url: '/api/v1/links/' + id,
        method: 'PUT',
        dataType: 'json',
        data: params,
        success: function() {
            console.log('success')
        }
    });
}

function renderLink(link) {
  $('.table').append('<tr class=link><td>' + link.title
                     + '</td><td>' + link. url
                     + '</td><td>' + link.read_status
                     + '  <a class=readStatus id=' + link.id + ' href=#>Mark as read</a></td></tr>')
  }
