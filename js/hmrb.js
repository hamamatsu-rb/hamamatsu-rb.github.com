Date.prototype.toLocaleString = function(){
    return [
        this.getFullYear(),
        this.getMonth() + 1,
        this.getDate()
      ].join( '.' ) + '  '
        + this.toTimeString().slice(0, 5)
      }

var getEvents = function(data){
  // console.table(data[0]);
  for(var i = 0; i < data.length; i++){
    createEventPanel(data[i]["event"]["title"],
      new Date(data[i]["event"]["starts_at"]).toLocaleString() + "~",
      data[i]["event"]["venue_name"],
      data[i]["event"]["public_url"]);
  }
}

var script = document.createElement("script");
script.src = "https://api.doorkeeper.jp/groups/hmrb/events?callback=getEvents";
document.head.appendChild(script);


function createEventPanel(title, start_at, place, url){
  var panel = $("<div></div>",{ addClass: "panel panel-default"});
  panel.append('<div class="panel-heading panel-title"><h3>' + title + '</h3></div>');

  var body = $('<div></div>', { addClass: "panel-body"});
  body.append('<div class="start_at"><h3>' + start_at + '</h3></div>');
  body.append('<div class="place"><h4>' + place + '</h4><iframe width="100%" height="80%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3280.007330403189!2d137.7245966!3d34.704995049999994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ade7d56c9c475%3A0x187811541505988f!2z44CSNDMyLTgwMjQg6Z2Z5bKh55yM5rWc5p2-5biC5Lit5Yy66bSo5rGf55S677yRIOa1nOadvuW4gum0qOaxn-OCouODvOODiOOCu-ODs-OCv-ODvA!5e0!3m2!1sja!2sjp!4v1431703004119" width="100%" height="450" frameborder="0" style="border:0"></iframe></div>');
  // body.append('<div class="eventUrl"><a href="' + url + '" class="btn btn-dark btn-lg">参加登録</a></div>');
  body.append('<a data-width="400" class="doorkeeper-registration-widget" href="' + url +'"></a>');
  body.append('<script src="http://widgets.doorkeeper.jp/w/widget.js"></script>');

  panel.append(body);

  $(".eventDetail").append(panel);
}
