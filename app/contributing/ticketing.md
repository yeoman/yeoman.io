---
layout: default
title: Issue system overview
category: contributing
sidebar: sidebars/contributing.md
excerpt: Overview of the tickets/issues organization inside the Yeoman project
---

Yeoman use each projects [GitHub issue tracker](https://guides.github.com/features/issues/). We use the feature provided by GitHub to classify our issues so they're easily manageable and help contributors find tasks to complete.

<aside class="excerpt">
  Disclaimer: The workflow described below is our ideal goal. It is still new (not all of our projects use it at the moment) and some projects may diverge to better fit their specific needs.
</aside>

Throughout Yeoman, we use mainly three features:

1. Labels
2. Milestones
3. Assignment

## TLDR?

Just help us resolve issues labeled `actionable`. They're the one you can code right away.

## Labels

Labels are used to classify issues. We use three categories of tags to describe each issue - most of the time an issue is going to have at least one tag of each category:

### Life cycle (Feasibility)

The first category checks if an issue is _actionable_. It answer the question:

> Can this issue be resolved right now?

We have 4 possible tags describing an issue life cycle:

- `actionable`: This issue can be resolved right now by anyone. If an issue is actionable, just take it and [send a PR](/contributing/pull-request.html).
- `to-split`: The issue is too large (in scope) and should be broken down into smaller actionable parts. An issue `to-split` is a good place to discuss implementation details of a feature.
- `to-discuss`: This means the issue needs discussion and the Yeoman team needs to decide whether or not they want to add this feature to a project.
- `to-confirm`: This tag is mainly used on `bug` type issues until someone can reproduce the issue. Make sure to add steps to reproduce each bug so the issue can be tagged as `actionable` right away.

### Type

Multiple types of issues can exist within a project. The main ones are:

- `feature`: A suggested new feature to the project.
- `bug`
- `maintenance`: Everything related to the project build system, tests, refactoring, third-party, etc
- `documentation`
- `meta`: An issue related to the project management. Permissions, release, changelog, etc.

### Difficulty

We label things with three levels of difficulty: `easy`, `medium`, `hard`

Difficulty is rated based on the number of moving parts / system section of a particular issue needs to touch. An issue which can be fixed by changing a single method is easy. But an issue requiring changes in 3 parts of the system is hard.

We rate the difficulty level this way in order to provide insight to new contributor on the level of commitment needed to resolve an issue. A hard issue will require a longer time learning Yeoman internals and an easy issue will probably only require some level of Node.js knowledge.

## Milestone

A milestone represent a future release version.

Yeoman versions follow as close as possible the [semver specification](http://semver.org/). This means new features get implemented in minor versions. Breaking changes are added in major versions. And bug fixes are done with patch releases.

This means some issues might be delayed until we're ready to publish a version in which the changes can be incorporated.

Here are some examples:

1. A Pull Request adding a new feature might be delayed until the current Yeoman version is stable enough so we can concentrate on the next minor release.
2. Some issues might not be suitable to fix until a major release because they imply breaking backwards compatibility.

Don't worry too much about these though. Issues not suitable to be fixed in the near feature won't be labeled as `actionable`.

## Assignment

A member of the Yeoman team might have started working on a feature. If so, most of the time we'll try to assign this member to the issue so everyone knows this issue is already getting resolved by someone else.

If you feel the issue is taking too long to be resolved, feel free to comment on the issue (or email the assignee) to offer doing it yourself.
