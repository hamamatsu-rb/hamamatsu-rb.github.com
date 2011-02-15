---
layout: default
title: Hamamatsu.rb
---

Hamamatsu.rbは、静岡県浜松市周辺のRuby技術者やRubyに関心がある人が集まって、Rubyに関する何か(兼飲み会)をする予定の地域コミュニティです。

## Recent
{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url }})
*Posted on {{ post.date | date_to_long_string }}.*
{% endfor %}

## Links
[GitHub](https://github.com/hamamatsu-rb)
