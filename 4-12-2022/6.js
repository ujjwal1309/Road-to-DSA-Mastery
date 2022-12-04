let arr=[1,2,3,4,5];
let arr2=[4,3,5,1,2];

//------------------------------------------------------------------------------------------->
//Valid STack Sequences
//------------------------------------------------------------------------------------------->

let S=[];

let j=0;

for(let i in arr){


    while(S.length && S[S.length-1]===arr2[j]){
        S.pop();
        j++;
    }


    if(S.length && S[S.length-1] > arr2[j]){
        console.log('NO');
        break;
    }else{

        S.push(arr[i])

    }
}

while(S.length && S[S.length-1]===arr2[j]){
    S.pop();
    j++;
}

!S.length ? console.log('YES') : console.log('NO');