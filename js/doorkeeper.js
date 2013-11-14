// doorkeeper API Ajax用オブジェクト
doorkeeperApi = {
  type: "GET",
  url: 'http://api.doorkeeper.jp/groups/hmrb/events',
  dataType: "jsonp",
  cache: false,
  timeout: 5000,
  crossDomain: true
}

// アクセス失敗時にその旨を表示する
function failDoorkeeper() {
  $('#doorkeeper-list')
    .html(
      $('<div class="alert alert-warning">Doorkeeper API の接続に失敗しました。</div>')
      .fadeIn('slow')
    );
}

// アクセス成功時にリストを作成する
function doneDoorkeeper(data) {
  var arr, items = [], list, table;

  $.each(data, function(){
    items.push(parseLine(this.event));
  });

  list = '<tr>' + items.join('</tr><tr>') + '</tr>';
  table = '<table class="table table-striped table-hover">' +
          list +
          '</table>';

  $('#doorkeeper-list').html($(table).fadeIn('fast'));
}

// イベント1件をパースする
function parseLine(e) {
  var start = formatDate(new Date(e.starts_at)),
      end   = formatTime(new Date(e.ends_at)),
      url   = e.public_url,
      info  = e.title + ' <span class="badge">' + e.participants + '</span>',
      day   = start + ' ～ ' + end,
      detail = '<a class="btn btn-primary detail_button" href="' +
               e.public_url +
               '" role="button">detail</a>';

  return '<td>' + [info, day, detail].join('</td><td>') + '</td>';
}

// Dateオブジェクトから、yyyy/mm/dd hh:mm 形式の文字列にする
function formatDate(date) {
  var weekdays = "日月火水木金土",
      y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate(),
      w = weekdays[date.getDay()];

  return y + '/' + m + '/' + d + '(' + w + ') ' + formatTime(date);
}

// Dateオブジェクトから、hh:mm 形式の時間の文字列にする
function formatTime(date) {
  var h = date.getHours(),
      m = ('0' + date.getMinutes()).slice(-2); // padding by 0

  return h + ':' + m;
}
