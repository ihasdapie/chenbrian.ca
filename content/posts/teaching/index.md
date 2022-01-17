---
title: "Teaching"
date: 2021-12-12T16:49:34-05:00
draft: false
katex: true
back_to_top: true
tags: ['notes']
---

{{< toc >}}

## ESC180

### [Exam review](https://github.com/ihasdapie/teaching/blob/main/ESC180/ESC180_Unofficial_Review.ipynb) 
Jupyter notebook for exam review based on student-requested content. 
Either download it and run locally, use [Google Colab](https://colab.research.google.com/), or this [Binder](https://mybinder.org/v2/gh/ihasdapie/teaching/HEAD) link.


## ESC190

For all else (currently WIP), see: [github.com/ihasdapie/teaching/](https://github.com/ihasdapie/teaching/)


### Getting started with `c`

Intro to `c` syntax and program flow should be already covered in lecture and there are *a lot* of resources online.

Things to note:

- `c` is a *[statically typed](https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages)* language
- `c` is a *[compiled](https://en.wikipedia.org/wiki/Compiled_language)* language
- [Here](https://cheatography.com/ashlyn-black/cheat-sheets/c-reference/) is a great cheat sheet for `c` & is very "`CTRL-F`-able", so to speak.

Some frequently asked questions:

Q: What is the `main` function?  
A: `main` is the entry point to your program. It is the first function that gets called when your program starts and every `c` executable must have a `main` function.

Q: How do I run my `c` program?  
A: This will depend on your operating system and environment. I recommend using [GCC](https://gcc.gnu.org/) or [Clang](https://clang.llvm.org/) alongside [GDB](https://www.gnu.org/software/gdb/) for debugging. 
As for text editors, I recommend using [vscode](https://code.visualstudio.com/) and following [these steps](https://code.visualstudio.com/docs/languages/cpp) to get started.
Personally I use [neovim](https://neovim.io) and a terminal-centric development workflow, however, the learning curve is rather steep.

Q: How do `#include`s work? Does order matter?  
A: `#include`s are used to import libraries and other files into your program. 
Ideally, order *should* not matter and header files should be self-contained (for convention-abiding code), but it *can* matter in edge cases where one tries to squeeze some extra performance out of a program, or if one is working with a finicky library. 
To make sure you don't encounter errors while working with multi-file projects, **always** use [`#include` guards](https://en.wikipedia.org/wiki/Include_guard)!
See [here](https://stackoverflow.com/questions/691079/is-there-a-standard-include-convention-for-c) for general best practices.


### Complexity analysis & sorting algorithms
See [my writeup from ESC180](https://github.com/ihasdapie/teaching/blob/main/ESC180/ESC180_Unofficial_Review.ipynb) regarding complexity analysis.
The following will walk through finding the time and space complexity of various sorting algorithms as well as some general comments.
[Here](https://en.wikipedia.org/wiki/Sorting_algorithm#Comparison_of_algorithms) is a good table of common sorting algorithms and their best/worst/average case time and space complexity.



Complexity analysis of some common sorting algorithms.


Given an unsorted array of integers, e.g.

```c
int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
```

#### Bubble sort
Bubble sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order.


```c
void bubble_sort(int[] arr, int n) {
    int i, j, tmp;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
```


1. Identify "elementary operation"
    - Swapping two adjacent elements if they are in the wrong order
2.  Pick `n`
    -   Take `n` to be the size of the input array.
3. Inspect how much the "elementary operation" is performed relative to `n` 
    - The elementary operation is performed `n` times in a loop that runs `n` times, so the time complexity is `O(n^2)`
4. Inspect how much additional space is used relative to `n`
    - We perform the swaps in-place and only allocate three additional variables, `i`, `j`, and `tmp`, so the space complexity is `O(1)`


#### Insertion sort
Inserting sort works by maintaining a sorted sublist and inserting each element into the correct position in the sublist.


```c
void insertion_sort(int[] arr, int n) {
    int i, j;
    for (i = 1; i < n; i++) {
        j = i - 1;
        while (j >= 0 && arr[j] > arr[i]) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = arr[i];
    }
```

1. Identify "elementary operation"
    - Inserting an element into the correct position in the sorted sublist
2.  Pick `n`
    -   Take `n` to be the size of the input array.
3. Inspect how much the "elementary operation" is performed relative to `n` 
    - The elementary operation is performed in a `while` loop that runs (in the worst case), `n` times, which is in turn in a `for` loop that runs `n` times, so the time complexity is `O(n^2)`
4. Inspect how much additional space is used relative to `n`
    - We perform the insertions in-place and only allocate two additional variables, `i` and `j`, so the space complexity is `O(1)`


Follow-up questions:
- If insertion sort and bubble sort have the same time and space complexity, why is insertion sort faster?
  - Hint: consider non-worst case scenarios. How many times would the inner `while` loop iterate during an average case? Or the best case?
- Is the sort [stable](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability)? Why?
- What if we weren't allowed to modify the input array? What would the space complexities be?


#### Selection sort
Selection sort works by repeatedly finding the minimum element in the unsorted array and swapping it with the first element.

```c
void selection_sort(int[] arr, int n) {
    int i, j, min_idx, tmp;
    for (i = 0; i < n - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        tmp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = tmp;
    }
}
```


Follow-up questions:
- Can you think of any optimizations to make?
- 









#### Merge sort


#### Quick sort




#### Heap sort


#### Radix sort


#### Counting sort


#### Bucket sort


#### Shell sort


#### Tim sort


### strings in `c`

`c` strings are character arrays terminated by `'\0'`, the `null` character.



### Memory management: pointers and structs


### Data structure: linked lists
























