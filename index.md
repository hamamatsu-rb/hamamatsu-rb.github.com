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
jQuery(document).ready(function($) {
  // Members JSON data fetch offline.
  // curl -u "<USERNAME>:token:<TOKEN>" https://github.com/api/v2/json/teams/38404/members
  // see http://develop.github.com/p/orgs.html
  var url = window.location + "js/members.json";
  
  $.getJSON(url, null, function(data, status) {
    if (status != 'success') {
      $("#members").html("Oops, Something Is Wrong...")
      return;
    }
    
    $(data.users).each(function(i, user) {
      var href = "https://github.com/" + user.login;
      var src = "https://secure.gravatar.com/avatar/" + user.gravatar_id + "?s=40"
      var link = $('<a href="' + href + '" title="' + user.name + '"><img src="' + src + '" /></a>');
      $("#members").append(link);
    });
  });
});
</script>