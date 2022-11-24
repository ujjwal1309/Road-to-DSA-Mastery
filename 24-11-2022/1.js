//------------------------------------------------------------------------------------------->
// Implementing Queue from scratch; if we  wan want 
//------------------------------------------------------------------------------------------->

let arr = new Array(5);

let r = 0,
  f = 0;

function enqueue(data) {
  if (r === 5) {
    console.log("Overflow");
    return;
  }

  arr[r] = data;
  r++;
}

function dequeue() {
  if (r === f) {
    console.log("Underflow");
    return;
  }

  console.log(arr[f]);
  f++;
}

enqueue(2);
enqueue(3);
enqueue(6);
enqueue(2);
enqueue(8);
enqueue(2);
enqueue(2);

dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();

enqueue(2)
dequeue()



