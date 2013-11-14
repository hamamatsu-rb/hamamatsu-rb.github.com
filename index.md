---
layout: default
title: Hamamatsu.rb
---

Hamamatsu.rbは、静岡県浜松市周辺のRuby技術者やRubyに関心がある人が集まって、Rubyに関する何か(兼飲み会)をする予定の地域コミュニティです。

# イベント情報 (Doorkeeper)
<div id="doorkeeper-list" ></div>

# ATNDs
<ul class="events event-dest" ><li>ATNDを検索中...</li></ul>

# お知らせ
<ul class="posts">
{% for post in site.posts limit:5 %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

# メーリングリスト

[Hamamatsu.rbのGoogleグループ](https://groups.google.com/group/hamamatsu-rb?hl=ja) へ参加してください。

<h1 style="margin-top: 2em">
Twitter
<a href="http://twitter.com/#!/hamamatsurb"><img src="http://a2.twimg.com/sticky/default_profile_images/default_profile_5_normal.png" width="24" height="24" style="vertical-align: middle; margin: 0 3px"></a>&nbsp;
<a href="http://twitter.com/#!/hamamatsurb" style="font: 0.8em normal; color: gray">@hamamatsurb</a>&nbsp;
<a href="http://twitter.com/#!/search/%23hamamatsurb" style="font: 0.8em normal; color: gray">#hamamatsurb</a>
<a href="http://twitter.com/?status=@hamamatsurb%20subscribe" style="font: 0.8em normal; color: gray">Twitterグループに参加</a>
</h1>
<div id="members"></div>

# Facebook
<iframe src="http://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FHamamatsurb%2F196508373706679&amp;width=585&amp;colorscheme=light&amp;show_faces=true&amp;stream=false&amp;header=false&amp;height=182" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:585px; height:182px;" allowTransparency="true"></iframe>

<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="js/underscore.string.min.js"></script>
<script type="text/javascript" src="js/jquery.tmpl.min.js"></script>
<script type="text/javascript" src="js/doorkeeper.js"></script>

<script>
jQuery(function(){
  $.ajax({
    url: 'http://api.twitter.com/1/hamamatsurb/hamamatsu-rb/members.json',
    dataType: 'jsonp',
    success: function(data, dataType) {
      $.each(data.users, function(i, user) {
	var name = user.screen_name;
	var href = 'http://twitter.com/' + user.screen_name;
	var src = user.profile_image_url;
	var link = $('<a href="' + href + '" title="' + name + '"><img src="' + src + '" width="48" height="48" /></a>');
        $("#members").append(link);
      });
    },
    error: function(XMLHttpRequest, status, errorThrown) {
      console.log(status);
      $("#members").html("Oops, Something Is Wrong...");
    }
  });
  $.ajax( doorkeeper ).done( doneDoorkeeper );
});
</script>

<script id="event-template-future" type="text/x-jquery-tmpl">
  <li class="event future">
    <div>
      <h2 class="event_title"><a class="link" href="${event_url}" ref="external">${title}</a></h2>
      &laquo; <span class="started_at">${started_at_string}</span>
    </div>
    <span class="catch">${catch_val}</span>
  </li>
</script>
<script id="event-template-past" type="text/x-jquery-tmpl">
  <li class="event past">
    <div>
      <h2 class="event_title"><a class="link" href="${event_url}" ref="external">${title}</a></h2>
      &laquo; <span class="started_at">${started_at_string}</span>
    </div>
    <span class="catch">${catch_val}</span>
  </li>
</script>
<script id="event-template-no-future" type="text/x-jquery-tmpl">
  <li class="event no-future">
    次のイベントがまだ登録されていません。登録されるまで待ったり、担当の人を急かしたりしてください。
  </li>
</script>
<script type="text/javascript">
  $(function(){
    $.ajax({
      url: 'http://api.atnd.org/events/',
      dataType: 'jsonp',
      data: 'keyword=hamamatsu.rb&count=5&format=jsonp',
      success: function(result){
        $(".event-dest").empty();
        var is_empty = true;
        for(var i = 0; i < result.events.length; i++){
          var event = result.events[i];

          var day = new Date(event.started_at);
          var ended_at = new Date(event.ended_at);
          var weeks = "日月火水木金土";
          event.started_at_string = _.str.sprintf("%d年%02d月%02d日(%s) %d:%02d〜", day.getFullYear(), day.getMonth() + 1, day.getDate(), weeks[day.getDay()], day.getHours(), day.getMinutes());
          event.catch_val = event.catch // catchは予約後のためかtmplがエラーを起こすので
          event.is_future = (new Date().getTime()) < ended_at.getTime();

          if(event.is_future){ is_empty = false; }
          $("#event-template-" + (event.is_future ? "future" : "past")).tmpl(event).appendTo(".event-dest");
        }
        if(is_empty){
          $("#event-template-no-future").tmpl({}).prependTo(".event-dest");
        }
      },
      error: function(XMLHttpRequest, status, errorThrown) {
        console.log(status);
        $(".event-dest").html("Oops, Something Is Wrong...");
      }
    });
  });
</script>
