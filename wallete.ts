class Wallete{
    balance:number;
    pname:string="";
    constructor(amt:number,person:string=""){
        this.balance=amt;
        this.pname=person;
    }

    credit(bal:number){
        this.balance+=bal;
    }

    debit(bal:number){
        this.balance-=bal;
    }
    showamt(){
        document.write(`<h1>Current Balance of ${this.pname} :- ${this.balance} </h1>`);
    }
}
let aa=new Wallete(4000,"khushaboo");
aa.credit(2000);
aa.debit(1000);
aa.showamt();

