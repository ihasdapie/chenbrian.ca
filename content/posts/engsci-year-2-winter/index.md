---
title: "Engsci Year 2 Winter"
date: 2022-01-10T19:53:48-05:00
draft: false
katex: true
back_to_top: true
toc: true
tags: ["notes", "engsci"]
---


// Work in progress //






## ECE286: Probability and Statistics

### Probability

#### Coin flip example & combining probabilities

Outcomes denoted by variables, i.e. for coin clip \\( H \\), \\( T \\). Probability of outcome is denoted by \\( P(X) \\), where \\( X \\) is the outcome. We must have \\( \sum(P) = 1 \\) since \\( 100% \\).

Suppose \\( P(H) = 0.3 \\) , \\( P(T) = 0.7 \\). 

Then, $$P(HT) = P(H)P(T) = 0.3 \times 0.7 = 0.21 $$ 
$$ P(HT) = P(H)P(T) = 0.3 \times 0.7 = 0.21 $$
$$ P(HT \text{ or  } TH) = P(H)P(T) + P(T)P(H) = \\\\ 0.3 \times 0.7 + 0.7 \times 0.3 = 0.42 $$

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


#### Counting

**Multiplication Rule**: 
The total amount of outcomes is the product of the amount of outcomes in each event.
I.e. if for a sequence if \\( k \\) events \\( E_1, E_2, ..., E_k \\) with outcomes \\( S_1, S_2, ..., S_k \\)
then the total amount of outcomes is \\( \prod_{i=1}^k S_i \\)


**Permutations**: \\( n \\) distinct objects can be arranged in \\( n! \\) ways. When considering permuting a subset of size \\( r \\) taken from a set of size \\( n \\), the total number of arrangements is given by 

$$ nPr = \frac{n!}{(n-r)!} $$

If we can have repeated kinds, i.e. if there are \\( m \\) kinds of items and \\( n_k, k = 1, \dots m \\) of each kind, then there are 

$$ \frac{n!}{n_1!n_2!\dots n_m!}$$ permutations.

For example, we can order "ATLANTIC" \\( \frac{8!}{2!2!1!1!1!1!}  = 10080\\) times.


The same formula applies for finding the number of ways to arrange \\( n \\) items into \\( k \\) subsets of size \\( n_1, n_2, \dots , n_k \\)


**Combinations**: Permutations, but order doesn't matter.

$$ nCr = \binom{n}{r} = \frac{n!}{r!(n-r)!} $$

Note similarity to the partition formula; combinations can be thought as the set of partitions of size \\( 1 \\).


#### Additive Rules

For events A, B:
$$ P(A\cup B) = P(A) + P(B) - P(A\cap B)$$

For \\(  n \\) mutually exclusive events \\( A_1, A_2 ... A_n \\)
$$ P(A_1 \cup A_2 \cup ... A_n) = P(A_1) + P(A_2) + ... + P(A_n)$$

And if \\( A_1, A_2 ... A_n \\) is a partition of sample space S, 

$$ P(A_1 \cup A_2 \cup ... A_n) = P(A_1) + P(A_2) + ... + P(A_n)$$


And:
$$ P(A \cup B) + P(A) + P(B) $$

##### Conditional Probability

$$ P(B|A) = \frac{P(A\cap B}{P(A)}$$
> The probability of B occurring, given that A occurs




#### Total probability

Suppose A is an event and \\(B_1, ... B_k\\) is a partition.

> Recall: \\( B_1 ... B_k \\)) is a partition if \\( B_i \cap B_j \neq 0\\) and \\( B_1 \cup ... B_k = S\\) 

$$ P(A) = \sum_{i=1}^k P(A \cap B_i) $$


For example, if we have machines \\( B_1, B_2, B_3 \\) that make products  30%, 45%, 25% of the time (note that this forms a partition)


And that they produce 2%, 3%, 2% defective products, we can find the probability of there being a defect as 


$$ P(D) = P(B_1)P(D|B_1) + P(B_2)P(D|B_2) +P(B_3)P(D|B_3) \\\\
= (0.3 * 0.02) + (0.45 * 0.03) + (0.25 * 0.02) = 0.0245 $$


And we can get the chance it came from machine 2 by applying bayes' rule.



### Bayes' Rule & Random Variables



___
*Define*: Bayes' Rule
$$ P(C_n|A) = \frac{P(C_n)P(A|C_n)}{\sum^k_{i=1}  P(C_i)P(A|C_i)} $$

___





E.x. Probability that a defective product comes from machine 3 \\( B_3 \\)



$$P(B_3|D) = \frac{P(B_3)P(D|B_3)}{P(D)} = \frac{0.25*0.02}{0.0245} = 10/49$$
> *Given* that the product is defective, what is the chance it came from machine 3?

Bayes' rule is useful when we have limited information.
For example if we're trying to check if we have a disease:
Given:
1. Chance of having disease \\( P(D) \\) = \\( 1/1000 \\)
2. A test kit that has a true positive rate \\( P(T = 1|D) = 0.7 \\), false pos \\(P(T=1| not D) = 0.05\\)


> What is \\(  P(D|T = 1) \\)? (Chance of having disease given test kit is true positive?)

$$ P(D|T=1) = \frac{P(T=1|D)P(D)}{P(T=1|D)P(D)+P(T=1|not D)P(not D) } \\\\
= (0.7 \times 0.001 ) / (0.7 \times 0.001 + 0.05 \times 0.999) \approx 0.014 $$

> This may look like a number that's really off. Why would a positive test result only 
> indicate a 1.4% change of having the disease? 
> Must recall: this as the "inverse" of the true positive rate (chance of testing positive if you have the disease).


This can be applied in sequential state estimation.
Given
  - State \\( X_t \\)
  - Observation \\( Y_t = g(X_t) \\)
  - Dynamics \\( P(X_{t+1} | X_t) \\) (typically Markov chain[^markov_chain]/LTI (Linear Time-Invariant)[^lti_sys] system)
  > Markov chains are a stochastic model where the probability of each state depends only on the previous state

We can build an estimator...

$$ P(Y_{t+1}|X_{t+1}) = \frac{P(Y_{t+1}|X_{t+1},X_t)P(X_{t+1}|X_t)}{P(Y_{t+1})}$$

[^markov_chain]: https://en.wikipedia.org/wiki/Markov_chain
[^lti_sys]: https://en.wikipedia.org/wiki/Linear_time-invariant_system

- Optimal solution to LTI system problem is the [Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter). Often used for vehicle dynamics, circuits, or anything that requires a long look into the "future"
- Example application of Markov chains could be a machine with a few states {active, inactive, broken}.
  - Markov chains can sometimes be directly computable & are often central to DP/RL problems



#### Random Variables


> A **Random** variable is a function that associates a real number with each element in the sample space

E.x if we're testing some components and \\( N \\) denotes non-defective and \\( D \\) denotes defective,

$$ S = \\{NNN, NND, NDN, DNN, NDD, DND, DDN, DDD\\} $$

and we are concerned about the number of defective items,
the outcome (total no. of defective items) can be assumed by a *random variable*, let's call it \\( X \\), which can take on the values \\( \\{0, 1, 2, 3 \\} \\).
So each value of \\(x \in X  \\)  represents an event that is a subset of the sample space.
For example \\(  x = 2 \\) corresponds to a subset \\( \\{DDN, DND, NDD\\} \\).


- Discrete random variables take on finite/countable values; denote w/ capital letters
- Continuous random variables take on values in an interval of \\( \mathbb{R} \\)
  - Has a probability of 0 of assuming *exactly* any of its values
  - Denote individual values with the lowercase letter equivalent

### Distributions

#### Discrete Probability Distributions
> Probability that a discrete RV takes on each value

I.e. if \\( X \\) is the # of heads for 3 coin flips

- \\( P(X=0) = 1/8 \\)
- \\( P(X=1) = 3/8 \\)
- \\( P(X=2) = 3/8 \\)
- \\( P(X=3) = 1/8 \\)


#### Probability function/mass function/distribution (PMF)

___ 
*Define*: \\( f(x) \\) is a PMF of the discrete RX \\( X \\) if \\(  \forall x \in X \\)
1. \\( f(x) \geq 0 \\)
2. \\( \sum_x f(x) = 1 \\)
3. \\( P(X=x) = f(x) \\)

___



#### Cumulative Distribution Function

> When we want to find if the observed value of a random variable will be less than or equal to some real number \\( x \\). 

___
*Define*: Cumulative Distribution Function (\\( CDF \\))

$$ F(x) = P(X \leq x) = \sum_{t\leq x} f(t), \hspace{1cm} - \infty < x < \infty $$

___




> Note that this function is not only defined for the values assumed by the random variable, but for all real numbers as well.


#### Continuous Probability Distributions

> Recall: Continuous RV have a probability of 0 of assuming *exactly* any of its values.

Consider a RV whose values are the lengths of hair on one's head. There are an infinite number of hair lengths between any two values, and as such we assign a probability of 0 to each event. 
Instead we concern ourselves with probabilities across intervals.



___
*Define*: Probability Density Function (\\( PDF \\))

\\( f(x) \\) is a \\( pdf \\) for the continuous random variable \\( X \\) if 
1. \\( f(x) \geq 0 \\)
2. \\( \int_{-\infty}^\infty f(x) = 1 \\)
3. \\( P(a < X < b)= \int_a^bf(x) \\)

___

> We can apply the CDF concept to a continuous RV with a density function as well

___
*Define*: Cumulative Distribution Function (\\( CDF \\))

$$ F(x) = P(X \leq x) = \int_{-\infty}^x f(t) dt, \hspace{1cm} - \infty < x < \infty $$

___

A nice result can then be obtained by applying the fundamental theorem of calculus,

$$ P(a < X < b) = F(b) - F(a) $$

and 

$$ f(x) = \frac{dF(x)}{dx} $$


> NOTE: Probability *mass* functions describe the probability of *discrete* distributions, whereas probability *density* functions describe *continuous* distributions.


#### Joint Probability Distributions
> What if we want to deal with more than one random variable at a time? 



___
*Define*: \\( f(x, y) \\) is a joint probability distribution / probability mass function  of discrete RV \\( X, Y \\) if:

1. \\( f(x, y) \geq 0 \\)
2. \\( \sum_x \sum_y f(x, y) = 1 \\)
3. \\( P(X = x, Y = y)= f(x, y) \\)

\\( \forall \\) region \\( A \\) in the \\( xy \\) plane, \\( P[(X,Y) \in A] = \sum \sum_A f(x, y) \\)

> e.x if, for a car that needs service, \\( X \\) denotes distance driven on a set of tires and \\( Y \\) denotes no. of tires to be replaced, then \\( f(10000, 2) \\) is the probability that it has driven for over 10000 distance units and the car needs 2 new tires.

___

For example, if we select 2 ballpoint pens from a box containing 3 blue/2 red/3 green pens, and if \\( X \\) is the no. of blue pens selected and \\( Y \\) the no. of red pens selected,

The joint probability function is the set is

$$f(x,y) = (0,0), (0,1), (1,0), (1,1), (0,2), (2,0)$$

And for \\( A = \\{ (x, y) | x + y \leq 1 \\}\\)


$$ P[(X, Y) \in A] = P( X + Y \leq 1 ) = f(0,0) + f(0,1) + f(1, 0)  \\\\ 
= \frac{3}{28} + \frac{3}{14} + \frac{9}{28} = \frac{9}{14} $$

The same can be applied to continuous probability distributions as well

___
*Define*: \\( f(x, y) \\) is a joint density function of continuous RV \\( X, Y \\) if:

1. \\( f(x, y) \geq 0 \\)
2. \\( \sum_{-\infty}^{\infty} \sum_{-\infty}^{\infty} f(x, y) = 1 \\)
3. \\( P[(X, Y) \in A] = \int \int_A f(x, y) dx dy\\) for any region A in the \\( xy \\) plane

> TLDR; integrating over whole region gives probability of 1, integrating over a subregion gives the probability of an event within that range.

___

But what if we want to inspect the probabilities dist. of a specific RV within the joint distribution?



___
*Define*: the marginal distributions of \\( X \\), \\( g(x) \\), given joint distribution \\( f(x, y) \\), is:

for discrete case:

$$ g(x) = \sum_y f(x,y) $$

for continuous case:

$$ g(x) = \int_{-\infty}^{\infty} f(x, y) dy$$

> The same follows for finding the marginal distribution of \\( Y \\), \\( h(y) \\)
___




___

*Define*: Conditional probability distribution \\( P(y|x) \\) 

$$ f(y|x) = \frac{f(x,y)}{g(x)}, g(x) > 0$$

___
For example if we want to find if a discrete random variable \\( X \\) falls in between \\( a  \\) and \\( b \\) when \\( Y \\) is known, we can evaluate

$$ P(a < X < b | Y = y) = \int_a^bf(x|y)dx = \int_a^b \frac{f(x,y)}{h(y)}dx $$



___

*Define*: Statistical Independence

Given RV \\( X \\) and \\( Y \\) with joint probability distribution \\( f(x, y) \\) and marginal distributions \\( g(x) \\) and \\( h(y) \\) respectively, \\( X \\) and \\( Y \\) are statistically independent *if and only if*

$$ f(x,y) = g(x)h(y) $$

for all values of \\( x, y \\) in their range.

We can generalize this to a set of random variables \\( X, Y, Z, ... \\) with joint probability distribution \\( f(x, y, z, ...) \\) and marginal distributions \\( g(x), h(y), i(z), ... \\) respectively.


\\( X, Y, Z, ... \\) are statistically independent *if and only if*

$$ f(x, y, z, ...) = f_x(x) f_y (y)f_z(z)...$$

> Recall: doesn't this look a lot like when we did all the linear independence stuff back in MAT185?

___



___

*Define*: Expectation/Mean of RV

> Or: What would the average value be in the long run if we keep on sampling from the distribution

Let \\( X \\) be a random variable with probability distribution \\( f(x) \\)

$$ \mu = E[X] = \int_{-\infty}^\infty x f(x) dx $$

if \\( g(X) \\) is a function of \\( X \\),

$$ \mu = E[g(X)] = \int_{-\infty}^\infty g(x)f(x) dx $$

and this can be generalized to joint distributions as well

$$ \mu = E[g(X, Y)] = \int_{-\infty}^\infty \int_{-\infty}^\infty g(x, y)f(x, y) dx dy $$

This value is of special importance as it describes where the probability distribution is centered.


___



___

*Define*: Variance

> Or: how much the distribution spreads out

For finding the variance of a random variable \\( g(X) \\):

Discrete:
$$ \sigma^2 = E[(g(X)-\mu)^2] = \sum_x (x-\mu)^2 f(x)$$

Continuous:
$$ \sigma^2 = E[(g(X)-\mu)^2] = \int_{-\infty}^{\infty} (x-\mu)^2 f(x)dx   $$

> to find the variance of just \\( X \\), use \\( g(X) = X \\)


A simplified form of the above to find variance of RV \\( X \\):

$$ \sigma^2 = E(X^2) - \mu^2 $$

___


___

*Define*: Covariance

Given RV \\( X, Y \\) and  joint probability distribution \\( f(x, y) \\), how closely are they associated? 

Discrete:
$$ \sigma_{XY} = E[(X-\mu_X)(Y-\mu_Y)] = \sum_x \sum_y f(x,y) (x-\mu_X)(y-\mu_Y) $$

Continuous:

$$ \sigma_{XY} = E[(X-\mu_X)(Y-\mu_Y)] = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x,y) (x-\mu_X)(y-\mu_Y) dx dy $$

A simplified form of the above:

$$ \sigma_{XY} = E(XY) - \mu_x\mu_y $$

- If large values of \\( X \\) often result in large values of \\( Y \\), the covariance is positive. 
- If large values of \\( X \\) often result in small values of \\( Y \\), the covariance is negative.
  - Sign of covariance denotes positive/negative relationship between \\( X \\), \\( Y \\).
  - If \\( X, Y \\) are statistically independent, the covariance is 0.
  > Note: the reverse is not always true since covariance only describes a linear relationship between two RV


Correlation coefficient of \\( X, Y \\):

$$ \rho_{XY} = \frac{\sigma_{XY}}{\sigma_X\sigma_Y} $$

___

#### Linear Combinations of Random Variables


\\( p(x) \\) is linear if it satisfies the linearity test:
- \\( p(ax+b) = ap(x) + bp(x) \\) for constant \\( a \\), constant \\( b \\).

With the help of some integrals we can show that expectation is linear as well:

$$ E[aX + b] = aE[X] + b $$

or more generally,

$$ E[g(X) \pm h(X)] = E[g(X)] \pm E[h(X)] $$

The same also applies to functions of >1 random variables.
This leads to a number of properties, the one of note that isn't immediately obvious is that

$$ E(XY) = E(X)E(Y)$$

> the above theorem may be applied to show that if X, Y are two independent random variables, then \\( \sigma_{XY} = 0 \\)



___

*Theorem*: if \\( X \\) and \\( Y \\) are random variables with joint probability distribution \\( f(x, y) \\) and \\( b, c \\) are constants, then

$$ \sigma_{aX + bY + c} = a^2\sigma_X^2 + b^2\sigma_Y^2 + 2ab\sigma_{XY} $$

> If \\( X \\) and \\( Y \\) are random variables, what would the covariance of a linear combination of them be? 
> Note that the covariance doesn't depend on \\( c \\)

___






#### Discrete Distributions

---

*Define*: Binomial Distribution

A discrete distribution that models the number of successes in a Bernoulli process, which is a process that satisfies the following:

1. An experiment that may be repeated many times
2. Each trial has a boolean outcome
3. The outcome probability is trial-constant
4. Repeated trials are independent


Some properties:


Probability of \\(  x \\) 1s and \\( 1-x \\) 0s in some order is \\( p^x(1-p)^{n-x} \\)

No. of ways to have \\(  x \\) 1s and \\( 1-x \\) 0s is
$$ \binom{n}{x} $$

Therefore the binomial distribution may be presented as:

$$ b(x; n, p) =  \binom{n}{x} p^x(1-p)^{n-x} $$

Expectation:
$$ E[X] = \sum_{x=0}^n x \binom{n}{x} p^x(1-p)^{n-x} = np $$

Variance:
> Note: each trial is independent \\( \sigma_{Y_j Y_k} = 0 \qquad, k \neq j \\)
$$ \sigma_X^2 = np(1-p) $$

___



___

*Define*: Multinomial Distribution

> A discrete distribution that can have \\( m \\) outcomes instead of the  \\( 2 \\) of the binomial distribution.

$$ f(x_1, x_2 ..., x_k; p_1, p_2, ... p_k, n) \\\\ 
= \binom{n}{ x_1 ... x_k } p_1^{x_1}, p_2^{x_2} ... p_k^{x_k}  $$
___




___

*Define*: Hypergeometric Distribution

> Hypergeometric distributions model sampling without replacement, whereas multinomial distributions model sampling with replacement

A hypergeometric distribution \\( h(x; N, n, k) \\) is the probability distribution of the hypergeometric random variable which represents the no. of successes of a hypergeometric experiment (that's a lot of hypergeometric), which is an experiment where:
1. A random sample of size \\( n \\) is drawn \\( N \\) items without replacement
2. Of the \\( N \\) items, \\( k \\) are successes and \\( N-k \\) are failures.

Mean:
$$ \mu = \frac{nk}{N} $$
Variance:
$$ \sigma^2 = \frac{N-n}{N-1} \cdot n \cdot \frac{k}{N} ( 1 - \frac{k}{N} ) $$

PMF:

$$ h(x; N, n, K) = \frac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}} $$


___


#### Negative Binomial & Geometric Distributions
> Instead of finding the probability of \\( x \\) successes in a fixed \\( n \\) trials, negative experiments are interested in the probability that the \\( k \\)th success occurs on the \\( x \\)th trial

___

*Define*: Negative Binomial

$$ b*(x; k, p) = \binom{x-1}{k-1} p^k(1-p)^{x-k} $$

Intuition:
- on the \\( x \\)th trial the chance of \\( k-1 \\) successes in the last \\( x-1 \\) trials is \\( b(k-1; x-1, p) = \binom{x-1}{k-1}p^{k-1}(1-p)^{x-k} \\)
- Extend that to \\( x, k \\), observe that \\( b*(x;k,p) = pb(k-1;x-1, p) \\) and so forth

___


___

*Define*: Geometric Distribution

> Repeated trials with probability of success \\( p \\); can be thought of as a negative binomial distribution with \\( k = 1 \\)

$$ g(x;p) = b*(x; 1, p) = p(1-p)^{x-1} $$

Properties
- \\(  \mu = \frac{1}{p} \\)
- \\(  \sigma^2 = \frac{(1-p)}{p^2} \\)


> Example application: playing a game where the opponent wins 90% of the time. How many games until the first win? \\( g(x; 0.1) = 0.1(0.9)^{x-1} = 1/0.1 = 10 \\)

___

#### Poisson Distribution
A Poisson distribution models the probability distribution of the Poisson random variable which represents the numerical output of Poisson experiments in a Poisson process
> That's a lot of Poisson!

A Poisson process has the following properties:
1. The number of outcomes occurring during one interval is independent of others, i.e. the process is stateless
2. The probability that a single outcome will occur in an interval is proportional to the size of the interval and does not depend on the no. of outcomes outside of that interval
3. The probability that > 1 outcome will occur in such a short time interval or fall in a small one is negligible


___

*Define*: Poisson probability distribution

$$ p(x, \lambda t) = \frac{e^{-\lambda t} ( \lambda t )^x}{x!} \qquad, x \ge  0 \in \mathbb{Z}$$

- \\( \lambda \\) is the rate of occurrence of the event per unit in interval
- Mean: \\( \mu = \lambda \\)
- Variance: \\( \sigma^2 = \lambda \\)

___


Note that we can also write the Poisson distribution as a limit of the binomial distribution

$$ \lim_{n \to \infty, p \to 0} b(x; n, p) \\\\
= \lim_{n \to \infty, p \to 0} \frac{n(n-1) ... (n-x+1)}{x!} \lambda/n)^x(\frac{\lambda}{\lambda/n})^{n-x} \\\\ 
= \lim_{n \to \infty, p \to 0} \frac{n^x}{x!} (\lambda/n)^x (1-\lambda/x)^{n-x} \\\\
= \frac{\lambda^x}{x!} \lim_{n \to \infty, p \to 0} e^{-\lambda}  = \frac{\lambda^x}{x!}e ^ {-\lambda}  \\\\
= p(x; \lambda)  \\\\ $$










## ECE259: Electromagnetism

Electromagnetic field is a vector quantity given by a magnitude \\( E \\) and unit vector \\( \hat{a} \\), and is commonly found as the force exerted on a positive test charge \\( q \\).

$$ \vec{E}= E\hat{a}_E = \frac{\hat{F}}{q} = q\vec{E}$$


We can expand on this to find the force exerted by a point charge at varying distances \\( r \\) from the charge, noting that \\( k = \frac{1}{4\pi E_o}\\), where \\( E_o \\) is the permittivity of free space.

$$ \vec{E} = \frac{1}{k} \frac{q_{source}}{r^2} \hat{a}_e $$


and this can be further generalized for a system of charges that are not necessarily at the origin


$$ \vec{E_{sys}} = \frac{1}{k}\sum_k \frac{q_k}{|\vec{R}-\vec{R'_k}|^3}(\vec{R} - \vec{R'_k}) $$


### Vector Calculus Review

#### Coordinate Systems

**Cylindrical \\(( r_p, \phi_p, z_p)\\)**: 

**Note**: When adding vectors in non-Cartesian coordinate systems we cannot just add the components because the *direction* of the unit vectors can change.
> When adding vectors in non-Cartesian coordinate systems we must first convert the vectors to Cartesian coordinates

**Cylindrical -> Cartesian**:
$$ r_p = \sqrt{x_p^2 + y_p^2}  $$
$$ \phi_p = \arctan(y_p/x_p) $$
$$ z_p = z_p $$

**Cartesian -> Cylindrical**:
$$ x_p = r_p \cos(\phi_p) $$
$$ y_p = r_p \sin(\phi_p) $$
$$ z_p = z_p $$

**Spherical \\(( r_p, \theta_p, \phi_p)\\)**: 

> \\( \theta \\) gives angle w.r.t the z-axis, \\( \phi \\) gives angle w.r.t the x-axis

**Cartesian -> Spherical**:
$$ r_p = \sqrt{x_p^2 + y_p^2 + x_p^2}  $$
$$ \theta_p = \arccos{\frac{z}{\sqrt{x_p^2 + y_p^2 + z_p^2}  }}$$
$$ \phi_p = \arctan(y_p/x_p) $$

**Spherical -> Cartesian**:
$$ x_p = r_p \sin{\theta_p}\cos{\phi_p} $$
$$ y_p = r_p \sin{\theta_p}\sin{\phi_p} $$
$$ z_p = r_p \cos{\theta_p}$$

![](img/coordinate_transformations.png)
> From reference sheet


#### Integration

Multidimensional integration in different coordinate systems can largely be done just by finding the appropriate differential element and then inserting it into the appropriate formula.


- Line integrals:
$$ -\int_A^B{\vec{E} \cdot d \vec{l}} $$
> example application: finding potential difference


- Surface integrals:

$$ \int_S{\vec{D}\cdot d\vec{s}} $$
> Example application: finding flux, etc.
- Volume integrals:

$$\int_V{ P dV } $$
> example application: finding total charge



- Cartesian
$$ d\vec{l} = d_x\vec{a_x} + d_y\vec{a_y} + d_z \vec{a_z}  $$
$$ d\vec{s} = d_y d_z \vec{a_x} + d_x d_z \vec{a_y} + d_x d_y \vec{a_z} $$
$$ dV = d_xd_yd_z $$

- Cylindrical

$$ d\vec{l} = d_r\vec{a_r} + d_\phi \vec{a_\phi} + d_z\vec{a_z}$$
$$ d\vec{s} = r d_\phi d_z \vec{a_r} + d_r d_z \vec{a_\phi} + r d_\phi d_r \vec{a_z} $$
$$ dV = r d_\phi d_zd_r $$


- Spherical

$$ d\vec{l}  = d_R \vec{a_r} + Rd\theta \vec{a_\theta} + R\sin{\theta}d_\phi \vec{a_\phi} $$
$$ d\vec{s} = R^2\sin{\theta}d_\theta d\phi \vec{a_r} + R\sin{\theta}dRd\phi\vec{d_\phi} $$
$$ dV = R^2\sin{\theta}d_Rd_\theta d_\phi $$



A general approach for integration is as follows:
1. Choose a coordinate system
2. Determine which position coordinates vary during integrationa nd their ranges
3. Select the appropriate differential quantity, e.g. \\( d\vec{l} \\), \\( d\vec{s} \\), \\( dV \\), etc.
4. If the integrand is a vector, make sure that all unit vectors are constant during integration
5. Integrate over the appropriate limit


It is often useful to convert between types of integrals to make the process easier.
This can be done with the following theorems:
![vector_integral_properties](img/vector_integral_properties.png)
> [source](http://furqaanyusaf.com/notes/vectors/stokes-apply)



### Electric Fields

#### Continuous charge distribution
> Recall: \\( \vec{E_{sys}} = \frac{1}{4\pi\varepsilon_o}\sum_k \frac{q_k}{|\vec{R}-\vec{R'_k}|^3}(\vec{R} - \vec{R'_k}) \\)

In continuous form, \\( \int{d\vec{E}} \\)

Steps for solving charge distribution problem:
1. Choose coordinate system
2. Write out  \\( dQ \\)
3. Write out \\( \vec{R} - \vec{R'} \\)
4. Write \\( d\vec{E} \\)
5. Integrate!

##### Volume Charge

$$ dQ = P_v dv' $$ 
> Contribution to \\( \vec{E} \\). \\( P \\) denotes volume charge density [C/m^3]

$$ \vec{E} = \frac{1}{4\pi\varepsilon_o}  \int_{V'} \frac{P_v}{|\vec{R}-\vec{R'}|^2} \hat{a}_{\vec{R} - \vec{R'}} dV' $$


Noting that

$$ \hat{a}_{\vec{R} - \vec{R}} = \frac{\vec{R} - \vec{R'}}{|\vec{R} - \vec{R'}|}$$

we obtain that 
$$ \vec{E} = \frac{1}{4\pi\varepsilon_o}  \int_{V'} \frac{P_v}{|\vec{R}-\vec{R'}|^3} (\vec{R} - \vec{R'}) dV' $$


Much the same approach can be taken for surface and line charges; they all end up having the same form but with \\( ds' \\) or \\( dl' \\)), respectively.


####  Flux & Gauss's Law

- Electric fields extend (with decreasing density) from point charges (away from charge for +'ve, towards charge for -'ve). 
     - A good way to "visualize" this is to draw field lines. 

![https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Camposcargas.svg/440px-Camposcargas.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Camposcargas.svg/440px-Camposcargas.svg.png)

Note that greater field line density corresponds to greater field strength. We usually aren't concerned with field strength at a point, however, but rather it's effect on surfaces.


___

*Define*: Flux: the electric field through a surface

$$ \Phi = \int_s \vec{E} \cdot d\vec{s} $$

where \\( d\vec{s} \\) denotes a normal vector to the surface.

> Note the dot product! This also means that a surface parallel to the field lines will have a flux of 0.

___



___
*Define*: Gauss's law (Integral form)

$$ \Phi_E = \oint_s \vec{E}\cdot d\vec{s} = \frac{Q}{\varepsilon_o} $$

- Take integral over a closed surface (gaussian surface)
- \\( Q \\) denotes charge *inside* surface and is equal to \\( \int P_v dv' \\) or \\( P_v \\) multiplied by the volume in question

> Total flux *out* of a surface is equal to the (total charge enclosed by surface)/(permittivity of free space)  
> if \\( \oint \vec{E} \cdot d\vec{s} \\) > 0; net flux out (+'ve charge enclosed), < 0; net flux in (-'ve charge enclosed)

It can also be written in differential form using the divergence theorem:

> Recall: \\( \int_v \vec{\nabla} \cdot \vec{A} dv = \oint_s \vec{A} \cdot d\vec{s} \\))

$$ \vec{\nabla} \cdot A = \lim_{\Delta V \to 0} \frac{\oint_S \vec{A} \cdot d \vec{s}}{\Delta V} $$

where the value in the limit denotes the net outward flux of A per unit volume


> Recall: \\( \vec{\nabla} = \frac{d}{dx}\vec{a_x} +  \frac{d}{dy}\vec{a_y} + \frac{d}{dz}\vec{a_z} + \\)

we may then apply the divergence theorem to gauss's law to obtain

$$ \oint_s \vec{E}\cdot d\vec{s} = \frac{\int_v Pv dv}{\varepsilon_o} 
, \therefore \vec{\nabla \cdot E} = \frac{P_v}{\varepsilon_o} $$ 

___


![](img/flux_ex.png)

![image_2022-01-28-20-05-05](img/image_2022-01-28-20-05-05.png)


> The electric field reaches a maximum at \\( R = b \\), then is the maximum value multiplied by a factor of \\( \frac{1}{R^2} \\) after \\( R > b \\). Like how a point charge behaves,  which is what we expect.




#### Gauss's law: differential form

Recall:

- \\( \vec{\nabla} V = grad V \\) <- gradient
- \\( \vec{\nabla} \cdot \vec{A} = div A \\)  <- divergence
- \\( \vec{\nabla} \times \vec{A} = curl A \\)  <- curl


> Previously we used the integral form to solve Gauss's law -- but the differential form is equally valid:

![](img/e_field_ex_diff_form.png)



#### Work & Energy


We know that the electrostatic force experienced by a charge is \\( \vec{F} = q\vec{E}\\). 
Combining this with the definition of work, we can write the work done by an external force moving a point charge \\( q \\) from point \\( A \to B \\) as:

$$ W_{A\to B} = \int_A^B \vec{F_{ext}} \cdot d\vec{l} = -q\int_A^B \vec{E} \cdot d\vec{l}$$

Also, electric fields are [conservative](https://en.wikipedia.org/wiki/Electric_field), therefore

$$ W_{B\to A} = -W_{A \to B} $$

and it follows that

> Apply Stoke's theorem

$$ \oint_l \vec{E} \cdot d\vec{l} = \vec{\nabla} \times \vec{E} 0$$

which leads to two fundamental electrostatic properties...


#### Postulates of Electrostatics

1. \\( \vec{\nabla} \cdot \vec{E} = \frac{P_v}{\varepsilon_o} \\)
2. \\( \vec{\nabla} \times \vec{E} = 0 \\)

This also enables us to define electric potential


$$ \vec{\nabla} \times (\vec{\nabla } V) = 0 \\\\
since \qquad \vec{\nabla } \times \vec{E} = 0, \\\\
define \qquad \vec{E} = -\vec{\nabla } V  $$

where \\( V \\) denotes potential.



#### Electric Potential


$$ \Delta V_{A \to B} = V_B - V_A = \frac{\Delta U_{A \to B}}{q} = - \int_A^B \vec{E}\cdot d \vec{l}$$
- \\(  q \\) is a test charge

> Potential is relative and is associated with the field (it is independent of the test charge)

We may define potential a little more rigorously to inspect its differential form:


> Recall: the gradient points in the direction of maximum slope

$$ \Delta V_{A \to B} = -\int_A^B \vec{E} \cdot d\vec{l} \\\\
= \int_A^B \frac{dV}{dn} \frac{dn}{dl} dl \\\\
= \int_A^B \int_A^B \frac{dV}{dn} \vec{a_n} \vec{a_l} dl  \\\\
= \int_A^B \vec{\nabla}V \cdot d\vec{l} \\\\
\therefore \vec{E} = -\vec{\nabla}V$$



















## BME205: Introduction to Biomedical Engineering

> Textbook: Human Physiology From Cells to Systems, 5th Canadian Edition by Sherwood and Ward (ISBN-13 978-0-17-691235-2).

### Cells 
> Reference: Chapter 2

#### Components


- **Plasma Membrane**: lipid bilayer studded with proteins; acts as a selective barrier between inside of cell and outside world
- **Nucleus**: "Control center" of cell; genetic material (DNA in Chromosomes) storage
  - Chromatin
  - Nucleolus
  - Nuclear pores
  - Cisternae

- **Endoplasmic Reticulum**: Membranous network of fluid-filled tubules and flattened sacs studded with ribosomes; forms new cell components and materials for secretion
  - Rough Endoplasmic Reticulum
  - Smooth Endoplasmic Reticulum

- **Lysosome**: Sacs containing hydrolytic enzymes; "digestive system" of cell
- **Peroxisome**: Sacs containing oxidative enzymes; detoxification system
- **Centriole**: Barrel-shaped organelles composed of 9 short triplet microtubules; site of microtubule growth 
- **Microtubule**: slender and hollow tubes made of secretory vesicles; forms the mitotic spindle and aid in cellular transport
- **Mitochondria**: "Powerhouse of the cell": ATP production
- **Ribosome**: Workbenches for protein synthesis
- **Vesicle**: Transient membranous sacs for product transport
- **Microfilaments**: Intertwined chains of actin molecules (in muscles, myosin molecules) -- for cellular contractile systems
- **Intermediate Filaments**: Irregular threadlike proteins to resist mechanical stress
- **Cytoplasm**: Jelly-like "fluid" inside of cells



#### Cell membrane 

- Cell membranes (plasma membranes) are formed of a phospholipid bilayer (hydrophilic phosphate+glycerol"head", hydrophobic fatty acid "tail"). 

![plasma_membrane](img/plasma_membrane.png)
- Phospholipid molecules can move around the PM via
  - Uncatalyzed transverse diffusion (slow, days) (think of pairs in bilayers flipping)
  - Flippase-catalyzed diffusion (fast, seconds)
  - Lateral diffusion (very fast, micrometer/second) (think of of a molecule moving around the bilayer)


##### Biological Glue

- **Desmosome**: a tight "spot weld" between cells
- **Tight Junction**: multiple "seams" between cells; forms strong semi-impermeable (selective) bond between cells. Often found in intestinal tissue
- **Gap Junction**: Cells coupled by "connexon"s a structure that allows for passage of ions and small molecules. Can be opened/closed to vary passage. Leaves a 2-4nm gap between cells.

![junctions1](img/junctions1.png)
![junctions2](img/junctions2.png)


###### Osmosis
- **Osmosis**: movement of solvent from areas of high solvent concentration -> areas of low solvent concentration
    - Typically only lets in small molecules and ions
    - Larger ones must be transported across the bilayer using carrier proteins
  
- Cell uses active transport when it must transport molecules/ions *against* the concentration gradient

![active_transport](img/active_transport.png)
> Illustration of \\( Na^+/K^+ \\) pump






###### Ion Leak Channels

"Ion leak channels" are passive highly selective channels that allow for passage of ions in and out of the cell. 
Some can be gated and some are not.




![image_2022-01-27-16-20-27](img/image_2022-01-27-16-20-27.png)
> Key concentrations and relative permeability of ion leak channels



___

*Define*: Nernst Equation

$$ E_x = \frac{61}{Z_x}\log_10\frac{[C]_o}{[C]_i}$$

- E = equliibrium potential (mV)
- z = valence of permeant ion (e.g. Na+ = +1, Ca+ = +2, Cl- = -1)
- [C]o = concentration of ion outside cell (mol/L)
- [C]i = concentration of ion inside cell (mol/L)

There is also a full form of the equation:



> Idea: there is an osmosis concentration gradient across the membrane as well as a charge gradient

*Example*: Sodium ions across a cell membrane, outside concentration of 150, inside concentration of 15

$$ E_{Na^+} = \frac{61}{+1}\log \frac{150}{15} = +61mV$$

- Note: \\( E_{ion} \neq  V_m \\)


___



#### ATP


ATP (**A**denosine **T**ri**P**hosphate) enables cellular activity through the energy released from breaking the high-energy phosphate bonds it contains.

$$\text{ATP} \rightarrow \text{ADP} + \text{P} + \text{energy}$$



> *Anabolic* activities forms complex molecules from simple ones; *Catabolic* activities decompose complex molecules into simple ones.


#### DNA & Chromosomes

DNA is built up of nucleotides, each of which has three components: a nitrogenous base, a five-carbon sugar *deoxyribose*, and a phosphate group. 
These are linked together by hydrogen bonds between bases, which is highly specific: *adenine (A)*: *thymine (T)*,  *guanine (G)*: *cytosine (C)*.
A and G have double ring structures while C and T have single ring structures.

Chromosomes are made of DNA that has been "super coiled" (think: telephone cord). Humans have 23 pairs of chromosomes.

![dna_chromosome](img/dna_chromosome.jpg).

There are multiple ways that this can be packed, e.g. zigzag or solenoid patterns:

![nucleosome_packing](img/nucleosome_packing.jpg)
![coiling_patterns](img/coiling_patterns.jpg)

##### Replication

> Note: DNA is formed of two complimentary strands [(5', 3' strands)](https://en.wikipedia.org/wiki/Directionality_(molecular_biology)).


1. DNA is first split apart by proteins called **initiators** which look for *origin* base sequences
    - There are many origins along the DNA strand since it would take too long to split the DNA from just one point.
2. With the opening made, *helicase* enzymes gets to business to really start breaking the DNA apart. 
    - Think of a zipper being unzipped in two ways.
    - *Single-stranded binders* keep the DNA propped open and *gyrase* prevents it from torquing and knotting.
Then, the actual replication step takes place
1. A piece of temporary RNA bonds with the first nucleotide opened by helicase
2. *DNA polymerase* comes along and pairs up bases
3. After the bases are all put in, the temporary RNA is broken off and the DNA fragments are joined together by *ligase*
4. *proofreading DNA polymerase* goes along the DNA and checks for errors by looking for "bumps" in the structure
And then it is put into the chromosomal form
1. DNA is wrapped around histones & *telomeres* (single-sided pieces of "junk DNA" at the end) managed by trimming them to equal length in mitosis or being wrapped with RNA primer and *telomerase* enzyme in meiosis.


##### Gene Expression


> Why don't skin sprout eyeballs or livers grow toes?

Gene expression is the mechanism by which only the appropriate genes are called upon to produce the desired function.
Usually the default setting for gene expression is to be off.

Things that can impact gene expression:
- Enviromental factors (usu. heat/light)
- Genetic presets (e.g. some that are supposed to activate at certain stages of development; cues taken from cell or neighbouring cells)
- Hormones; chemicals produced by brain and glands


When a gene gets switched on it gets "transcribed" into a piece of *messenger RNA*, which is a single stranded nucleic acid which carries the information out of the nucleus and into the cell. 

> Note: RNA contains Uracil (U) instead of Thymine (T) as a compliment to Adenine (A).

A key property of RNA is its additional oxygenation, which makes it a lot more reactive.
This, combined with the fact that U can bond with all the other bases gives the ability for RNA to form complex non-linear shapes.

Another property of RNA is that it is is single-use; each piece of mRNA ceases functioning after it's task has been completed.





###### Transcription







## PHY294: Quantum and Thermal Physics



### Schrodinger & the Hydrogen Atom



___

*Define*: Schrodinger's Equation

$$ H\psi = E\psi $$

- \\( H \\) is the Hamiltonian, \\( \psi \\) is the wave function, and \\( E \\) is the energy.
- \\( |\psi|^2 \\) gives the probability density function.


Generalizing to three dimensions:

$$ \frac{\delta^2\psi}{\delta x^2} + \frac{\delta^2\psi}{\delta y^2} + \frac{\delta^2\psi}{\delta z^2} \\\\
\frac{1}{r}\frac{\delta^2}{\delta r^2}(r\phi) + \frac{1}{r^2sin\theta} \frac{\delta}{\delta \theta}




 = \frac{2M}{\hbar^2}[U-E]\psi$$

- \\( U \\) denotes potential (in H atom these are columbic forces)
- \\( E \\) is energy non-dependent on distance to the nucleus
- \\( M \\) is mass
___

> Recall: for a 1D particle in a box we use \\( \psi = Asin(kx) + Bcos(kx)\\) and then we can apply the boundary conditions at the bounds of the box.
> We may then find \\( \psi \\) to be \\( \sqrt{\frac{2}{L}}sin()\frac{n\pi}{L})x\\) and \\( E_n = \frac{n^2h^2}{8mL^2} \\)) where \\( n \\)) is a integer > 0. 


In 2D and 3D potential wells this is more complicated but the same idea follows; we apply separation of variables and the boundary conditions.
When applying to a hydrogen a few changes have to be made since it is not linear/square/cubic/etc and is spherical instead.
This problem is called the "[central force problem](https://en.wikipedia.org/wiki/Hydrogen-like_atom)" and is solved in much the same way as the square/rectangular potential wells, except using spherical coordinates.






it is useful to use spherical coordinates. 
The solution is a bit of work to write out, so [see this](https://chem.libretexts.org/Courses/University_of_California_Davis/UCD_Chem_107B%3A_Physical_Chemistry_for_Life_Scientists/Chapters/4%3A_Quantum_Theory/4.10%3A_The_Schr%C3%B6dinger_Wave_Equation_for_the_Hydrogen_Atom).


The key takeaway is that by solving the Schrodinger equation we see quantization come out of the cracks naturally.




1. Quantization of energy





$$ E = E_{n_x, n_y} = \frac{\hbar^2\pi^2}{2Ma^2}(n_x^2 + y_y^2) $$












![hydrogen_wavefns](img/hydrogen_wavefns.png)
> Solutions from textbook. I think these would be provided if applicable.



Hydrogen orbitals can be written as \\( \psi(r, \theta, \phi) = R(r)\Theta(\theta)\Phi(\phi) \\).

1. We apply \\(  n = 1,2,3... \\) (quanta) to the hydrogen atom.
2. \\(  E = -\frac{E_r}{n^2} \\) **NOTE**: 1) Only applies to hydrogen 2) This is exactly the Rydberg/Bohr relation.
3. \\(  l = 0,1,2...(n-1)\\)

### Electron Spin






We can apply separation of variables to simplify the problem.





























## ESC204: Praxis III

`// coming ... maybe? //`






## TEP327: Engineering and Law

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


















































