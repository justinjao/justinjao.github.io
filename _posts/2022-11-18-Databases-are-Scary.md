# Databases are Scary

-----

**Another one from the backlog, with some small touchups and add-ons. This one's originally dated Ocotober 16th (1am, so technically October 15th). Interestingly, I wrote this roughly a week after I drafted up my first post on (my first impressions of my co-op)[https://justinjao.github.io/co-op/My-Experience-A-Month-Into-Coop.html] So pretty much right after I talked about how the incident slack channel was all currently popcorn viewing for me. I also called the fact that this would probably change fairly quickly. I don't think I expected my perspective to change that quickly though!**

-----

So, I touched a database today. Not for the first time, but certainly the most extensively. I was basically transferring some customer data from one database to another. So I actually inserted some data into a production database. It wasn't until halfway into what I was doing that it hit me that I was touching a live production database, and that I could screw it up.

Normally, our team would have done this during off-hours, to avoid impacting the customer. And as an intern, I wouldn't have been required to do this. But my team was allowing me to shadow them during our support days (we did monthly rotations of support, with certain developers taking point on different days), and on this particular day I was shadowing/on support (i.e. I was point of contact, but basically got hand-held at every step since I had no clue what to do). And this customer was extremely small, and likely hadn't even gone live with their business yet. So there I was, moving data from one database to another.


You know those horror stories you hear on reddit about the intern deleting the prod database on their first day? Yeah,
that flashed through my mind. My team and I even joked about the fact that I was similarly touching a prod DB (I'm about a month and a half in,
and I wasn't really doing something that important and breaking as deleting a whole DB, so it wasn't quite the same thing, but still).
And we talked about how Salseforce had a similar incident, and blamed their intern for deleting the DB, but that was on them for allowing an
intern that sort of access. And that's when it hit me, that I was touching a prod DB. 

"Oh, hardiharhar, I could delete the entire DB too."

About half an hour or so later, our service disruption channel on slack started going off about the application whose db I was altering seeing a huge
amount of errors, and our team got pinged.

Yeah, I know, right? Cue the instant stomach drop.

In my panic, I didn't realize this when I first read the slack messages, but after re-reading them, I realized the issue was initially brought up
because one of our biggest clients was facing errors with their integration of our application (that's probably why it was discovered and escalated to service disruption so quickly).

Yikes.

At this point, I was sitting in the office zoom room with my coworkers (who were helping me move the data). I was still wrapping up my task related to the db, so I asked my senior dev if I should stop what I was doing, and he quickly confirmed with a small smile that wasn't quite filled with laughter, but definitely showed that he was clearly aware of the irony of the situation. I immediately dropped what I was doing, and what followed was about 10 minutes of me waiting around while the rest of my team looked over the logs (filled with errors I couldn't really parse) to find out what was going wrong.

The whole time, I was trying to avoid spiralling, and kept thinking to myself in disbelief, "this can't be my fault, right?" All I was doing was moving some data over from one db to another. And I wasn't even moving the affected company's data (in fact, I was only moving 1 customer's data). But maybe I somehow accidentally deleted the wrong table?

(I later asked my senior developer, and he explained that at the time, his suspicion was that I had been accessing the wrong database somehow.)

After the investigation however, it turned out that it wasn't my fault, nor was it even our service's fault. It was another application owned by another team, that interfaced with our application.

But damn, that was terrifying. Up until now, the service disruption channel has been an exciting channel to watch. It felt like watching a movie and seeing incidents develop and get resolved in real time. This time however, every message was just terrifying. Real bad for my heart. I wonder if that's what it's like to be in DevOps, or incident management? Not so fun being inside the fence. I wonder if they're as panicked as I was. Probably not, because they weren't concerned it would be their fault. They're just focused on resolving things.

But yeah, anyways. That was my brush with databases. It's one thing to make a front-end change that creates a UI that users don't like. Oof, that looks off. Oh well, we'll fix it soon. To incorrectly handle business logic in the front/back-end and lead to errors in the service - ESPECIALLY on authentication, which affects everyone? Ouch, users can't access our applications. Service is down temporarily.  But potentially deleting customer data in a prod environment?

Holy crap. 

My blood ran cold for a second there.

Way less quality assurance checks before your change goes out, with less change management. And the notion of potentially losing customer data, PERMANENTLY? Sure, I know DBs can be rolled back, but to consider the alternative is bone-chilling to the core.

Databases are serious business. And when mishandled, databases can be real scary. 

Consider me humbled. I don't think I'll be underestimating databases anytime soon. Hopefully, never again, even.
