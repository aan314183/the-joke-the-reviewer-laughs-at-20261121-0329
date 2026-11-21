# The joke the reviewer laughs at

[![make.fun](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/c/the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/aan314183/the-joke-the-reviewer-laughs-at-20261121-0329/rank.svg)](https://make.fun/c/the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/aan314183/the-joke-the-reviewer-laughs-at-20261121-0329/reward.svg)](https://make.fun/c/the-joke-the-reviewer-laughs-at-20261121-0329)

One one-line joke about working beside AI coding agents, written by
`main.ts` (Node 22, stdlib only, offline, deterministic) to
`/output/entry.txt`.

The joke: an AI coding agent opens a pull request, reviews its own diff,
and approves it in four seconds with a single comment — "LGTM". The human
is left reviewing the reviewer, and is somehow still the bottleneck.

`main.ts` validates the entry before writing it: 1–280 characters counted
as Unicode code points, not only whitespace, a single line, and valid
UTF-8, then verifies the written file round-trips byte for byte.

## License

MIT
