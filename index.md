---
layout: default
title: Hallo Blog
Beschreibung: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illi enim inter se dissentiunt. Tum Torquatus: Prorsus, inquit, assentior; Quis enim redargueret? Quae contraria sunt his, malane? Quippe: habes enim a rhetoribus;"
---

<section class="content"> 
  <h1>Hallo Welt</h1>
  <p>Willkomen auf meinem neuen Blog über Videospiele, Webdesign und viele weitere interessante Bereiche rund ums Thema Entwicklung und Design.</p>
  <br/>
  <br/>

 
  <ul class="co-blog-list">
    {% for post in site.posts %}
  
    <li data-date="{{ post.date | date: "%Y.%m.%d" }}" class="{{ post.Kategorie }} element-item" >
      <a class="co-blog-entry" href="/studio-omega{{ post.url }}">
        <h2>{{ post.title }}</h2>
        <span class="date co-blog-entry-date">{{ post.date | date: "%d.%m.%Y" }}</span>
        <span class="co-blog-entry-date"> - </span>
        <span class="description co-blog-entry-description" >{{ post.Beschreibung }}</span>
        <span class="category bg-main-color hover {{ post.Kategorie }}">{{ post.Kategorie }}</span>
      </a>
    </li>
  
    {% endfor %}
    <li class="element-item-fallback">
      <h2>Ups!?</h2>
      <span>Leider wurden keine Einträge gefunden. Versuch es gleich noch einmal.</span>
    </li>
  </ul> 
</section>
