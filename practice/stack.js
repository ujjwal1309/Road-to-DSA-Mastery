var arr= new Array(5);
var top=-1;

function myPush(data)
{
    if(top==arr.length-1)
    {
        return "OVERFLOW";
    }
    top++;

    return  arr[top]=data;

}

function myPop()
{
    if(top==-1)
    {
        return "UNDERFLOW"
    }
    var pop=arr[top];
    top--;
    return pop;
}

function myPeek()
{
    if(top==-1)
    {
        return "UNDERFLOW"
    }
    return  arr[top];
}
myPush(13)
myPush(2)
myPush(3)
myPush(15)
myPush(19)
myPush(30)
console.log(arr)