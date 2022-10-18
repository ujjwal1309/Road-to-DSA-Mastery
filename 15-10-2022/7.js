let n=5
const arr=new Array(n);
let r=0,f=0;

enqueue(2);
enqueue(5);
enqueue(7);
enqueue(8);
enqueue(2);

dequeue()
dequeue()
dequeue()
dequeue()
dequeue()
dequeue()

function enqueue(n){
    if(r===n)
    {
        console.log('overflow')
        return;
    }
    
    arr[r++]=n;
}

function dequeue(){
    if(f===r)
    {
        console.log('Underflow');
        return;
    }

    console.log(arr[f++]);
}



