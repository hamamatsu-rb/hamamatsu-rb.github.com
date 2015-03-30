---
layout: default
title: Hamamatsu.rb
---

Hamamatsu.rb (ハママツ ルビー) は、静岡県浜松市周辺の、プログラミング言語Rubyのソフトウェア技術者や、Rubyを中心とした技術に関心がある人が集まって、Rubyに関する何か(兼飲み会)をする予定の地域コミュニティです。

# イベント情報

Hamamatsu.rb では、毎月勉強会を開催しています。

<div id="doorkeeper-list" ><div align="center"><img src='img/loading.gif' /></div></div>



# 過去のイベント

### 浜松Ruby会議01 開催のお知らせ

<a href='http://regional.rubykaigi.org/hamamatsu01'>
<img src="/img/kaigi01.png" class="img-responsive" />
</a>

2015年3月28日 に、
<a href='http://regional.rubykaigi.org/hamamatsu01'>浜松Ruby会議01</a>
が開催されました。

沢山のご来場、誠に有り難う御座いました。

浜松Ruby会議は、プログラミング言語Rubyのカンファレンス「Ruby会議」の地域版として、浜松市で行われました。

Twitter ハッシュタグ : <a href='https://twitter.com/search?q=%23hmrk01'>#hmrk01</a>

### 勉強会

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

  <iframe src="http://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FHamamatsurb%2F196508373706679&amp;width=285&amp;colorscheme=light&amp;show_faces=true&amp;stream=false&amp;header=false&amp;height=262" style="border:none; overflow:hidden; width:285px; height:262px;" scrolling="no" frameborder="0" ></iframe>

<script type="text/javascript" src="js/underscore.string.min.js"></script>
<script type="text/javascript" src="js/jquery.tmpl.min.js"></script>
<script type="text/javascript" src="js/doorkeeper.js"></script>

<script>
jQuery(function(){
  // Doorkeeper API にアクセス
  $.ajax( doorkeeperApi ).done( doneDoorkeeper ).fail( failDoorkeeper );
});
</script>
