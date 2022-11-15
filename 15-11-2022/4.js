let n=1221;

let r=0;

for(let i=n; i>0; i=Math.floor(i/10)){
    let rem=i%10;
    r=r*10+rem;
}

console.log(r)