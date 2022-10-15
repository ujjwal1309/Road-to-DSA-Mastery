var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

var n = 4;

var left = 0,
  right = n - 1,
  down = n - 1,
  up = 0;
var ans = "";
for (var i = 0; i < Math.ceil(n / 2); i++) {
  for (var j = up; j < right; j++) {
    ans += arr[left][j] + " ";
  }
  left++;
  for (var j = left; j < right; j++) {
    ans += arr[j][down] + " ";
  }
  down--;
  for (var j = down; j >= up; j--) {
    ans += arr[right][j] + " ";
  }
  right--;
  for (var j = right; j >= left; j--) {
    ans += arr[j][up] + " ";
  }
  up++;
}

console.log(ans);
