---
layout: projectpgblog
title: studdy
post_cover: /assets/projectcovers/baldy-studdy.png
titleaddon: the app that i made in 2 weeks, just because
smallnote: aug 2020
desc: study timer app with a buddy
lang: swift
index: 0
---

So I made an app in two weeks during October of 2019 because I found a random competition and I was bored. Armed with knowledge from two whole elective computer science classes, I decided why not.

One might think I only had two weeks because I procrastinated—well, you usually wouldn’t be wrong but you are.

I found this competition during my vacation on the opposite side of the country, so I could only begin when school was starting because that’s when I was going to be back at home.

However, when school started, work and studying unsurprisingly followed. While adjusting to the new year, I kept trying to think of ideas any time I wasn’t trying to shove kinematics concepts and rhetorical analysis into my brain. Unfortunately, any semblance of creativity perished after the first month of my junior year.

That's how an app idea related to school came to fruition...

I figured that maintaining focus was difficult for me so I wanted (more accurately, needed) to keep myself accountable. Hence, studdy, the mashup of the words “study” and “buddy,” became a thing because what's better than instant gratification!

So that was the whole idea.

When I began programming, I was, as expected, lost. But after learning some basic syntax, I just sought out to fulfill my plans, which is a generous term because it was just a messy amalgamation of thoughts from lunch, study hall, and scribbles on my world history notes.

![morenotes](/assets/projectblogassets/studdyassets/studdycr1.jpg){:class = "blogpage"}

<small>Let’s take a moment to appreciate my culture and religions notes. </small>

Okay, enough rambling. Let’s actually get onto the thing I made because that’s why you're here! <small>(probably?)</small>

<h2>demonstration of the thing i made!</h2>

![appopen](/assets/projectblogassets/studdyassets/studdy1.gif){:class = "blogpage"}

here’s what you see when the app opens.

![appopen](/assets/projectblogassets/studdyassets/studdy2.gif){:class = "blogpage"}

plants.

<small> the font was custom made by yours truly. glad my handwriting became useful for once. </small>

![appopen](/assets/projectblogassets/studdyassets/studdy3.gif){:class = "blogpage"}

buy stuff because you already had coins there from a year ago.

![appopen](/assets/projectblogassets/studdyassets/studdy4.gif){:class = "blogpage"}

tap on alarm clock to track how long you studied for.

<small>try to ignore the fact that i can’t draw any poses!!!</small>

![appopen](/assets/projectblogassets/studdyassets/studdy5.gif){:class = "blogpage"}

profit.

![appopen](/assets/projectblogassets/studdyassets/studdy6.gif){:class = "blogpage"}

plants won't be lost to the void!

<h2>actual process that went into making this thing work, sort of</h2>

Originally, I thought this idea was simple enought because…well, I mean, it’s just a timer, some math, and wow, now you have app!

<h2>haha.</h2>
<small>xcode yelled at me a lot</small>

Honestly, I can't really explain the actual process and the obstacles I encountered while making this because I don't remember it, so I guess I’ll explain some of the code that's behind this app!

<small>It’s currently 2 AM when I'm writing this so please excuse any poor explanations.</small>

- Every time the timer updates, the variable that stores time accumulates. Then, I just did some ~~second grade~~ math which uses that time variable to convert the time studied into coins based on a set ratio (e.g. for every 10 minutes, you earn 5 of coins).
- When the user buys an item, it’s appended to a global objects array. This array, and the variable that contains the amount of coins the user possesses, is stored in UserDefaults. Because these values doesn’t require much data, UserDefaults is suitable to make sure the data is persistent when the app is killed. Don’t want innocent plants to get lost in some abyss.

```swift
let defaults = UserDefaults.standard

let currentCoinAmt = defaults.integer(forKey: "totalCoins") ?? 0
coinAmt = currentCoinAmt

let currentInv = defaults.array(forKey: "userInv")

if currentInv != nil {
    boughtItems = currentInv as! [String]
}
```

- When the app is launched again, it sets the user’s inventory equal to what’s stored in UserDefaults. It initializes only the plants that were appended to the objects array (when they're bought) because, well, that’s all that should be available to the user.

```swift
for plantName in boughtItems {
    let item: plantObject? = plantDict[plantName]
    let plant = showingBoughtPlants(imgname: item?.plantImgName ?? "", posx: item?.plantPosX ?? 0, posy: item?.plantPosY ?? 0, scale: item?.plantScale ?? 0, zpos: item?.plantZPos ?? 0)
    addChild(plant)
}
```

- If I recall correctly, registering touches ~~gave me a massive headache~~ posed some difficulties. It’s a function so the UI reacts to perform what it’s supposed to. Like when a button (it's actually an image) contains a touch from the user, it does stuff.

<br>
<h2>concluding thoughts</h2>

What would I have improved? Pretty much everything.
<small>Besides my little plants (I love my plants alright). And probably most of the shop menu graphics (kind of proud of that too). </small>

~~I could sit here and just completely obliterate my app, but let's not do that.~~

- The art, even though that’s the **least** of concerns
- Bugs like how the timer becomes confused after it surpasses an hour
- Adding inventory functionality where you can store plants (I originally had this but I couldn’t get it to work properly)
- Adding the ability for users to modify the location of the plants
- I also wanted relaxing music (lofi hip-hop) to play while the studying session was running, but then I realized I don’t know music…also ~~it was really not a necessity anyways~~ I ran out of time
- **And most of all:** code structure, organization, and efficiency. So basically, the whole entire app! The code's pretty crude…but hey, that's part of <span style="color: yellow"> _learning_</span>, am I right? \*nervous chuckle\*

Anyhow, even though I can’t say that I’m exceptionally proud of this project, I’m still pleased that I was able to make something completely from scratch. It gave me an oppurtunity to apply programming concepts I've learned in and outside of class, and I got an actual feel for Swift that wasn't mindlessly staring at tutorials. That's about it. I hope you enjoyed reading!
