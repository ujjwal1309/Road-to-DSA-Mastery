let arr=[5,1,2,4,3];
let n=5;

//------------------------------------------------------------------------------------------->
//Use Side Lane
//------------------------------------------------------------------------------------------->

let s=[];
let o=1;

for(let i in arr){
    while(s.length && s[s.length-1]===o){
        s.pop();
        o++;
    }

    arr[i]===o ? o++ : s.push(arr[i]);
}

while(s.length && s[s.length-1]===o){
    s.pop();
    o++;
}

!s.length ? console.log('Yes') : console.log('no');