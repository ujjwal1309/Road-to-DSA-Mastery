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
remove(1);
add(14)
add(15)
add(100)

// console.log(head)

rev();

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


// function deelete(el){
//     let c=head,prev=null;
//     while(c.data!==el){
//         prev=c;
//         c=c.next;
//     }

//     prev.next=c.next;
// }

// Now we have to delete a Linked List Node How do we do that

function remove(position){

    let current=head;
    let prev=null;

    while(current.data!==position)
    {
        prev=current;
        current=current.next;
    }

    !prev ? head=current.next : prev.next=current.next;

}


// Let's see how can we reverse the Linked List

function rev(){
    let c=head;
    let p=null;
    let f=null;

    while(c){
        f=c.next;
        c.next=p;
        p=c;
        c=f;
        f=null;
    }

    head=p;

}

function add(el){
    let c=head;
    while(c.next){
        c=c.next;
    }

    let node = new Node(el);

    (!head) ? head=node : c.next=node;
    
    
}


// How to make a linked list
// Add elements into a linked list
//Delet node from LL
//Reverse LL
//Print ll

//Linked list is very awesome

