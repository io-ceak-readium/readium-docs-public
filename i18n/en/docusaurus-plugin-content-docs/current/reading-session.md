---
sidebar_position: 4
title: Reading Session
---

# Reading Session

A session is the basic unit Readium uses to record actual reading time.

Even when you finish a book over many separate sittings, each session keeps part of that reading history.

## Starting a session

You can start a session from two places:

- the book detail page
- the `Now Reading` tab

The rules are the same no matter which screen starts the session.

## Ending a session

When you finish a session, the app asks for progress.

- the previous ended progress can be used as a starting point
- only sessions of at least one minute are treated as normal saved sessions
- after ending, the app can lead you to a session note flow

## Very short sessions

If you end a session before one minute has passed, the app may treat it as too short and show a message instead of saving it as a normal reading record.

## Ending a session vs completing a book

Entering `100%` progress does not behave like a normal session end. It leads into the completion flow instead.

- a completion event is recorded
- the app can suggest writing a book note

If the progress is below `100%`, only the session ends and the app can suggest a session note instead.

## Difference from the Now Reading page

This page explains the session rules themselves: how a session starts, ends, and turns into completion.

- use this page when you want the behavior of the session feature
- use `Now Reading` when you want the screen-level quick actions for current books
