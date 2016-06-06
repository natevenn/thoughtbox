$(document).ready(function() {


 fetchAllLinks();

  $('.save-btn').click(function() {
    CreateLink();
  })

});

function fetchAllLinks() {
  $.getJSON('/api/v1/links', function(links) {
    sortLinks(links)
  });
}

function sortLinks(links) {
    $(links).sort(function(a, b){
        return a.id - b.id
    }).each(function(index, link) {
        renderLink(link);
    })
}

function renderLink(link) {
    $('.table').append('<tr><td>' + link.title + '</td><td>' + link. url + '</td><td>' + link.read_status + '</td></tr>')
  }
