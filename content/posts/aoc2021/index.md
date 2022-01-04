---
title: "Advent of Code 2021"
date: 2021-12-09T21:20:53-05:00
draft: false
katex: true
tags: ['programming']
back_to_top: true
---

{{< toc >}}

This page will track some notes and TILs for [AoC2021](https://adventofcode.com/2021), which I will be completing in `rust` -- a language I am still learning.

Solutions are hosted [here](https://github.com/ihasdapie/aoc2021).
If a day isn't very interesting, I won't post a writeup for it.


## Day 6
[Problem](https://adventofcode.com/2021/day/6)
[Solution](https://github.com/ihasdapie/aoc2021/tree/main/d6)


So many lanternfish! The key to this puzzle is to represent the lanternfish as a histogram rather than creating a list of all the lanternfish. See [solution](https://github.com/ihasdapie/aoc2021/tree/main/d6).



## Day 7
[Problem](https://adventofcode.com/2021/day/7)
[Solution](https://github.com/ihasdapie/aoc2021/tree/main/d7)
This was an interesting one. Find the problem [here](https://adventofcode.com/2021/day/7).

For part a) we can note that given a set of numbers \\(x_1, x_2, x_3 \dots x_n \\) the point \\(p\\) that minimizes the cost \\(C_a\\), \\( \sum^n_{i=1} |x_i - p| \\), is the median of the set.


For part b), however, the distance cost, \\(C_b\\) is the sum of the sequence of numbers up to the point \\(p\\), i.e. for a distance of \\(5\\) we have \\(C_{a,i}=1+2+3+4+5\\).
We can then note that we can apply Carl Gauss's [trick](https://en.wikipedia.org/wiki/Arithmetic_progression) for finding the sum of of an arithmetic progression.

$$C_b = \sum^n_{i=1} \frac{(d_i)(d_i+1)}{2} = \\\\ \sum^n_{i=1}\frac{(p-x_i)^2-|p-x_i|}{2} $$
Then, we may take the derivitive of the above equation, doing a classic Calculus 1/2 optimization problem, and find that we may minimize cost when \\(C_b' = 0\\).

$$ C_b' = \sum^n_{i=1} \frac{2(p-x_i) + sgn(x_i-p)}{2} = 0 $$
Where the [sign function](https://en.wikipedia.org/wiki/Sign_function) is a function which extracts the sign of a number.


Then, solving for \\(p\\) gives us


$$ p = \frac{\sum^n_{i=1}x_i}{n} - \frac{\sum^n_{i=1}sgn(x_i-p)}{2n} $$

which is simply the mean of of the set, \\(\pm\frac{1}{2}\\).


Day 7 was pretty neat.


## Day 8
[Problem](https://adventofcode.com/2021/day/8)
[Solution](https://github.com/ihasdapie/aoc2021/tree/main/d8)


Day 8 can be solved by inspection and treating it as a logic puzzle.


![](seven_segment_display.png)

Inspecting each digit we observe that 1, 4, 7, 8 have an unique number of lit-up segments. 
We can then use this to decode which patterns correspond to which numbers.

- 9 is the only 6-segment which contains the all the segments of 3
- 0 is the only remaining 6-segment which contains the segments of 1
- 6 must be the remaining 6-segment
- 3 is the only 5-segment which contains the segments of 1
- 2 is the 5-segment which contains 2 segments of 4
- 5 is the 5-segment which contains 3 segments of 4



## Day 9
[Problem](https://adventofcode.com/2021/day/9)
[Solution](https://github.com/ihasdapie/aoc2021/tree/main/d9)

Just a recursive [flood fill](https://en.wikipedia.org/wiki/Flood_fill) problem


## Day 10
[Problem](https://adventofcode.com/2021/day/10)
[Solution](https://github.com/ihasdapie/aoc2021/tree/main/d10)

Braces matching problem. This is a fairly common problem that can be solved recursively or with stacks, so I'll just link to a stackoverflow [solution](https://stackoverflow.com/questions/16874176/parenthesis-brackets-matching-using-stack-algorithm) that uses the same stack method that I used.

The key observation to make is that for part b the remaining open brackets in the stack for an unbalanced string are the ones that must be matched up for it to become balanced.
So to create the string we can just reverse the stack, substitute closing brackets for opening ones, and `collect` it into a string.



## Day 12
[Problem](https://adventofcode.com/2021/day/12)
[Solution](https://github.com/ihasdapie/aoc2021/tree/main/d12)

Can be solved by a BFS and keeping track of the nodes we've visited.

This was pretty interesting as I am used to `c`-style graphs and those [don't really exist in `rust`](https://stackoverflow.com/questions/34747464/implement-graph-like-data-structure-in-rust) because of `rust`'s stringent memory safety.
There is a way around this using [arenas](https://github.com/nrc/r4cppp/blob/master/graphs/README.md) but I'm far too lazy to actually do it -- so `HashMap` it is!
Anyhow this lead me down a small rabbit hole regarding how things work in `rust` which brought me to these two *excellent* articles:
- [The Secret Life of Cows](https://deterministic.space/secret-life-of-cows.html)
- [Working with strings in rust](https://fasterthanli.me/articles/working-with-strings-in-rust)

## Day 13
[Problem](https://adventofcode.com/2021/day/13)
[Solution](https://github.com/ihasdapie/aoc2021/tree/main/d13)

Not much of note here for day 13 except for a really cute end solution:

```
###   ##  ###  #     ##  #  # #  # #    
#  # #  # #  # #    #  # # #  #  # #    
#  # #    #  # #    #  # ##   #### #    
###  #    ###  #    #### # #  #  # #    
# #  #  # #    #    #  # # #  #  # #    
#  #  ##  #    #### #  # #  # #  # #### 
```


## Day 14
[Problem](https://adventofcode.com/2021/day/14)
[Solution](https://github.com/ihasdapie/aoc2021/tree/main/d14)


Look for patterns (recall, lanternfish!).
As we only care about the most and least frequent elements in the polymer we can note that each pair after a polymerization step gives rise to two new pairs -- which can use a `HashMap` to keep track of the pairs of elements and their counts.
So:

1. We can start with a `HashMap` of the counts of each element in the polymer.
```rust
// initial state
for c in 0..(sequence.len() - 1) {
    let s = String::from_iter(sequence.chars().skip(c).take(2));
    *state.entry(s).or_insert(0) += 1;
}
```

2. Iterate through polymerization steps
```rust
for _ in 0..steps {
  for pair in state.keys() {
      // assume all pairs are in the rules 

      // build the new state
      let insertable = rules.get(pair).unwrap();
      let mut new_pair = pair.chars().next().unwrap().to_string() + &insertable.to_string();
      *update.entry(new_pair.clone()).or_insert(0) += state.get(pair).unwrap();
      new_pair = format!("{}{}", *insertable, pair.chars().nth(1).unwrap());
      *update.entry(new_pair).or_insert(0) += state.get(pair).unwrap();
  }
  // and update the state
  state = update.clone(); 
  update.clear();
} 
```

3. Count up the elements


```rust
for (k, v) in state.iter() { 
    *counts.entry(k.chars().nth(1).unwrap()).or_insert(0) += *v;
}
let max = counts.values().max().unwrap();
let min = counts.values().min().unwrap();
max-min
```

## Day 15
[Problem](https://adventofcode.com/2021/day/15)
[Solution](https://github.com/ihasdapie/aoc2021/tree/main/d15)

Just use Dijkstra™!
In order to complete part 2 speedily we will have to implement dijkstra using a priority queue, a data structure which has
the nice property of being able to extract the minimum element in \\(\mathcal{O}(1)\\) time.
Fortunately `rust` has this built in in the form of `std::collections::BinaryHeap` alongside an example implementation.


```rust
/// Dijkstra's algorithm on a grid where neighbours are the top, right, bottom and left
/// if no path is found, return -1
pub fn dijkstra(grid: &[Vec<i32>], start: (usize, usize), end: (usize, usize)) -> i32 {
    let mut heap = BinaryHeap::new();
    let mut distance = HashMap::new();
    
    // starting position
    heap.push(Node{cost: 0, pos: start });
    distance.insert(start , 0);

    while let Some(Node{cost, pos}) = heap.pop() {
        if pos == end {
            return distance[&pos];
        }

        if cost > distance[&pos] {
            continue;
        }
        for neighbour in direct_neighbours(pos.0, pos.1, grid.len(), grid[0].len()) {
            // see if there's a lower cost going thru the neighbour node
            let next = Node{ cost: cost + grid[neighbour.1][neighbour.0], pos: neighbour };
            
            distance.entry(next.pos).or_insert(i32::MAX);
            if next.cost < distance[&next.pos] {
                distance.insert(next.pos, next.cost);
                heap.push(next);
            }
        }
    }
    -1 // since we're on an open grid, there should never not be a path
}
```




## Day 16
[Problem](https://adventofcode.com/2021/day/16)


## Day 17
[Problem](https://adventofcode.com/2021/day/17)


## Day 18
[Problem](https://adventofcode.com/2021/day/18)


## Day 19
[Problem](https://adventofcode.com/2021/day/19)


## Day 20
[Problem](https://adventofcode.com/2021/day/20)


## Day 21
[Problem](https://adventofcode.com/2021/day/21)


## Day 22
[Problem](https://adventofcode.com/2021/day/22)


## Day 23
[Problem](https://adventofcode.com/2021/day/23)



## Day 24
[Problem](https://adventofcode.com/2021/day/24)


## Day 25
[Problem](https://adventofcode.com/2021/day/25)









