let n = 2;

//Prime or not

let flag = true;

for (let i = 2; i <= n ** 0.5 && flag; i++) {
  if (n % i == 0) {
    flag = false;
  }
}

if (flag) {
  console.log("yes");
} else {
  console.log("no");
}
