---
title: "Notes on 'Clean Architecture: A Craftsman's Guide to Software Structure and Design'"
date: 2021-12-26T16:39:21-05:00
draft: true
katex: true
back_to_top: true
tags: ['notes', 'programming']
---

{{< toc >}}



> Fight for the architecture


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

- **I**interface Segregation
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
























