---
title: JonLuca's Blog
is_home: true
header-img: "/images/mini-profile.png"
---

<style>
.time {
  position: absolute;
  right: 2em;
}

</style>
<ul class="list pa0" id="blog-posts" style="margin:0">
    {% for post in site.posts %}
    <li class="mt2">
        <a style="padding-right: 100px;" class="db link-text pv1 link blue hover-mid-gray" href="{{ site.url }}{{ post.url }}">
            <time class="time fr silver ttu">{{ post.date | date_to_string }}</time>
            {{ post.title }}
        </a>
    </li>
    {% endfor %}
</ul>
