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
    return node;
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

module.exports = LinkedList;