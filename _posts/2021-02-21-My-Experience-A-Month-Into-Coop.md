---
title: My Experience A Month Into Co-op
layout: post
categories: [Coop Experiences]
tags: [coop, software, thoughts]
date: 2022-02-21
---

*I wrote the bulk of this post back in October, but left some sections blank to fill in later. Apart from the descriptions of what I did, I feel like a lot of my thoughts and opinions expressed here are more nuanced now than they were when I truly started back a few months ago. But again, I'm choosing to leave them mostly preserved.*

-----
**Circa October 4, 2021**

I'm now six weeks in. Wow, time is flying by. I can't believe I'm a quarter of the way through. I feel like I've done practically nothing. But really, I'm sure I've learned a lot (at least, that's what I want to tell myself). I feel like I went through a mini Dunning-Kruger last week (and maybe the week before), where I finally began to get React and was able to be productive. Or at least, I thought I did, until I started working more on it this week. Bam, one single change requested on a ticket, and suddenly my entire understanding of React was threatened. I was shooketh.

In any event, in an attempt to maybe make myself feel better, and just for general posterity purposes, I wanted to take the time to think through what I actually learned (or at least gained experience in). Ideally, I'll write more of these as I progress through my co-op.

## Tech things

### A new language/framework

Really, this was just HTML, CSS, Javascript/Typescript, and React + Recoil (state management). I thought I kind of got HTML+CSS, but
it wasn't until I started working on the front-end that I realized I didn't fully understand the Document Object Model (DOM), and CSS
was much trickier than I expected. Not that I now fully understand it, that is. I at least know how to work with HTML forms, though.

### Working on the Front End

I've mainly spent my time this past month working on the front end. If I were to try and frame this in a more impressive light, I'd say I've been learning how to build client-side applications. Before I started, I don't think I fully understood the notion of the front-end being the programming that is done for the "client" part of a software product.

### A testing framework

I started learning how to use Jest, and how the testing framework is applied in the JS/TS ecosystem. This has actually been really frustrating, because I haven't had to really work with mocks before. And testing with web applications is a lot harder than console applications you make, because of the nature of certain things that can't ever really be mocked (at least, as far as I understand).

### Using Git Effectively

This nearly took up a solid half of the 5 weeks, I'd say (if I count all the dilly dallying and meandering I spent trying to figure out things and fretting over whether to try something, instead of just pushing it and seeing what would happen). Specifically, git rebasing, merging, squashing, etc.

### Exposure to the Full Stack

When I say exposure, I really mean just exposure. I haven't worked on the full stack at all. But I'm beginning to see the entire stack, and hopefully, by the end of this placement, I'll have an understanding of how all these things talk to each other.

## Miscellaneous Thoughts

### Dev environments are complicated

I learned about the different types of environments that exist in the company I work for. I had no idea just how many environments for testing and demoing there could be, as well as why the config could be so confusing between the two.

### Enterprise applications are complicated

I get why it takes days to solve a bug now (granted, all the bugs I've been given would probably be solvable by a competent dev in less than a day). Codebases can get pretty big. It's one thing to hear about giant codebases, and it's another to spend days pouring over it. I think the biggest moment of clarity for me that drove this home was when I was feeling anxious about being able to solve the first ticket I had been given, thinking of pulling an all-nighter to catch up, and then realizing that I could pull multiple all-nighters and probably still not understand the entire codebase. That had previously been my ultimate fallback in school, and to realize that was not an option really shifted my perspective.

And even in small applications, the microservice architecture (not sure if I'm using that term right) means there's so many moving parts that it's hard to really understand the whole system, let alone test and debug.

### Software is living and evolving

Software is usually seen as a product that you ship, but working in a Software-as-as-Service (SaaS) company for the first time, I'm getting to see just how software can be iteratively worked on and actively maintained (agile!). Relatedly, I learned that incident management is a thing. It's mostly been exciting for me so far, because every time an incident occurs it's like I'm watching a movie unfold. Of course, I imagine I'll quickly feel different once I actually get more involved in work and potentially get involved in an incident!

### Tooling is complicated

So many damn dependencies and mini hurdles you have to get over to get your developer environment setup. My first two weeks were eaten up by this, along with orientation. And to be completely honest, half the stuff I did, I didn't fully understand why I was doing them in the first place.

## What I'd like to learn this next month

- **Fundamental Web Concepts via MDN** - this is mainly to improve my ability to work on the front end.
- **Touch the Backend** - would be nice to work on C# eventually.

Also, I do have a bit of a confession to make. I don't think I realized for the first 2 or 3 weeks that what our team does is basically within the realm of full stack web development. Yeah, kinda slow on the uptake, right? But then again, until about a little over a month ago, I didn't even really realize authentication was a software developer's job. Or that it even was "software" that needed working on to begin with.
