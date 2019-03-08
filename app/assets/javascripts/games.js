var currentGame = {};

$(document).ready(function(){
  $('.game-item').on('click', function() {
    currentGame.id = this.dataset.id
    $.ajax({
      url: '/games/' + currentGame.id + '/characters',
      method: 'GET',
      dataType: 'JSON'
    }).done( function(characters) {
      var list = $('#characters');
      list.empty();
      characters.forEach( function(char) {
        var li = '<li data-character-id="' + char.id + '">' + char.name + '-' + char.power + '</li>'
        list.append(li)
      });
    });
  });
  $('#newgame').on('click', function() {
    $.ajax({
      url: '/games/new',
      method: 'GET',
      datatype: 'JSON'
    }).done( function(form) {
      $("#games-list").html(form)

    })
  })

  $(document).on('submit', '#kale form', function(e) {
    e.preventDefault();
    var data = $(this).serializeArray();
    $.ajax({
      url: '/games',
      type: 'POST',
      dataType: 'JSON',
      data: data
    }).done( function(game) {
      var g = '<li class="game-item" data-id="' + game.id + '" data-name="' + game.name + '">' + game.
      name + '-' + game.description + '</li>';
      $('#games-list').append(g);
    }).fail( function(err) {
      alert(err.responseJSON.errors)
    });


  });
});
