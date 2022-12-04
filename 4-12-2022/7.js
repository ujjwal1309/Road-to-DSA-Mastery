let arr = [3, 2, 1];
let arr1 = [1, 3, 2];

//------------------------------------------------------------------------------------------->
// Ordering The Process
//------------------------------------------------------------------------------------------->

let count = 0;

while (arr.length) {
  if (arr[0] === arr1[0]) {
    arr.shift();
    arr1.shift();
  } else {
    arr.push(arr.shift());
  }

  count++;
}

console.log(count)
