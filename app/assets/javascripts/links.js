$(document).ready(function() {

  $('.save-btn').click(function() {
    CreateLink();
  })

});

  function renderLinks(link) {
    $('.table').append('<tr><td>' + link.title + '</td><td>' + link. url + '</td><td>' + link.read_status + '</td></tr>')
  }
