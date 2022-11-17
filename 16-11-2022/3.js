let n = 5;

//New method of writing conditionals

// n > 1 ? console.log(true) : n==1 ? console.log('yes');

// if(n>1)
// {
//     console.log('true')
// }else{
//     console.log('false');
// }

let arr = new Array(n);
let i = -1;

push(12);
push(11);
push(10);
push(9);
push(8);
push(6);
pop();
peek();
push(100);
pop();
pop();
pop();
pop();
pop();
pop();
pop();
pop();

console.log(arr);

function push(data) {
  if (i === n - 1) {
    console.log("Overflow");
    return;
  }

  arr[++i] = data;
}

function pop() {
  if (i === -1) {
    console.log("Underflow");
    return;
  }

  i--;
}

function peek() {
  if (i === -1) {
    console.log("Underflow");
    return;
  }

  console.log(arr[i]);
}
