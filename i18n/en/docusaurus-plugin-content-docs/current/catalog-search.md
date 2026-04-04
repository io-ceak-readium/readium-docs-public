---
title: Adding Books and Search
---

# Adding Books and Search

In the current app, Readium adds books to Library through an external catalog search flow.

## Opening the search screen

Tap the `+` button in the top right of `Library`.

## Search methods

Three search paths are currently implemented:

- keyword search by title, author, and similar text
- direct ISBN input
- barcode scanning with the camera

If the input looks like an ISBN, the app tries ISBN lookup before a general keyword search.

## Page navigation

Search results are shown one page at a time, with previous and next navigation.

## Handling duplicates

If the app detects that a result matches or closely resembles a book already in Library, it can offer one of these choices:

- cancel
- open the existing book
- add anyway

If the match is treated as a true duplicate, the app can open the existing book detail page instead of adding another copy.

## Barcode scanning

The barcode scanner currently supports:

- ISBN-13 recognition
- UPC-A normalization into EAN-13 style input
- flash on and off

If the scanned code is not supported, the app shows guidance and keeps the scanner open.
