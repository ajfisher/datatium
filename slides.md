# Datatium<br/> Data as material for contextually responsive design
<!-- .slide: class="title" -->

Be Responsive, September 8, 2015 <!-- .element: class="location" -->

Andrew Fisher @ajfisher <!-- .element: class="author" -->


Notes:
Hit 's' for speaker notes -- .element: class="help" --

Hi, my name's Andrew Fisher and I'm an interaction researcher.

Tonight I'd like to talk to you about data as a design material for the 
next 40 minutes.

---

### The web was always responsive

![](/images/responsive_old.png) <!-- .element: width="50%" -->
![](/images/responsive_old2.png) <!-- .element: width="26.5%" -->

Notes:
What I find most interesting about responsive design is that the web actually
started fully responsive - fluidity was inherent in the way it was designed. 

---

### Then we broke it 
<!-- .slide: data-background="/images/tables.jpg" -->

(CC) Flickr <!-- .element: class="attribution" -->
[Thomas Hawk](https://www.flickr.com/photos/thomashawk/12591515)

Notes:
But for 20 years after that though we basically systematically broke that inherent
responsiveness - mostly because of table based design but generally because
we made things work due to the monoculture of first Netscape and then IE.

---

### Then we fixed it
<!-- .slide: data-background="/images/responsive.jpg" -->

(CC) Flickr <!-- .element: class="attribution" -->
[Antoine Lefeuvre](https://www.flickr.com/photos/69797234@N06/7203485148)

Notes:
Then mobile came along, and we spent a long time fixing stuff that was only
really broken because we stuffed it in the first place and over the last 18 months
we have all become converts to the idea of responsive design.

So the sum total of our last 20 years of effort has been to largely bring us
back to the point where we started.

---

<!-- .slide: data-background="#000000" -->

Continue on, we come back to the light soon <!-- .element: class="help" -->

Notes:
That's me being a little ungenerous obviously, because we do have a better
platform for design than we had 20 years ago, but I think you all appreciate the
point - we broke things due to our focus on execution for what was in front
of us, not what we could conceive of coming next.

---

### Losing focus on what matters
<!-- .slide: data-background="/images/forest.jpg" -->

(CC) Flickr <!-- .element: class="attribution" -->
[Jyrki Salmi](https://www.flickr.com/photos/salman2000/15103964698)

Notes:
And I actually worry that we're falling into the same trap again. I think we
are missing the wood for the trees.

I think we've made some fantastic technical and design achievements in the last
couple of years but I worry we're too focussed on pixels.

---

### We focus too much on size
<!-- .slide: data-background="/images/video_standards.svg" -->

"Vector Video Standards8" by <!-- .element: class="attribution" -->
[Jedi787plus](https://en.wikipedia.org/wiki/File:Vector_Video_Standards4.svg) 
(Wikipedia) 

Notes:
Or rather we're too focussed on screens. Largely we're moving from "I'm designing
this for an iPhone and a desktop" - towards "I'm designing this
for a small device or a large screen". Mostly this is due to device fragmentation that
leads us to having this many and more screen sizes - 

That's awesome and all but we're missing the underlying behaviour. These devices
are allowing computation to move to different contexts and we are changing our
behvaiour as a result. Yes it may be a small screen but it's a small screen
not on a desk in one fixed location. Context is important.

---

### Responsive design should be about me
<!-- .slide: data-background="/images/man.jpg" -->

(CC) Flickr <!-- .element: class="attribution" -->
[jonrawlinson](http://www.flickr.com/photos/london/106913032)

Notes:
Responsive design at the moment is all about my device, not about me and what
I want. We spend more time reacting to whether I have a mobile and what 
orientation I'm holding it than we do thinking about the service the web
application is delivering to me.

---

### Datatium

Da <!-- .element: class="datatium" -->

Notes:
To truly create interesting experiences. To truly take mobile from being just
a small screen. To truly realise the idea of a web that is responsive, we need
to think beyond pixels and start thinking about context.

Tonight, I want to talk to you about contextually responsive design and how
data can be used to facilitate it. In my work I think about data as a material - 
something I call datatium, and I'd like to share this with you so you can go
away and start designing responsive experiences as well.

---

## Agenda

1. What is contextually responsive design?
2. Using data as a material.
3. Creating contextually responsive experiences.

Notes:
To do that we'll cover off these three areas

- What is contextual design

- Data as a material and how we get it

- Creating contextually responsive experiences

Let's get cracking

---

## What is contextual design?

Notes:
Contextual design embraces the chaotic nature of behaviour. We think about intent
a lot - what is this person trying to achieve, rather than does this design
layout the right way on this device.

These experiences constantly evolve and are shaped by the data available to the
experience you're creating.

---

### A multitude of factors

* Explicit data (what do I tell you?)
* Implicit data (how do I behave?)
* Extrinisic factors (what can you infer?)

Notes:
Contextual design uses a combination of explicit information - what they've told
me such as preference information. We use implicit data such as behavioural information
but we also use external information as well - information we can infer or derive
from other sources and factors.

You need all of these components in order to be able to create a contextually
responsive experience.

---

### Missing one piece

![](/images/sms.png) <!-- .element: width="40%" -->

Notes:
Here's an example of an okay experience. This came from vodafone the other day
warning me I was approaching my data limit and when it would start again. 
There was one point of failure with it and the eagle-eyed amongst you may spot
it.

It hits two of the three factors:

- Explicitly I've told vodafone to contact me if I approach a threshold. So I've
expressed preference

-  Implicitly I've been using my data allowance so the system knows I've exceeded
that threshold.

This is the point the message gets sent. The missing part is the extrinsic factors
 - what else can be derived from knowledge about me or my behaviour is missing
and is what turns this into only an okay experience rather than a great one.

We'll return to this example later and I'll show you how to make it better.

---

### Contextual design in action
<!-- .slide: data-background="/images/ironman.jpg" -->

Avengers, 2012 - ©Marvel <!-- .element: class="attribution"-->

Notes:
So here's what a contextually responsive experience looks like in my opinion and
how seamless it can be from an experience perspective. 

Here's a clip from the first avenger's movie.

---

### Contextual design in action
<!-- .slide: data-background="/images/ironman.gif" -->

Avengers, 2012 - ©Marvel <!-- .element: class="attribution"-->

Notes:
Notice here how the HUD changes from a general display on what's going on to 
full threat tactical display in a heartbeat. Stark doesn't activate it at all 
and it becomes perfectly tuned to the tactical situation around him, responding 
contextually to the threats nearby.

Most interestingly, this interface was designed with consultation from an A-10
pilot who worked with the designer on the UI and their focus on was on contextual
tactical information - notably because that's NOT how current heads up systems 
work in military aircraft.

Now clearly this HUD doesn't exist in anything other than a fictional sense but 
this completely sums up how I want the web to behave every day - and I'll 
settle for this without the flying suit of armour and pulse cannons in my hand. 

---

### Odd experiences
<!-- .slide: data-background="/images/uncanny.jpg" -->

(CC) Flickr <!-- .element: class="attribution" -->
[Joe Goldberg](https://www.flickr.com/photos/goldberg/216631278)

Notes:
But we're all designing responsively right? All of us now? Great. But I bet you
still come up against some issues.

Here's the situation. You design a wonderfully responsive site. Your media 
queries are perfection, everything reflows beautifully - it's a work of responsive
art.

But you then use the web application on mobile - or maybe you go from
mobile to desktop - and something just "feels" wrong. You can't put your finger
on it, but there's something odd about the experience when you move from one
device to another.

Has anyone experienced this?

Good - a couple.

---

### Context shift
<!-- .slide: data-background="/images/context_shift.jpg" -->

(CC) Flickr <!-- .element: class="attribution" -->
[CAFNR](https://www.flickr.com/photos/cafnr/14267599480)

Notes:
What you are noticing is the effect caused by context shift. Sometimes in our
services the shift to a different device causes the whole idea of how you use
that service to change fundamentally. By shifting the device interaction we've
actually forced an entirely different context.

This is where we need to start accounting for how context is driving the 
requirements rather than simply device. Here's an example of this.

---

### Context drives requirements

![](/images/anz1.png) <!-- .element: width="26%" -->
![](/images/anz2.png) <!-- .element: width="26%" -->
![](/images/anz3.png) <!-- .element: width="26%" -->

ANZ GoMoney <!-- .element: class="attribution" -->

Notes:
I've been told anecdotally that when ANZ came to build their GoMoney 
application for mobile devices it was based around the insight that the majority 
of users logged in to the existing web application on their phone, looked at 
their account balance and exited again. As such in their mobile app they put it 
front and centre and then tacked on making a payment as well as that was the 
number two task people did.

Context drives need and requirements.

When I'm out and about and I'm really mobile, I don't need the full capabilities 
of the entire ANZ online banking platform. I just want to see whether I've 
been paid and whether I have enough money to buy that new game or not.

---

### Is this a browser?
<!-- .slide: data-background="/images/apple-watch.jpg" -->

Apple watch © Apple  <!-- .element: class="attribution" -->

Notes:

This is my final point for the moment about why you should be thinking about context.

Designing this way is important because our notion of
what is a browser is starting to break down. Our services are starting to
transcend the browser we've become accustomed to after these 25 years.

The web is scalable. Far more scalable than a thousand apps installed for every
person on every device they own. But the idea of how we experience that web
is going to change fundamentally over the next few years as computing becomes
more embedded into our environments and gets closer to our bodies.

---

## Data as material

Notes:
Now you have a bit more of an understanding about what I mean when I talk about
context and contextual design, I'll give you some understanding about how we
get to use it. The critical component is data and specifically, starting to
think about how we use data as material during our design process - just like
we do any other component of design such as type, animation, colour and light.

I'll start with what things matter, how we get that data, and how we plan our experiences
around this.

---

### Getting useful data
<!-- .slide: data-background="/images/data_capture.jpg" -->

(CC) Flickr <!-- .element: class="attribution" -->
[Eric Fischer](https://www.flickr.com/photos/walkingsf/6238509140)

Notes:
The first thing to understand is that there's no magic variables. I can give 
you pointers towards some things but other ones are going to be specific to
your own web application. For example the context variables that are important
for the guardian website are totally different from tinkercad which is a 3D design
application. The contexts change because you're building different applications.

Having said that, there are a couple of starting points I always look at to
begin with because they do cause big changes of context across many different
applications.

---

### Device shapes behaviour
<!-- .slide: data-background="/images/devices.jpg" -->

Notes:
This is the obvious place to start and where all of you are right now. The reality
is that this only really gives you a sense of what technical capabilities
a person is attached to. However, in some cases device might be really important.

For example if I'm a telco like telstra, I can determine the rough age of your 
device and infer whether you might be looking to upgrade. 

Similarly if you're an android user on the iPhone microsite at Apple you could highlight
some of the benefits of iOS and how you can still use all your usual google apps.

---

### Time shapes behaviour
<!-- .slide: data-background="/images/time.jpg" -->

(CC) Flickr <!-- .element: class="attribution" -->
[Martina Photography](http://www.flickr.com/photos/martinaphotography/7482296868/sizes/l/)


Notes:
Next we can look at time. 

People do different things at different times of the day. 

I did some research that looks at the types of activity you'd do over a day across
many clients in many verticals and you see sales activities dominate in the afternoon
and evening but service based actions dominate the morning activity.

This makes sense in an aggregate way - most people have a tick list and topping up
a phone, making a call to change a plan or organise a return are tasks you
do to knock them off. Shopping is often not this type of behaviour as it's less
task focused.

---

### Location shapes behaviour
<!-- .slide: data-background="/images/geography.jpg" -->

Notes:
We can also consider location - is the person moving or stationary? You can infer 
location but you can also ask a user for their location if you think it will 
make it a better experience. Does the person’s location overlap with known 
places like a train station, a train line or say you were a retailer one of your 
stores (or close to it).

These are just a few points that can create a whole bunch of different contexts 
that the user may be in. 

---

### Context shapes behaviour
<!-- .slide: data-background="/images/train.jpg" data-state="pushdown" -->

(CC) Flickr <!-- .element: class="attribution" -->
[Henry Stratford](http://www.flickr.com/photos/henry_stradford/5348910688/sizes/o/)

Notes:
If I visit a site on my phone at about 8am every morning through the week and 
I'm moving chances are I'm on my commute. This is very different to me using a 
tablet in landscape mode at 9pm where I'm connected via a high speed wifi link 
from a static location. 

---

### Time and device

![](/images/mobile-use.jpg) <!-- .element: width="68%" -->

Device class-time of day meta-analysis <!-- .element: class="attribution" -->

Notes:
Here you can see some data that was composed as an aggregate of visitation
across many clients I work with. This is a few months old now but you can see
some clear behavioural differences when you look at time of day against 
class of device.

You can see that tablet and mobile devices start earlier than desktops. Who here
browses in bed before you get up? Okay so that's probably you.

Likewise mobile and tablet go later into the day. Who sits in bed using a tablet
more mobile before going to sleep? Okay so that's probably you up this end.

You can see that mobile is now the bedrock of behaviour, mobile is used over
the whole day, though a bit more in the evening during sofa time.

Tablet has this double bump of morning then mega bump in the evening. 

And you can obviously see this big drop off of desktop once you go outside of
business hours.

---

### Context variables

Notes:
Context starts creating a significant number of combinations of variables and this 
can quickly spiral out of control but start by just considering device, location, 
time and speed and you'll get a surprising number of contexts from them to 
consider in your design.

---

### Planning for this data in our designs

- When can I tell what someone is going to do?
- Why did they do that at that point?
* What else could I know that will help the user to their end goal?

Notes:
When I'm working on an experience, I'm constantly looking for data about what people
are doing and what more can I know that will help take this experience from
good to great. There's always pragmatism involved obvioously, but we can
use these variables to start the process. 

I often start by just asking these questions and go into the process from there.

---

## Creating contextually responsive experiences

Notes:
Now you understand what data is important and how to get it it's time to
look at the types of experiences you can go and create. Unfortunately at the
moment the examples are a bit thin on the ground because we're only starting
to think about this type of design.

My general approach is to consider desire lines, links between the physical
and the digital and response to failure.

---

### Understanding desire lines
<!-- .slide: data-background="/images/desireline.jpg" -->

(CC) Flickr <!-- .element: class="attribution" -->
[webwetwork](https://www.flickr.com/photos/wetwebwork/2847766967/)

Notes:
A desire line is when you can see from someone's behaviour what they are trying
to achieve before they get there. So We can ask questions about a user’s intent. 
What are they after? Are they exhibiting any sorts of behaviour where we can 
start predicting what they are ultimately wanting to do? Are they using our system 
in a particular way that allows us to tune the experience for that. 

---

### Surfacing content / features contextually
<!-- .slide: data-background="/images/surface.jpg" -->

(CC) Flickr <!-- .element: class="attribution" -->
[masine](https://www.flickr.com/photos/masine/11583288243)

Notes:
If we understand a desire line properly then it means we can surface content
or features contextually without the user even being aware of it. Google NOW
is probably the best example of this. Particularly to do with travel.

---

### Google Now

![](/images/googleinbox.png) <!-- .element: width="" -->

Notes:
Being able to show just as you need it the information
to do with your flights a day before to remind you and then just before your
flight, showing gate and departure information is a very good example.

Other areas of google now are a little weak - such as suggesting that every
place I search I want to go to afterwards - however flight details are 
exceptionally well handled. To the point that I just archive all my travel
details now as soon as they arrive as I know Google Now will sort them out 
when I need them.

This is what contxtual content looks like - we just need that surfaced to the
browser now too.

---

### Linking time and space
<!-- .slide: data-background="/images/timeandplace.jpg" -->

(CC) Flickr <!-- .element: class="attribution" -->
[Pabak Sarkar](https://www.flickr.com/photos/pabak/13677439224)

Notes:
Time and space go together almost always. It's rare I need to worry about my
shopping list when I'm not at the supermarket for example.

Being able to link someone's location to the time they are in is a powerful
mechanism for responsive design. If you trap details about these two things then
you can surface actions or improve the design once you know where and when
someone is at.

---

### Inbox

![](/images/inbox.png)

Notes:
Another good example of this is Google's Inbox. If you haven't used it yet
and you're a gmail user I highly recommend you request access as this is one of
the strongest examples of contextual design in existance at the moment.

The main feature as shown here is the ability to snooze a message until a time
such as later, to a place such as home or a combination of both.

Being able to remind you to take action on something when you're in the right
time and place to do it is very interesting and seeing how this develops beyond
just email will be good to watch.

---

### Designing for failure
<!-- .slide: data-background="/images/surfer.jpg" -->

(CC) Flickr <!-- .element: class="attribution" -->
[Aristocats Hat](http://www.flickr.com/photos/36821100@N04/3537999137/)

Notes:
we need to consider designing in methods to allow people to correct a mistake. 
If you embrace the chaos of contextually responsive design you ARE going to 
make mistakes in what you put to the user but they are good opportunities to learn.

So in your design process you need to do two things. 

---

### Be transparent

![](/images/amazon.png)

Notes:
The first is to make it transparent to the user about WHY they are being provided 
with the information you're providing them. Sometimes this can be hard to 
articulate easily so you might need to work at it.

Amazon recommendations work quite well here because it tells you what you 
purchased or looked at in order to get the recommendation so you can see how
it's affecting what you're seeing.

---

### Capture failure data

![](/images/facebook.png) 

Notes:
The second is allowing the user to correct things. 

Facebook ads are a good example of this as they let you fix a problem and in 
fact they look at it as an opportunity to collect some additional data about 
WHY it was no good for you which helps them with their targeting ongoing.

Don't pass up the opportunity to learn from your mistakes. Contextually
responsive design is inherently fuzzy so you will make mistakes. Always remember
to let the user take action to correct things if needed.

---

### Designing a contextually responsive experience

![](/images/sms.png) <!-- .element: width="40%" -->

Notes:
Remember this? The SMS I got from Vodafone. If you were looking closely you
would have noticed the date. I had 1GB left on the day I was going to switch 
to my new billing month and I got a warning about it.

To make this experience better Voda should be checking the trajectory of my 
usage and predicting when I'm going to fall short. If I'm highly unlikely
such as having 25% of my monthly plan left with only a day to do then don't
even warn me - it's burning contact for no reason.

Likewise though, if I'm going to fall short by a tiny amount then make a 
call on just providing grace. Why bother charging for what may be a 1% overage
for a month. Indeed send a text message like this:

---

### A better message

> "You just went over your monthly limit. Don't worry - anything you use within
> reason is on us until tomorrow when you reset."

Notes:
Now that's a more interesting experience for the end user I think you'll agree.

---

## Summary

* Design for context from the outset
* Use location, time, speed, device to start
* Learn from failure

Notes:
To finish off then. We've looked at what is contextually responsive design,
how to get the data we need to facilitate it and looked at some examples
of how to do it in practice.

If you take nothing more away, these three things will serve you well.
Build context into your process from the start, work with some core variables
and build up familiarity and make sure you learn from your fails.

---

# Datatium - Data as material for contextually responsive design
<!-- .slide: class="title" -->

Be Responsive, 8 September, 2015 <!-- .element: class="location" -->

Andrew Fisher @ajfisher <!-- .element: class="author" -->

Slides: http://datatium.ajf.io/ <!-- .element: class="slideslink" -->

Notes:
Thanks very much for listening. All my details are here, including the link to
the html slides and if you have any questions I'd be happy to answer them now,
after or ping me via twitter.
