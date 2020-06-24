# Bowling Score Calculator

## Prerequisites

You need to have [node.js](https://nodejs.org) installed on your system. 
I have tested it with node v13.11.0.

## Installation

Clone the bowling-score project:

```bash
git clone https://github.com/obelaifa/bowling-score.git
```

## Start

To start you have to enter in the shell:

```bash
npm run start
```

You can end the game by pressing the q key and then enter. 

Some sample calculations of bowling results:

```bash
┌──────────┬───────────────┬───────┐
│ (index)  │     rolls     │ score │
├──────────┼───────────────┼───────┤
│ Frame 1  │   [ 1, 4 ]    │   5   │
│ Frame 2  │   [ 4, 5 ]    │   9   │
│ Frame 3  │  [ 6, '/' ]   │  15   │
│ Frame 4  │  [ 5, '/' ]   │  20   │
│ Frame 5  │    [ 'X' ]    │  11   │
│ Frame 6  │   [ 0, 1 ]    │   1   │
│ Frame 7  │  [ 7, '/' ]   │  16   │
│ Frame 8  │  [ 6, '/' ]   │  20   │
│ Frame 9  │    [ 'X' ]    │  20   │
│ Frame 10 │ [ 2, '/', 6 ] │  16   │
└──────────┴───────────────┴───────┘
Total score:  133

┌──────────┬────────────┬───────┐
│ (index)  │   rolls    │ score │
├──────────┼────────────┼───────┤
│ Frame 1  │ [ 3, '/' ] │  10   │
│ Frame 2  │  [ 0, 1 ]  │   1   │
│ Frame 3  │  [ 2, 7 ]  │   9   │
│ Frame 4  │  [ 'X' ]   │  17   │
│ Frame 5  │  [ 7, 0 ]  │   7   │
│ Frame 6  │  [ 4, 5 ]  │   9   │
│ Frame 7  │  [ 'X' ]   │  20   │
│ Frame 8  │ [ 7, '/' ] │  14   │
│ Frame 9  │ [ 4, '/' ] │  18   │
│ Frame 10 │  [ 8, 1 ]  │   9   │
└──────────┴────────────┴───────┘
Total score:  114

┌──────────┬─────────────────┬───────┐
│ (index)  │      rolls      │ score │
├──────────┼─────────────────┼───────┤
│ Frame 1  │     [ 'X' ]     │  24   │
│ Frame 2  │     [ 'X' ]     │  20   │
│ Frame 3  │   [ 4, '/' ]    │  18   │
│ Frame 4  │    [ 8, 1 ]     │   9   │
│ Frame 5  │   [ 4, '/' ]    │  13   │
│ Frame 6  │    [ 3, 6 ]     │   9   │
│ Frame 7  │     [ 'X' ]     │  30   │
│ Frame 8  │     [ 'X' ]     │  30   │
│ Frame 9  │     [ 'X' ]     │  22   │
│ Frame 10 │ [ 'X', 2, '/' ] │  20   │
└──────────┴─────────────────┴───────┘
Total score:  195

┌──────────┬─────────────────┬───────┐
│ (index)  │      rolls      │ score │
├──────────┼─────────────────┼───────┤
│ Frame 1  │   [ 9, '/' ]    │  16   │
│ Frame 2  │    [ 6, 2 ]     │   8   │
│ Frame 3  │     [ 'X' ]     │  28   │
│ Frame 4  │     [ 'X' ]     │  20   │
│ Frame 5  │   [ 8, '/' ]    │  19   │
│ Frame 6  │    [ 9, 0 ]     │   9   │
│ Frame 7  │     [ 'X' ]     │  30   │
│ Frame 8  │     [ 'X' ]     │  27   │
│ Frame 9  │     [ 'X' ]     │  20   │
│ Frame 10 │ [ 7, '/', 'X' ] │  20   │
└──────────┴─────────────────┴───────┘
Total score:  197
```

And the Road to 300 :-)

```bash
┌──────────┬───────────────────┬───────┐
│ (index)  │       rolls       │ score │
├──────────┼───────────────────┼───────┤
│ Frame 1  │      [ 'X' ]      │  30   │
│ Frame 2  │      [ 'X' ]      │  30   │
│ Frame 3  │      [ 'X' ]      │  30   │
│ Frame 4  │      [ 'X' ]      │  30   │
│ Frame 5  │      [ 'X' ]      │  30   │
│ Frame 6  │      [ 'X' ]      │  30   │
│ Frame 7  │      [ 'X' ]      │  30   │
│ Frame 8  │      [ 'X' ]      │  30   │
│ Frame 9  │      [ 'X' ]      │  30   │
│ Frame 10 │ [ 'X', 'X', 'X' ] │  30   │
└──────────┴───────────────────┴───────┘
Total score:  300
```

Have fun!