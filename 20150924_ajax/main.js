$.ajax({
  url: 'http://api.randomuser.me/?results=20',
  dataType: 'json',
  success: function(data){
    $.each(data.results, function(index, random){
      var li = $('<li>');
      li.append('<img src="'+random.user.picture.medium+'">');
      li.append('<p>'+'name: '+random.user.name.first+'</p>');
      li.append('<p>'+'location: '+random.user.location.city+'</p>')
      $('#username').append(li);
    });
  }
});



