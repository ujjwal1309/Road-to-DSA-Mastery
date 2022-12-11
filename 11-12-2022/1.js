class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

class linkedList {
  constructor() {
    (this.head = null), (this.size = 0);
  }

  add(data) {
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let c = this.head;

      while (c.next) {
        c = c.next;
      }

      c.next = node;
    }
    this.size++;
  }

  print() {
    if (!this.size) {
      console.log("Linked List is empty");
      return;
    }

    let c = this.head;
    while (c) {
      console.log(c.data);
      c = c.next;
    }
  }

  insertElement(data, pos) {
    let node = new Node(data);
    let c = this.head;
    let p = null;
    let i = 1;

    if (pos === 1) {
      node.next = c;
      this.head = node;
    } else {
      while (i !== pos) {
        p = c;
        c = c.next;
        i++;
      }

      p.next = node;
      node.next = c;
    }

    this.size++;
  }

  deleteLL(data){

    let c=this.head;
    let p=null;
    while(c.data!==data){
        p=c;
        c=c.next;
    }

    p.next=c.next;
    this.size--;

  }

  sizeLL(){
    console.log(`The size of linked list is ${this.size}`);
  }


  reverseLL(){
    let c=this.head;
    let p=null;
    let f=null;

    while(c){
        f=c.next;
        c.next=p;
        p=c;
        c=f;
        f=null;
    }

    this.head=p;
  }
}

let l1 = new linkedList();
l1.add(5);
l1.add(6);
l1.add(7);
l1.insertElement(10,1)
l1.insertElement(19,3);
l1.deleteLL(6);
l1.reverseLL();
l1.print();
l1.sizeLL()


//Till now I have created LL from class in my ll it has add,print,insert,delete,reverse and lastly ot has size functionalities;



