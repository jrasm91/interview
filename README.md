# interview
Interview practice problems, notes, links, etc

## Table of Contents
  1. [General Notes](#general-notes)
  1. [JS](#js)
  1. [CSS](#css)
  1. [HTML](#html)
  1. [Linked Lists](#linked-lists)
  1. [Trees / Graphs](#trees--graphs)


## General Notes

## JS
+ Closure: a `function` created within another `function`. Variables belong to the closure that they were created in.

## CSS

## HTML
+ `doctype` - indicates that the page is using HTML5.
+ **quirks**: old browser behavior, **full standards**: html/css spec, **almost standards**: few quirks still implemented
+ `XHTML` - xml + html, inline css and javascript will often violate XHTML spec.
+ `lang` attribute can used to let the browser know what language is present in a page (or in a specific element).
+ `i18next` is perfect for strings that can be translated in javascript.
+ Language considerations: `dir="rtl"`, `font-size`, character encodings, length of words (spacing)
+ `data-*` attributes can be used for custom attributes, and allow data to pass between HTML and DOM via script or css.
+ `html5` is built on improved elements, markup, video, audio, javascript API, gelolocation API, webworker, data storage API, and also specifies how to handle invalid markup.
+ `cookie` - http header sent with every request, key values pairs
+ `localStorage` - persists until cleared/deleted.
+ `sessionStorage` - persists after page refresh, but s cleared why window/tab is closed.
+ `<script async>` - Execute script when available, without blocking
+ `<script defer>` - Defer script execution.

## Linked Lists
+ Traversing, Inserting, Deleting
+ Always test for the end of a linked list while traversing
+ Deletion and insertion require a pointer or reference to the element immediately preceding the deletion or insertion location.
+ Having the list size available makes it easy to solve the mth-from-the-end problem
+ Cycle testing can be implemented using two pointers at different speeds

## Trees / Graphs
+ Tree often means a binary tree
+ Lookup is an `O(log(n))` operation in a balanced BST
