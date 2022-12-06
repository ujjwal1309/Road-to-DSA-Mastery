class Node{
    constructor(el){

        this.data=el
        this.next=null;

    }
}

let head=new Node(1);
let second=new Node(2);
let third=new Node(5);

head.next=second;
second.next=third;
insertAtTail(2);
insertAtMiddle(12,2);
deelete(2)

// console.log(head)

print()
//Now make a fn which will print it

function print(){
    let n=head;
    while(n){
        console.log(n.data);
        n=n.next;
    }
}


// The Time COmplexity of Search is O(n) and Insertion or Deletion have O(1)

//Now I am making a fn to add LL in Head;

function insertAtHead(el){
    let node =new Node(el);

    node.next=head;
    head=node;
}

//Now I am makin a fn to add in Tail

function insertAtTail(el){
    let node =new Node(el);

    let n=head;

    while(n.next){
        n=n.next;
    }

    n.next=node;
}

//Now if i have to add node in middle 

function insertAtMiddle(el,p){
    let node =new Node(el);
    let c = head;
    let prev=null;
    while(c.data!=p){
        prev=c;
        c=c.next;
    }

    // console.log(c,prev)

    node.next=c.next;
    c.next=node;
}

// The Time Complexity of Adding At Middle or Tail would be O(n)

//Now I am understanding Linked List Step by Step Yeaaaah!

// Now For Deletion Of Elements in linked list


function deelete(el){
    let c=head,prev=null;
    while(c.data!==el){
        prev=c;
        c=c.next;
    }

    prev.next=c.next;
}

