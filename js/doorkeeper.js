doorkeeper = {
  type: "GET",
  url: 'http://api.doorkeeper.jp/groups/hmrb/events',
  dataType: "jsonp",
  crossDomain: true
}

function doneDoorkeeper(data) {
  var arr, items = [], list;

  $.each(data, function(){
    var e = this.event,
        start = formatDate(new Date(e.starts_at)),
        end = formatTime(new Date(e.ends_at)),
        url = e.public_url,
        info = e.title + ': ' + start + ' ～ ' + end,
        link = '<a href="' + e.public_url + '">' + info + '</a>';
    items.push(link);
  });

  list = '<ul><li>' + items.join('</li><li>') + '</li></ul>';
  $('#doorkeeper-list').append(list);
}

function formatDate(date) {
  var weekdays = "日月火水木金土",
      y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate(),
      w = weekdays[date.getDay()];

  return y + '/' + m + '/' + d + '(' + w + ') ' + formatTime(date);
}

function formatTime(date) {
  var h = date.getHours(),
      m = ('0' + date.getMinutes()).slice(-2); // padding by 0

  return h + ':' + m;
}