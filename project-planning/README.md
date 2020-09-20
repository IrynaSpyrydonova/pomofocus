# How to Plan

1. [Brainstorming](#brainstorming)
1. [Prioritizing](#prioritizing)
1. [User Story Dependencies](#user-story-Dependencies)
1. [Acceptance Criteria](#acceptance-criteria)
1. [Defining Tasks](#defining-tasks)
1. [Project Board](#project-board)
1. [Sprinting and Reviewing](#sprinting-and-reviewing)

---

## Brainstorming

> Why does a user want this app? What can they do with it?

Dream up a wonderful application and begin defining it as user stories.

---

## Prioritizing

> How to decide which stories to focus on.

At this stage in planning your team will decide which stories are more aor less important. You will be writing your ideas into a _backlog_.

- [Alex Ponomarev](https://medium.com/swlh/prioritizing-user-stories-in-agile-projects-d1dd8dd79165)
- [Michael Lant](https://michaellant.com/2010/05/21/how-to-easily-prioritize-your-agile-stories/)

---

## Acceptance Criteria

> How you'll know when a story is finished.

Now that you have an idea what the project will eventually be like, it's time to get specific.  Acceptance criteria are a way to scope and verify your user stories.

> Given [context] when [a specific action is performed] then [a set of consequences should occur]

You can write your first-draft acceptance criteria in your backlog, later moving them under each user story in your `development-strategy.md`.

- [Yodiz](https://www.yodiz.com/blog/user-stories-acceptance-definition-and-criteria-in-agile-methodologies/)
- [Zepel](https://zepel.io/agile/acceptance-criteria-for-user-stories/)
- [Ruby Garage](https://rubygarage.org/blog/clear-acceptance-criteria-and-why-its-important)
- [The Infinity Project](https://www.youtube.com/watch?v=KYS0ptJ4JWc)
    1. User Input / User Action
    2. Process
    3. Results

---

## User Stor Dependencies

> How to plan your development schedule.

Some user stories depend on each other, some do not.  Figuring out these relationships will make it possible go from a disorganized backlog to an organized development strategy.

Understanding these dependencies can also allow you to develop much more efficiently. It's possible to develope user stories that do not depend on each other at the same time instead of waiting for one to finish before moving on the next.

A nice way to understand these relationships is by creating a graph to visually represent dependencies:

- [a quiz app](https://excalidraw.com/#json=5248906938023936,dnJz0Qy9tk5M4ho-RUiqYQ)
- [a portfolio example](https://github.com/elewa-student/User-Centered-Development#story-dependencies)

[Excalidraw](https://excalidraw.com/) is a great tool for collaboratively writing these diagrams.

---

## Defining Tasks

> How to break the story into coding tasks.

Answering these questions is a way to break down complex user stories and to determine what code is needed. Following this questions guide will help you fill in the specifications of each step in your `development-strategy.md`

Handlers are the glue of your user stories.  Understanding your answers to these questions will not only help you decide which tasks to develop, but can be used to plan the details of the user story's handler:

1. **User Story Objectives**
    1. _What should change in state after this user story is complete?_
    2. _How will the UI represent these state changes for the user?_
2. **Gathering Data**
    - What data do we need from state?
        1. _Is it already available in state?_
        2. _Can I compute it from existing state data?_
        3. _Do I need to hard-code it into state?_
    - What data do we need from the user?
        1. _What action does the user take? (click, hover, type, ...)_
        2. _Should the user interact with an existing ui element?_
        3. _Do I need to add elements to the UI?_
        4. _How do I collect data I need? (`event`, DOM access, ...)_
        5. _How do I check or clean the user input?_
3. **Core Logic -> combine/transform gathered data**
    1. _Do I need different behaviors for different states?_
    2. _Do I need different behaviors for different user inputs?_
    3. _What new data do I expect after this story is finished? (see objectives)_
    4. _Can this data be generated simply inside the handler?_
    5. _Can I reuse logic from another user story?_
    6. _Do I need to write a new logic function for this story?_
4. **Register Changes**
    - Add the new data to state (see _objectives_)
        1. _Do I need to remove any data from state?_
        2. _Should this replace data that is currently in state?_
        3. _Should it be added as a new field in state?_
    - Update the UI to reflect the new state (see _objectives_)
        1. _Does the UI need to be updated?_
        2. _Can it happen in the handler with simple dom manipulation?_
        3. _Can I reuse a view function from another story?_
        4. _Do I need to write a new view function?_

- [Lars Bilde](https://www.youtube.com/watch?v=gZ4uLafsxAk)
- [Christiaan Verwijs](https://medium.com/the-liberators/10-powerful-strategies-for-breaking-down-user-stories-in-scrum-with-cheatsheet-2cd9aae7d0eb)

> PS. logging is a [_cross-cutting concern_](https://en.wikipedia.org/wiki/Cross-cutting_concern). it does not have a separate step because it should be incorporated into each step of your handler

---

## Project Board

> How to manage your team's project

Convert your development strategy into milestones (user stories), issues, labels and a project board.  When you create the milestones for your user stories, you can include the _acceptance criteria_ in the milestone's description.

This isn't a permanent thing! You can always adjust the project board and development strategy as the project evolves; adding issues, removing issues, adjusting tasks ... whatever is necessary to make the project go smoothly.

---

## Sprinting and Reviewing

The fun part, writing code and closing issues ;)
