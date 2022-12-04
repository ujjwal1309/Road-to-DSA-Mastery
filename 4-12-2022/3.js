let arr = [5, 4, 1, 3, 2];
let n = 5;

//------------------------------------------------------------------------------------------->

let s1 = [];
let x = [];

for (let i in arr) {
  while (s1.length && arr[s1[s1.length - 1]] <= arr[i]) {
    s1.pop();
  }

  !s1.length ? x.push(-1) : x.push(s1[s1.length - 1] + 1);

  s1.push(+i);
}

//------------------------------------------------------------------------------------------->

let y = [],
  s2 = [];

for (let i = n - 1; i >= 0; i--) {
  while (s2.length && arr[s2[s2.length - 1]] <= arr[i]) {
    s2.pop();
  }

  !s2.length ? y.push(-1) : y.push(s2[s2.length - 1] + 1);

  s2.push(i);
}

let ans = [];

for (let i in x) {
  let sum = x[i] + y[i];

  ans.push(sum);
}

console.log(ans)

//------------------------------------------------------------------------------------------->

// Hooray completed yeaaahah 

//------------------------------------------------------------------------------------------->