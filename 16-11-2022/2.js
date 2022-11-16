let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let k = 6;
let r, c;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i][j] == k) {
      r = i;
      c = j;
    }
  }
}

let d1='', d2='';

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (r - c == i - j) {
      d1 += arr[i][j] + " ";
    }

    if (r + c == i + j) {
      d2 += arr[i][j] + " ";
    }
  }
}

console.log(d1+'\n'+d2)