let str = "thisracecarisgood";

let max = 0;

for (let i = 0; i < str.length; i++) {
  let ss = "";
  for (let j = i; j < str.length; j++) {
    ss += str[j];

    if (ss === pal(ss) && ss.length > max) {
      max = ss.length;
    }
  }
}

console.log(max);

function pal(str) {
  let p = "";
  for (let i = str.length - 1; i >= 0; i--) {
    p += str[i];
  }
  return p;
}
