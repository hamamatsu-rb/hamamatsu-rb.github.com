---
layout: default
title: Hamamatsu.rb
---

Hamamatsu.rbは、静岡県浜松市周辺のRuby技術者やRubyに関心がある人が集まって、Rubyに関する何か(兼飲み会)をする予定の地域コミュニティです。

# お知らせ

<div class="center">
<a href='http://rubykaigi-hamamatsu.s3-website-ap-northeast-1.amazonaws.com/'>
<img src="/img/kaigi01.png" width="600"  align="center" />
2015年3月28日 浜松Ruby会議01 開催決定！
</div>
</a>

浜松Ruby会議は、Rubyistの話を聞きたい、Rubyistとつながりたい(技術力には自信がないけど向上心にあふれた)技術者、ITへの理解を深めたい学生の方のための、地域Ruby会議 です。

みなさまのご来場を心からおまちしております。

# イベント情報

Hamamatsu.rb では、毎月勉強会を開催しています。

<div id="doorkeeper-list" ><div align="center"><img src='img/loading.gif' /></div></div>

<ul class="posts">
{% for post in site.posts limit:5 %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

# メーリングリスト

[Hamamatsu.rbのGoogleグループ](https://groups.google.com/group/hamamatsu-rb?hl=ja) へ参加してください。

<h1 style="margin-top: 2em">
Twitter</h1>
<a href="http://twitter.com/#!/hamamatsurb"><img src="http://a2.twimg.com/sticky/default_profile_images/default_profile_5_normal.png" width="24" height="24" style="vertical-align: middle; margin: 0 3px"></a>&nbsp;
<a href="http://twitter.com/#!/hamamatsurb" style="font: 0.8em normal; color: gray">@hamamatsurb</a>&nbsp;
<a href="http://twitter.com/#!/search/%23hamamatsurb" style="font: 0.8em normal; color: gray">#hamamatsurb</a>
<a href="http://twitter.com/?status=@hamamatsurb%20subscribe" style="font: 0.8em normal; color: gray">Twitterグループに参加</a>

<div id="members"></div>

# Facebook

<div>
  <iframe src="http://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FHamamatsurb%2F196508373706679&amp;width=585&amp;colorscheme=light&amp;show_faces=true&amp;stream=false&amp;header=false&amp;height=182" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:585px; height:182px;" allowTransparency="true"></iframe>
</div>

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
  // Doorkeeper API にアクセス
  $.ajax( doorkeeperApi ).done( doneDoorkeeper ).fail( failDoorkeeper );
});
</script>
