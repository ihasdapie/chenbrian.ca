---
title: "PEY @ Uber"
slug: "Uber_pey"
date: 2024-11-14T08:43:59-05:00
draft: true
katex: true
toc: true
tags: []
website_carbon: true
---


# PEY @ Uber

I did my 12-month [PEY](https://discover.engineering.utoronto.ca/experiential-learning/professional-experience-year-pey/) co-op with Uber, working under the Maps Production engineering team in the bay area.
Here are some thoughts and reflections on my time spent there.


# Getting the role

I found the position through the UofT PEY job portal around October 2023. There was one OA with two or three questions. I recall the questions being more difficult than most OAs I had done in the past, but not more difficult than those from quant firms. I heard back within a few days, and then proceeded to an in-person interview at the UofT career center. The in-person interview involved solving a LC medium on a whiteboard, as well as fielding follow-up questions re-contextualizing the problem (e.g. how to make it thread-safe, durable to failure, optimizations, etc). I received a verbal offer about a week or two later, and signed a contract shortly after.
The offer was for a general SWE intern position, and I would not receive my team nor location until a few months later.
Overall I found the interview-to-offer process to be professional and well-managed, though it took longer than I would have liked to receive my location match which made housing and other logistics difficult to plan.

# Experience

I had an excellent time interning at Uber. The work was engaging, the team excellent, and the culture accommodating and accepting.
My internship began in September 2024 at the Sunnyvale office. The Sunnyvale and San Francisco offices are sister offices, and my team worked out of both.
San Francisco is definitely the more interesting and dynamic city to be in, and the 4 other PEY interns worked out of that office.

I began the internship onboarding via their standard "Engucation" program, which is a series of lectures and workshops designed to get you up to speed on the company's tech stack, culture, and practices, as taught by current engineers.
I found this to be an effective way to get a general understanding of Uber systems while getting to know some other staff at the company.
That being said, I found the onboarding to be a bit too long and drawn out, and not well localized to the specific work on my team.
In practice I followed along for the first two or three sessions, and then proceeded with my team's internal documentation and onboarding documents instead.

I got the opportunity to work directly in the hot path of the team's projects, and was given a lot of autonomy to design and implement solutions as well as to make decisions on the direction of the project.
I found this to be a great learning experience, and I was able to grow a lot as an engineer during my time there -- which I will discuss in more detail further down.


A brief summary of some selected projects is as follows:

- In particular, I worked on a project to improve the efficiency and safety of the [CRE](https://www.uber.com/en-CA/blog/capacity-recommendation-engine/) autoscaler, which manages the scaling of most of Uber's stateless services at the time.
- gc signals, base fx libs
- memory based scaling
- nonlinear garbage collector behaviour (exponential)
- memory optimizations (cross-functional)


One thing I appreciated about the engineering process at Uber was the RFC process.
New features began as an ERD (Engineering Review Document), which is a document that outlines the problem, the proposed solution, and the trade-offs involved.
Security considerations, performance, cost, etc. are all considered. Once this goes through sufficient review, possibly backed in tandem with proof-of-concept implementation work, the project is implemented.
That being said, what I appreciated most about the process was that it was not a hard requirement.
Smaller features did not necessarily need to go through this process, and the process was flexible enough to be adapted to the needs of the project.
I felt like this was a good balance between the rigidity of a process and the flexibility needed to get things done.

, since it was a core multimillion dollar service, I received comments from across the company, including from the language foundations teams, the service owners, SREs, etc. I recall replying to one comment with a little bit of snark, and then realizing that the person I was replying to was a distinguished engineer. 

In summary, as an intern, I had the opportunity to receive top-notch mentorship, work on impactful projects, and grow as an engineer.
Not only was there well-scoped projects that the team was excited to offer me (the typical intern experience), I was also given the leg room to engage with the day-to-day work of the team and to identify and solve problems that I found interesting inside _and out (!)_ of the team's scope.





<!-- -    \item I help ensure reliable and efficient operation of Uber's mapping and core services via participating in on-call rotation, incident response, and service ownership on the mapping production engineering (SRE) team, primarily focusing on capacity safety, efficiency, and performance
    \item Designed \& delivered extension to \chref{https://www.uber.com/blog/capacity-recommendation-engine/}{CRE} to build CPU \& throughput-informed rectangular auto-scaling system for Uber's stateless microservices to improve failover safety and reduce cost. Approximately half of Uber's stateless compute is managed by this system.
    \item Diagnosed and fixed severe memory allocation issue causing excess garbage collector load, service degradation, and outages in a critical core service (>2.5 mil RPS) via `hacking' the go runtime; reduced service compute cost by >\$700,000 while improving latency and reliability
    \item Worked with language foundation teams to improve go and java service observability into garbage collector performance. For example, I identified a non-linear relationship in GC signals for use to predict service performance degradation under high load
    \item Developing end-to-end memory leak detection system including Go \& JVM garbage collector monitoring, auto-scaling, and load-testing tooling -->



https://www.tournamentsoftware.com/sport/teamstats.aspx?id=2F4ED393-50FB-44F4-B72C-D8C2883CF5B3&tid=142











# Team; Cristian, Haarith, etc


# FOOD

# 12 month or not to 12 month

some interns were already FT by the time I finished



# Learnings

## How to be a good engineer

- Learning from  dan heller


# Tips and advice; moving to california, etc


# Take your PTO


# Tips 

Banking
Housing
Taxes


# Special thanks

- Heather Henderson 
- Kirk Ireland
- Haarith Deverjan
- Cristian Velequez
- Jianing He
- Shuming Peng
- 

