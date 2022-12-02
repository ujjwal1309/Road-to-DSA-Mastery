class Node {
  constructor(el) {
    this.el = el;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //------------------------------------------------------------------------------------------->

  add(el) {
    let node = new Node(el);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  //------------------------------------------------------------------------------------------->

  print() {
    let current = this.head;
    let i = 0;
    while (current) {
      console.log(current.el, i++);
      current = current.next;
    }
  }

  //------------------------------------------------------------------------------------------->

  isEmpty() {
    this.size ? console.log(false) : console.log(true);
  }

  //------------------------------------------------------------------------------------------->

  insertAt(el, index) {
    //if index is gretaer than size, index is negative,size is 0

    if (index > this.size && index < 0 && this.size) {
      return false;
    }

    let node = new Node(el);
    let current = this.head;
    let prev = null;
    let i = 0;
    if (index == 0) {
      node.next = current;
      this.head = node;
    } else {
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }

      //insert at the index

      prev.next = node;

      // move to the inserted node

      prev = prev.next;

      // add the rest of the current to the inserted node

      prev.next = current;

      //increment size
    }

    this.size++;
  }

  //------------------------------------------------------------------------------------------->

  delete(el) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.el === el) {
        //do something

        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
      }

      prev = current;
      current = current.next;
      this.size--
    }
  }
}

let l = new linkedList();
l.add(1);
l.isEmpty();
l.add(2);
l.add(3);
l.add(4);
l.insertAt(15, 0);
l.print();

console.log(l);
