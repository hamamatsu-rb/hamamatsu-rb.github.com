doorkeeper = {
  type: "GET",
  url: 'http://api.doorkeeper.jp/groups/hmrb/events',
  dataType: "jsonp",
  crossDomain: true,
}

function doneDoorkeeper(data) {
  var arr, items = [], list;

  $.each(data, function(){
    var e = this.event,
        line = e.title + e.starts_at + e.ends_at;
    items.push(line);
  });

  list = '<ul><li>' + items.join('</li><li>') + '</li></ul>';
  $('#doorkeeper-list').append(list);
}