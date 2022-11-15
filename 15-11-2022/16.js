let arr = [1, 2, 3, 5, 7, 12];

let sum = 0;

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (prime(j - i)) {
      sum += Math.abs(arr[i] - arr[j]);
      // console.log(i,j)
    }
  }
}

console.log(sum);

function prime(n) {
  let prime = true;
  if (n == 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(n ** 0.5) && prime; i++) {
    if (n % 2 == 0) {
      prime = false;
    }
  }

  return prime;
}
