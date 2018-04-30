var fetch = function (ISBN) {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+ISBN,
      success: function(data) {
        renderBook(data);
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };


  $('.search').on('click',function () {
    var ISBN =$ ('#searchByISBN').val();
    fetch(ISBN);
  });



  var renderBook = function(Data){
    var source = $('#Book-container').html();
    var template = Handlebars.compile(source);
    var newHTML = template(Data);
    $('#Book-container').append(newHTML);

  }




 