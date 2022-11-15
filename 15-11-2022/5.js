let str='abcab';

let count=0;

for(let i=0; i<str.length; i++)
{
    let ss='';
    for(let j=i; j<str.length; j++)
    {
        ss+=str[j];
        if(ss[0]==ss[ss.length-1]){
            count++;
        }
    }
    
}

console.log(count);