let arr = [3,1,8,9,10,2];
//-1 5 4 4 3
//6
// 3 1 8 9 10 2
let l = [];
let r = [];

l.push(-1);
for (let i = 1; i < arr.length; i++) {
  let count = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (arr[j] > arr[i]) {
      l.push(j);
      count++;
      break;
    }
  }
  if (count == 0) {
    l.push(-1);
  }
}

for(let i=0; i<arr.length-1; i++)
{
    let count=0;
    for(let j=i+1; j<arr.length; j++)
    {
        if(arr[j]>arr[i])
        {
            r.push(j);
            count++;
            break;
        }
    }
    if(count==0)
    {
        r.push(-1);
    }
}
r.push(-1)
console.log(l,r);

let ans = "";

for (let i = 0; i < arr.length; i++) {
  if (l[i] == -1 && r[i] == -1) {
    ans += `-1 `;
  } else if (l[i] == -1) {
    ans += `${arr[r[i]]} `;
  } else if (r[i] == -1) {
    ans += `${arr[l[i]]} `;
  } else if (Math.abs(l[i]) > Math.abs(r[i])) {
    ans += `${arr[r[i]]} `;
  } else if (Math.abs(l[i]) < Math.abs(r[i])) {
    ans += `${arr[l[i]]} `;
  } else {
    ans += `${arr[l[i]]} `;
  }
}
console.log(ans);
