/** PROBLEM: You are given a linked list with at least 
 * one node that is either null-terminated (acyclic), or 
 * ends in a cycle (cyclic). Write a function that takes a 
 * pointer to the head of a list and determines whether the
 * list is cyclic or acyclic. You function should return
 * false if the list is acyclic and true if it is cyclic.
 * You may not modify the list in any way.
 */

var LinkedList = require('./linkedlist.js');
var Node = require('./node.js');

LinkedList.prototype.isCyclic = function() {
  if (!this.head) {
    return false;
  }

  var fast = this.head.next;
  var slow = this.head;
  while (true) {
    if (!fast || !fast.next) {
      return false;
    }
    if (fast === slow || fast.next === slow) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
};

var s1 = new LinkedList();

var n1 = s1.add(new Node(1));
var n2 = s1.add(new Node(2));
var n3 = s1.add(new Node(3));
var n4 = s1.add(new Node(4));
var n5 = s1.add(new Node(5));
var n6 = s1.add(new Node(6));
var n7 = s1.add(new Node(7));
var n8 = s1.add(new Node(8));
var n9 = s1.add(new Node(9));
var n10 = s1.add(new Node(10));

console.log(s1.isCyclic());

// n1.next = n1;
// n10.next = n1;
n10.next = n5;
// n10.next = n9;
// n10.next = n10;

console.log(s1.isCyclic());