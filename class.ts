class Myclass{
    a:number=20;
    show():string{
        document.write(this.a+"");
        return "End ";
    }
}

var obj:any=new Myclass();
document.write(obj.a);
