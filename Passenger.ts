class Passenger{
    passenger:number=0;
    in(user:number){
        this.passenger+=user;
        document.write(`<br> In = ${user} total = ${this.passenger} `);
    }
    out(user:number){
        this.passenger-=user;
        document.write(`<br> Out = ${user} Total = ${this.passenger}`);
    }
}

var obj1=new Passenger();
obj1.in(10);
obj1.out(5);
obj1.out(2);
