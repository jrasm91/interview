/** PROBLEM: Given a singly linked list, device a 
 * time -and space- efficient algorith, to find the 
 * mth-to-last element of the list. Imlement your 
 * algorithm, taking care to handle relevant error 
 * conditions. Define mth to last such that when m=0 
 * the last element of the list is returned.
 */

var LinkedList = require('./linkedlist.js');
var Node = require('./node.js');

LinkedList.prototype.findMthToLast = function(m) {
  var counter = 0;
  var current = this.head;
  while (current && counter < m) {
    current = current.next;
    counter++;
  }

  if (!current) {
    return null;
  }

  var mth = this.head;
  while (current.next) {
    current = current.next;
    mth = mth.next;
  }

  return mth;
}

var s1 = new LinkedList();

s1.add(new Node(1));
s1.add(new Node(2));
s1.add(new Node(3));
s1.add(new Node(4));
s1.add(new Node(5));
s1.add(new Node(6));
s1.add(new Node(7));
s1.add(new Node(8));
s1.add(new Node(9));
s1.add(new Node(10));

console.log(s1.findMthToLast(1).data);