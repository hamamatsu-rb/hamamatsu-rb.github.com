---
layout: default
title: Hamamatsu.rb
---

Hamamatsu.rbは、静岡県浜松市周辺のRuby技術者やRubyに関心がある人が集まって、Rubyに関する何か(兼飲み会)をする予定の地域コミュニティです。

# お知らせ

<p class="event-title">浜松Ruby会議01 開催のお知らせ</p>

<div class="center">
<a href='http://rubykaigi-hamamatsu.s3-website-ap-northeast-1.amazonaws.com/'>
<img src="/img/kaigi01.png" class="img-responsive" /><br />
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

<h1>
Twitter</h1>
<a href="http://twitter.com/#!/hamamatsurb"><img src="http://a2.twimg.com/sticky/default_profile_images/default_profile_5_normal.png" width="24" height="24"></a>&nbsp;
<a href="http://twitter.com/#!/hamamatsurb">@hamamatsurb</a>&nbsp;
<a href="http://twitter.com/#!/search/%23hamamatsurb" >#hamamatsurb</a>
<a href="http://twitter.com/?status=@hamamatsurb%20subscribe">Twitterグループに参加</a>

<div id="members"></div>

# Facebook

  <iframe src="http://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FHamamatsurb%2F196508373706679&amp;width=585&amp;colorscheme=light&amp;show_faces=true&amp;stream=false&amp;header=false&amp;height=182" style="border:none; overflow:hidden; width:585px; height:182px;" scrolling="no" frameborder="0" ></iframe>

<script type="text/javascript" src="js/underscore.string.min.js"></script>
<script type="text/javascript" src="js/jquery.tmpl.min.js"></script>
<script type="text/javascript" src="js/doorkeeper.js"></script>

<script>
jQuery(function(){
  // Doorkeeper API にアクセス
  $.ajax( doorkeeperApi ).done( doneDoorkeeper ).fail( failDoorkeeper );
});
</script>
