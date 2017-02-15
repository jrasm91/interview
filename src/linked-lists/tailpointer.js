/** PROBLEM: head and tail are global pointers 
 * to the first and last element, respectively, 
 * of a singly linked list of integers. Implement 
 * Javascript function for the following prototypes:
 *    - bool delete(node), 
 *    - bool insertAfter(node, data);
 */

var Node = require('./node.js');

var LinkedList = function() {
  this.head = null;
  this.tail = null;

  this.add = function(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  this.delete = function(node) {
    if (!node || !this.head) {
      return false;
    }

    if (this.head === node) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return true;
    }

    var current = this.head;
    while (current) {
      if (current.next === node) {
        current.next = node.next;
        if (current.next === null) {
          this.tail = current;
        }
        return true;
      }
      current = current.next;
    }

    return false;
  }

  this.insertAfter = function(node, newNode) {
    if (!this.head || !node) {
      return false;
    }

    var current = this.head;
    while (current) {
      if (current === node) {
        newNode.next = current.next;
        current.next = newNode;

        if (!newNode.next) {
          this.tail = newNode;
        }

        return true;
      }
      current = current.next;
    }
    return false;
  }

  this.print = function() {
    var data = [];
    var current = this.head;
    while (current) {
      data.push(current.data);
      current = current.next;
    }
    console.log(data);
    console.log('Head: ' + (this.head ? this.head.data : 'null'));
    console.log('Tail: ' + (this.tail ? this.tail.data : 'null'));
  }
}

var s1 = new LinkedList();

var n1 = new Node(1),
  n2 = new Node(2),
  n3 = new Node(3),
  n4 = new Node(4),
  n5 = new Node(5),
  n6 = new Node(6),
  n7 = new Node(7);

s1.add(n1);
s1.insertAfter(n1, n6);
s1.insertAfter(n1, n5);
s1.insertAfter(n1, n4);
s1.insertAfter(n1, n3);
s1.insertAfter(n1, n2);

s1.print();

module.exports = LinkedList;