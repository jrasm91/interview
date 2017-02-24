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
+ quirks: old browser behavior, full standards: html/css spec, almost standards: few quirks still implemented
+ `XHTML` - xml + html, inline css and javascript will often violate XHTML spec.
+ `lang` attribute can used to let the browser know what language is present in a page (or in a specific element).

## Linked Lists
+ Traversing, Inserting, Deleting
+ Always test for the end of a linked list while traversing
+ Deletion and insertion require a pointer or reference to the element immediately preceding the deletion or insertion location.
+ Having the list size available makes it easy to solve the mth-from-the-end problem
+ Cycle testing can be implemented using two pointers at different speeds

## Trees / Graphs
+ Tree often means a binary tree
+ Lookup is an `O(log(n))` operation in a balanced BST
