class Animal{
    animal_name:string;
    print_name(){
        document.write("<br>"+this.animal_name);
    }
}

class dog extends Animal{
    constructor(){
        super();
        this.animal_name="dog";
        this.print_name();
    }
}
class cat extends Animal{
    constructor(){
        super();
        this.animal_name="cat";
        this.print_name();
    }
}
var obj1=new dog();
var obj2=new cat();
