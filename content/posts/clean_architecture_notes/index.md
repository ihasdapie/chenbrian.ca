---
title: "Notes on 'Clean Architecture: A Craftsman's Guide to Software Structure and Design'"
slug: "clean-architecture-notes"
date: 2021-12-26T16:39:21-05:00
draft: false
katex: true
back_to_top: true
tags: ['notes', 'programming']
---

{{< toc >}}

> **"Fight for the architecture"**

The following is a **Work in progress** collection of notes on 'Clean Architecture: A Craftsman's Guide to Software Structure and Design' by Robert C. Martin. [1]

` [1] R. C. Martin, Clean Architecture: A Craftsman’s Guide to Software Structure and Design, 1st ed. USA: Prentice Hall Press, 2017. `


## Paradigms
Main paradigms:
- Structured: Discipline on direct transfer of control
  - Dijkstra: banishing the `goto` statement; enforcing control flow; `if`, `else`, `while`, `for` ... 
  - Enabling functional decomposition; applying mathematical divide-and-conquer approach to algorithms
  - Testing can only prove a program false but not correct
    - Structured programming breaks down to provable chunks

- Object-oriented: Discipline on indirect transfer of control
  - Moving function call stack frame to heap
  - *encapsulation*, *inheritance*, *polymorphism*
  - Note that `c` has perfect encapsulation, and can implement inheritance, polymorphism, etc. but isn't really an OO language -- so what gives?
    - But these aren't necessarily safe; \\( \therefore \\) OOP is the *imposed* discipline on indirect transfer of control
  - Key power: allows for safe inversion of dependencies

- Functional: Discipline on assignment
  - consider the lisp program that prints the squares of the first 25 integers`(println (take 25 (map (fn [x] (* x x)) (range))))`
  - Note how no variables mutate
  - Immutability leads to safety in concurrency; all problems with concurrency are due to mutable variables
  - But it's not always practical, \\(\therefore\\) segregate mutable and immuatable via transactions
  - Generally we want to minimize mutability and maximize use of immuatables
  - Can make practical by storing sequence of events (transactions, commands) instead of state

## SOLID principles

- **S**ingle Responsibility
> There should never be more than one reason for a class to change

- **O**pen-closed
> For software systems to be easy to change they must be designed to allow for the behaviour to be changed by adding new code, rather than changing existing code

- **L**iskov Substitution
> Functions that use pointers to base classes must be able to use objects of derived classes without knowing it (See: generics)

- **I**nterface Segregation
> Many client-specific interfaces are better than one general-purpose interface

- **D**ependency Inversion
> Code that implement high-level policy should not depend on code that implements low-level details, rather details should depend on policies



### SRP
> A module should be responsible to only one actor

For example, consider module `employee` with methods `calcPay` and `reportHours`. 
It is reasonable to think that both `calcPay` and `reportHours` share a method for finding no. hours worked, `calcHours`.
However each one of these methods report to different 'real-world' owners (finance, HR).
Note that if one actor changes `calcHours` to meet their requirements the other 'owner' can meet undesirable behaviour.
So, *separate the code that different actors depend on*.
This also helps deal with things like merge conflicts.

#### Solutions
- Separate the data from the functions; create independent classes containing functions that operate on a `EmployeeData` class
  - If this is unwieldy, use a *facade* as a simple public-facing interface
  - `EmployeData` may also contain some low-level methods if applicable.


### OCP

> Behaviour of a software artifact should be extendible without modifying the artifact

For example: what if we had a webpage that calculates a report that must be rendered for the web and then a stakeholder requests that it work for a black-and white printer?
Approach: 1) separate things that change for different reasons, 2) organize dependencies well.
I.e. in this case define a report builder that outputs to an universal format which can then be rendered by a renderer for each medium.


A few things of note:
- interaction between components should be unidirectional
- choose dependencies carefully: if component A should be protected from changes in component B, then B should depends on A
  - Here, we would want the renderers to depend on the report builder


### LSP

> If for each object o1 of type S there is an object o2 of type T s.t. for all programs P defined in terms of T, the behaviour of P is unchanged when o1 is subsisted for o2 then S is a subtype of T (Barbara Liskov, 1988)

Example: A algo that sorts a list of polygons by area should work for all things that subclass polygon, not necessarily only squares for example.


### ISP
Consider class `C` that implements `op1`, `op2` for users 1 and 2. 
This is bad because the source code for user 1 depends on that for user 2 now; changes to user 2's `op2` will trigger a recompilation and impacts user 1.
We can get around this by segregating operations into interfaces.


This is also a word of warning for avoiding excessive module dependencies and vetting them (and their dependencies!) carefully.



### DIP
> We want to `depend` on abstractions, not the concrete; whereas every change to an abstract interface corresponds to a change to concrete implementations, not all concrete changes require changes to the interface they implement.

1. Don't refer to volatile concrete classes
2. Don't derive from volatile concrete classes
3. Don't override concrete functions
4. Don't even think about concrete & volatile


However we often want to work with and instantiate volatile concrete objects -- and in order to create an object we need the concrete definition of the object.
So we introduce the `factory` design pattern; A `{class}Factory` removes the source-code dependency on the concrete definition and instead provides an abstract interface for module instantiation.


Note that this isn't `java`-specific; this design pattern can be applied to dynamic languages like `python` [as well](https://realpython.com/factory-method-python/)

For example for a serialization task ([source](https://realpython.com/factory-method-python/)) instead of writing a serializer for each type and requiring a source-code dependency on the serializer class, we can instead do the following: 

```python
# serializers.py
class SerializerFactory:
    def __init__(self):
        self._creators = {}

    def register_format(self, format, creator):
        self._creators[format] = creator

    def get_serializer(self, format):
        creator = self._creators.get(format)
        if not creator:
            raise ValueError(format)
        return creator()

factory = SerializerFactory()
# assume that we already have these serializers implemented 
factory.register_format('JSON', JsonSerializer)
factory.register_format('XML', XmlSerializer)
```

This is nice because we can then instantiate a `json` serializer or provide our own -- while *depending only on the abstract*!

Example:
```python

import serializers

json_serializer = serializers.SerializerFactory.get_serializer("JSON")

class YamlSerializer(serializers.JsonSerializer): 
    # assuming that we have the json serializer already implemented
    def to_str(self):
        return yaml.dump(self._current_object)

serializers.factory.register_format('YAML', YamlSerializer)
```


## Components


> Components are the smallest *deployable* units of a software system.

- Originally developed to address issue of compile/linking/loading times.
Modern day systems are often linked at runtime, but this is not always the case.


We can design software components following a few guidelines


- **R**EP: Reuse/Release Equivalence Principle

> The granule of reuse is the granule of release

Things that are used together should be grouped and released (with appropriate release tracking, see [semver](https://semver.org/)) together.
This means that software that are formed into a component must belong to a cohesive group that is *releasable*.


- **C**CP: Common Closure Principle
> Gather into components those classes that change for the same reason and at the same times.
> Separate into different components those classes that change at different times and for different reasons.

This is similar to the SRP (Single Responsibility Principle) & helps with maintainability.


- **C**RP: Common Reuse Principle
> Don't force users of a component to depend on things that they don't need

This is similar to the ISP (Interface Segregation Principle) but is more general.

If things are used together, then they should be grouped together. 
For example a container class and its iterators should be grouped together as they are used together.



### Component Coupling

> Allow no cycles in the component dependency graph

If it is not immediately obvious, realize that making a change in a cyclic dependency graph `A->B->C->A` looks an *awful* lot like the [dining philosophers problem](https://en.wikipedia.org/wiki/Dining_philosophers_problem).

But if you do encounter one, try breaking the cycle by...

- Applying the Dependency Inversion Principle (DIP)
- Creating a new component. I.E. for `A->B->C->A` create `D` such that `B->A->C->D, B->D`

This has the implication that:
- Component structure is volatile as requirements develop
- Top down design is not possible


#### Stable Dependencies Principle (SDP)

> Depend in the direction of stability

TLDR; depend on stable things first, then volatile things.

A heuristic for the instability, \\( I \\) of a component is \\(I = \frac{\texttt{outgoing dependencies}}{\texttt{ingoing dependencies + outgoing dependencies}} \\).


A *stable* component has low \\( I \\) and does not depend much on external components though others depend on it.
A *volatile* component has high \\( I \\) and depends on external components.


Not all components should be stable. However we should keep the unstable components in check; it is an useful convention to draw component diagrams such that unstable ones on top; this way dependency arrows going upwards indicate violation of the SDP.


#### Stable Abstractions Principle (SAP)


> A component should be as abstract as it is stable

A stable component should be abstract so that it's stability doesn't prevent it from being extended.
An unstable component should be concrete since it's instability allows for the concrete code to be easily changed.




















































