let arr=[1,3,2,4];
let n=4;

//------------------------------------------------------------------------------------------->
// find the next greater element
//------------------------------------------------------------------------------------------->

let s=[];
let ans=[];
for(let i=n-1; i>=0; i--){
    while(s.length && s[s.length-1]<=arr[i]){
        s.pop();
    }

    !s.length ? ans.push(-1) : ans.push(s[s.length-1]);

    s.push(arr[i]);
}

console.log(ans.reverse());