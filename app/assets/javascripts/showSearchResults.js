function showSearchedResults() {
    $('#search').keyup(function() {
        var search = $(this).val();
        filterSearch(search)
    });
}

function filterSearch(search) {
    $('.links').each(function() {
      var titleText = $(this).children('#title').text()
      if(titleText.match(search)) {
        $(this).show();
      } else {
        $(this).hide();
      }

      //(text.indexOf(thisVal) == 0) ? $(this).show() : $(this).hide();
    });
}
