$(document).ready(function() {

  var $body = $('body');

 fetchAllLinks();

  $('.save-btn').click(function() {
    CreateLink();
  })

  $body.on('click', 'a.readStatus', updateReadStatus);

  $('.error').hide();
});

function fetchAllLinks() {
  $.getJSON('/api/v1/links', function(links) {
    sortLinks(links)
  });
}

var readStatus = { read:'Mark as unread', unread:'Mark as read' }

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
 var highLighted = checkIfRead(link.read_status)
  $('.table').append('<tr class=' + highLighted + '><td>' + link.title
                     + '</td><td>' + link. url
                     + '</td><td>' + link.read_status
                     + '  <a class=readStatus id=' + link.id + ' href=#>' + readStatus[link.read_status]
                     + '</a> <a href=/links' + link.id + '/edit>Edit</a></td></tr>')
  }

  function checkIfRead(status) {
    if(status === 'read'){
      return 'strikeout'
    }else{
      return ''
    }
  }
