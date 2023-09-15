---
layout: xppageblog
title: amazon
post_cover: /assets/projectblogassets/lunaassets/lunacover.png
when: summer 2023
desc: basically got to nuke ~50% lines of code needed for a major feature in the iOS Kindle app
index: 1
---

<h2>so what did i do at amazon?</h2>

✧ refactored code for Kindle's iOS In-book top chrome and overflow (shown on the bottom of page just in case you dont know what that is)<br>

✧ new implementation only needed about half as many lines of code as original implementation <br>

✧ allowed for live updating of the buttons aka you can delete and add buttons without needing to recompile (saves lots of time!! we like that)<br>

✧ localized my buttons so they are in the user's region's default language (accessibility epic)<br>

✧ wrote design docs<br>

✧ pushed code through ci/cd pipeline<br>

✧ dealt with some pretty ugly rebases<br>

✧ #teamworked with other interns which caused aforementioned ugly rebases<br>

✧ set up A/B testing for beta and release<br>

✧ sat in on sprint meetings<br>

<br>
![appopen](/assets/projectblogassets/amazonassets/topchrome.png){:class = "blogpage"}
top chrome
<br><br>
![appopen](/assets/projectblogassets/amazonassets/overflow.png){:class = "blogpage"}
overflow
