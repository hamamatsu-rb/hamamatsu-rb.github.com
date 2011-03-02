---
layout: default
title: Hamamatsu.rb
---

Hamamatsu.rbは、静岡県浜松市周辺のRuby技術者やRubyに関心がある人が集まって、Rubyに関する何か(兼飲み会)をする予定の地域コミュニティです。

# Join us!
[Hamamatsu.rbのGoogleグループ](https://groups.google.com/group/hamamatsu-rb?hl=ja) へ参加してください。

# Members
<div id="members"></div>

# Updates
<ul class="posts">
{% for post in site.posts limit:5 %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
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
	var link = $('<a href="' + href + '" title="' + name + '"><img src="' + src + '" width="48px" /></a>');
        $("#members").append(link);
      });
    },
    error: function(XMLHttpRequest, status, errorThrown) {
      console.log(status);
      $("#members").html("Oops, Something Is Wrong...");
    }
  });
});
</script>