let arr=new Array(5);
let top=-1;

push(10);
push(20)
push(30);
push(40);
push(50);
pop();
push(0);
pop()
pop();
pop()
pop()
pop()
pop()
pop()
pop()
pop()
push(10);
push(1);
push(2);
push(3);
push(4);
console.log(arr)

function push(data){
    if(top==4)
    {
        return "Overflow"
    }

    arr[++top]=data;
}

function pop(){
    if(top==-1)
    {
        return "Underflow";
    }

    return ans=arr[top--];
}

function peek()
{
    if(top==-1)
    {
        return "Underflow";
    }

    return ans=arr[top];  
}