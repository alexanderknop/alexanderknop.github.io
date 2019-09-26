---
title: "Strategies for Stable Merge Sorting"
type: "inproceedings"
conference: "ACM-SIAM Symposium on Discrete Algorithms (SODA 2019)"
year: 2019
paper-url: "https://epubs.siam.org/doi/abs/10.1137/1.9781611975482.78?mobileUi=0"
authors:
    - "Sam Buss"
    - "Alexander Knop"
---
We introduce new stable natural merge sort algorithms, called 2-merge sort and
$\alpha$-merge sort. We prove upper and lower bounds for several merge sort
algorithms, including Timsort, Shivers' sort, $\alpha$-stack sorts, and our new
2-merge and $\alpha$-merge sorts. The upper and lower bounds have the forms
$c \cdot n \log m$ and $c \cdot n \log n$ for inputs of length $n$ comprising
$m$ monotone runs. For Timsort, we prove a lower bound of
$(1.5 − o(1)) n \log n$. For 2-merge sort, we prove optimal upper and lower
bounds of approximately $(1.089 \pm o(1)) n \log m$. We prove similar
asymptotically matching upper and lower bounds for $\alpha$-merge sort,
when $\phi < \alpha < 2$, where $\phi$ is the golden ratio.

Our bounds are in terms of merge cost; this upper bounds the number of
comparisons and accurately models runtime. The merge strategies can be used for
any stable merge sort, not just natural merge sorts. The new 2-merge and
$\alpha$-merge sorts have better worst-case merge cost upper bounds and are
slightly simpler to implement than the widely-used Timsort; they also perform
better in experiments. We report also experimental comparisons with algorithms
developed by Munro-Wild and Jugé subsequently to the results of the present
paper.
