let arr = [3, 7, 42, 9, 8];

let flag = true;

for (let i = 0; i < arr.length && flag; i++) {
  if (arr[i] === 42) {
    flag = false;
  }
}

if (flag) {
  console.log("no");
} else {
  console.log("yes");
}
