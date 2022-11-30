class rray {
  constructor() {
    this.arr = [];
    this.length = 0;
  }

  empty() {
    if (this.arr.length) {
      return false;
    } else {
      return true;
    }
  }

  push(el){
    this.arr[this.length]=el;
    this.length++;
  }
  pop(){
    
    return this.arr[--this.length];
  }
}


let arr1=new rray();
arr1.push(4)
console.log(arr1.pop())
arr1.push(2)

console.log(arr1)