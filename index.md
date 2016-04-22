---
layout: default
title: Hamamatsu.rb
---

# Hamamatsu.rb (ハママツ ルビー) とは

Hamamatsu.rb (ハママツ ルビー) とは、静岡県浜松市周辺を活動拠点とする、プログラミング言語Rubyに関する地域コミュニティーです。

Rubyプログラミングに関する勉強会や技術者同士の交流会(飲み会)などを行っています。
主にRubyを中心とした技術や話題を扱っていますが、Ruby以外のソフトウェアからハードウェアまでIT技術全般に関心がある人が集まって情報交換を行っています。

<!--
Hamamatsu.rb (ハママツ ルビー) は、静岡県浜松市周辺の、プログラミング言語Rubyのソフトウェア技術者や、Rubyを中心とした技術に関心がある人が集まって、Rubyに関する何か(兼飲み会)をする予定の地域コミュニティです。
-->

# 毎月のイベント情報 

Hamamatsu.rb では、毎月ペースで勉強会を開催しています。

<div id="doorkeeper-list" ><div align="center"><img src='img/loading.gif' /></div></div>

本年2016年度の活動の年次計画は、<a href='https://github.com/hamamatsu-rb/hamamatsu-rb.github.com/wiki/hmrb_2016'>コチラ</a>を参照してください。


# 過去のイベント情報

### 浜松Ruby会議01を開催しました (2015年度)

<a href='http://regional.rubykaigi.org/hamamatsu01'>
<img src="/img/kaigi01.png" class="img-responsive" />
</a>

2015年3月28日 に、<a href='http://regional.rubykaigi.org/hamamatsu01'>浜松Ruby会議01</a>を開催しました。
Twitter ハッシュタグ : <a href='https://twitter.com/search?q=%23hmrk01'>#hmrk01</a>

浜松Ruby会議とは、プログラミング言語Rubyのカンファレンスである「Ruby会議」の地域版として、浜松市で開催したイベントです。
ご来場いただいた皆様、講演者として遠くから登壇して頂いた皆様、およびに厚いご支援いただいた皆様、誠に有り難う御座いました。

当日の様子や資料は、るびまにレポートが掲載されておりますのでご覧になってください。  
  ([Rubyist Magazine 0051号 # RegionalRubyKaigi レポート (52) 浜松 Ruby 会議 01](http://magazine.rubyist.net/?0051-HamamatsuRubyKaigi01Report))



### 過去の勉強会情報

<ul class="posts">
{% for post in site.posts limit:5 %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
<!-- これ、2011年の勉強の情報しか表示しないみたいだけど、いるの？ -->


# アクセス

## Wikiページ

* 勉強会の情報などは[Wikiページ](https://github.com/hamamatsu-rb/hamamatsu-rb.github.com/wiki) に記載しています。

## メーリングリスト

[Hamamatsu.rbのGoogleグループ](https://groups.google.com/group/hamamatsu-rb?hl=ja) へ参加してください。


## Twitter

<a href="http://twitter.com/#!/hamamatsurb"><img src="http://a2.twimg.com/sticky/default_profile_images/default_profile_5_normal.png" width="24" height="24"></a>&nbsp;
<a href="http://twitter.com/#!/hamamatsurb">@hamamatsurb</a>&nbsp;
<a href="http://twitter.com/#!/search/%23hamamatsurb" >#hamamatsurb</a>
<a href="http://twitter.com/?status=@hamamatsurb%20subscribe">Twitterグループに参加</a>

<div id="members"></div>

## Facebook

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

