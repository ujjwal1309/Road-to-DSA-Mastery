var arr = [2,4,5,7,9];
var arr2 = [1,3,10,12,13];
var n = 5;

var arr3 = new Array(n + n);
var r = 0,
  l = 0,
  k = 0;
while (r < n && l < n) {
  if (arr[l] > arr2[r]) {
    arr3[k] = arr2[r];
    r++;
    k++;
  } else {
    arr3[k] = arr[l];
    l++;
    k++;
  }
}
// console.log(l,r)
if (l < n) {
  for (let i = l; i < n ; i++) {
    arr3[k] = arr[l];
    k++;
    l++;
  }
} else if (r < n) {
  for (let i = r; i < n; i++) {
    arr3[k] = arr2[r];
    k++;
    r++;
  }
}

console.log(arr3);
