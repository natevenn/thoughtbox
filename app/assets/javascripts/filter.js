function filters() {
  $('.btn').on('click', function() {
    buttonId = $(this).attr('id')
    if(buttonId === 'read-button') {
      filterByReadStatus('read');
    } else if (buttonId === 'unread-button') {
      filterByReadStatus('unread');
    } else if (buttonId === 'all') {
      showAll();
    } else {
      alphabetizLinks();
    }
  });
}

function alphabetizLinks() {
  $('.links').sort(function(a, b) {
    var titleA = $(a).children('#title').text().toLowerCase().charAt(0);
    var titleB = $(b).children('#title').text().toLowerCase().charAt(0);
    if (titleA < titleB) {
      return 1;
    }
    if (titleA > titleB) {
      return 0;
    }
  }).each(function(index, row) {
    $('.table').append(row)
  });
}

function showAll() {
  $('.links').each(function() {
   $(this).show();
  });
}

function filterByReadStatus(status) {
  $('.links').each(function() {
    var readStatus = $(this).children('.read-status').text().split(' ')[0];
    if(readStatus === status) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}
