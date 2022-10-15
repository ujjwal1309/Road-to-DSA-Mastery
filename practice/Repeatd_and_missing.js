let arr=[1,2,3,3,4];
let n=5
//I have to find the repeated and missing one
let obj={};
for(let i=1; i<=n; i++)
{
    obj[i]=0;
}

for(let i=0; i<n; i++)
{
    obj[arr[i]]++;
}

let missing;
let repeated;
for(let key in obj)
{
   if(obj[key]>1)
   {
    repeated=+key;
   }
   if(obj[key]==0)
   {
    missing=+key;
   }
}
console.log("Repeated is" ,repeated,"\n"+"Missing one is", missing);