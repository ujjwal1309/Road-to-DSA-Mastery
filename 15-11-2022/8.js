let n = 5;

for (let i = 1; i <= n; i++) {
  let ans = "";
  for (let j = 0; j < n; j++) {
    if (i == 1 || i == n) {
      ans += "* ";
    } else if (j == 1) {
      ans += "* ";
    }
  }
  console.log(ans);
}
