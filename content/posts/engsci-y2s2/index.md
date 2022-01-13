---
title: "Engsci Year 2 Winter"
date: 2022-01-10T19:53:48-05:00
draft: true
katex: true
back_to_top: true
tags: ["notes", "engsci"]
---

{{< toc >}}


## TEP 327

Why do engineers need to know about law?  
- Engineering ends up stepping across a lot of jurisdictions, so we kinda need to know about it.


Law is ...
- very territorial: must note jurisdiction
  - Must develop intuition for jurisdiction (See [section 91]({{<ref "#resources">}}))
  - Generally:
    - Things outside of Canada & maintained *across* Canada -- Federal
    - Things that are managed within Canada and aren't necessarily consistent (local effect) -- Provincial
    - Things that Provincial gov. doesn't want to deal with -- Municipal (via mandate)
    - And for everything -- consider case law, etc.
- always dependent on context and subject to interpretation; the law's wording can stay constant but the interpretation can change over time
  - There are standard methods of interpretation (Living tree vs originalist, strict literal vs commercial reality/intentions)
  - Canada is bijural (both civil and common law)
    - Note difference between public (refers to society as a whole) and private law (individual interactions)


### Resources
- [Canadian Distribution of Legislative Powers](https://laws-lois.justice.gc.ca/eng/const/page-3.html)


## ECE286


### Lecture 1

#### Coin flip example & combining probabilities

Outcomes denoted by variables, i.e. for coin clip \\( H \\), \\( T \\). Probability of outcome is denoted by \\( P(X) \\), where \\( X \\) is the outcome. We must have \\( \sum(P) = 1 \\) since \\( 100% \\).

Suppose \\( P(H) = 0.3 \\) , \\( P(T) = 0.7 \\). 

Then, $$P(HT) = P(H)P(T) = 0.3 \times 0.7 = 0.21 $$ 
$$ P(HT) = P(H)P(T) = 0.3 \times 0.7 = 0.21 $$
$$ P(HT or TH) = P(H)P(T) + P(T)P(H) = 0.3 \times 0.7 + 0.7 \times 0.3 = 0.42 $$

#### Sets and events

**Sample space**: set of a\ell possible outcomes.
E.x. 
- coin flip: \\( S = {H, T} \\)
- roll of a die: \\( S = {1,2,3,4,5,6} \\)
- roll of a die but only care even/odd: \\( S = {even, odd} \\)

**Event**: a subset of sample space  

For example, each element, \\(e \in S = {1,2,3,4,5,6} \\) are the elements of S for a die.

**Complement of an event A w.r.t. S**: everything in \\( S \\) and not \\( A \\), denoted \\( A' \\).  
Example: for a die, \\( {1, 2} \\) is the complement of \\( {3,4,5,6} \\)



**Intersection of two events**: everything in \\( A \\) *and* \\( B \\), denoted \\( A \cap B \\)

**Union of two events**: everything in \\( A \\) *or* \\( B \\), denoted \\( A \cup B \\)
















































