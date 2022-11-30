class create{
    constructor(n,p){
        this.n=n
        this.p=p
    }

    print(){
        console.log(`Hello i am ${this.n} from ${this.p}`)
    }
}

let person1=new create('Ujjwal','delhi');
console.log(person1);

person1.print()

//------------------------------------------------------------------------------------------->

//Make a class to calculate area and perimeter of rectangle

class square{
    constructor(l,b){
        this.l=l;
        this.b=b;
    }

    area(){
        console.log(this.l*this.b);
        return 'konichgiwa';
    }
}


let sq1=new square(2,3);

sq1.area();