/** PROBLEM: Discuss the stack data structure. Implement 
 * a stack in Javascript using either a linked list or a 
 * dynamic array, and justify your decision. Design the 
 * interface to you stack to be complete, consistent, 
 * and easy to use.
 */

var Node = require('./node.js');

var Stack = function() {
  this.root = null;

  this.push = function(data) {
    var newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      newNode.next = this.root;
      this.root = newNode;
    }
  }

  this.pop = function() {
    if (!this.root) {
      throw new Error("Invalid Operation: No more nodes to pop.");
    } else {
      var top = this.root;
      this.root = top.next;
      return top;
    }
  }

  this.clear = function() {
    this.root = null;
  }

  this.print = function() {
    var data = [];
    var current = this.root;
    while (current) {
      data.push(current.data);
      current = current.next;
    }
    for (var i = 0; i < data.length; i++) {
      if (i === 0) {
        console.log('--> ' + data[i]);
      } else {
        console.log('    ' + data[i]);
      }
    }
  }
}

var s1 = new Stack();

s1.push(1);
s1.clear();

s1.push(2);
s1.pop();

s1.push(3);
s1.push(4);
s1.push(5)
s1.pop();
s1.push(6);

s1.print();

module.exports = Stack;