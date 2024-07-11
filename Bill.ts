class Bill{
    customer_name:string;
    product:any=[];
    constructor(cus_name:string){
        this.customer_name=cus_name;
    }
    addproduct(obj:any){
        this.product.push(obj);
    }
    printproduct(){
        // console.log(`${this.customer_name} Product = ${this.product}`);
        console.log(this.product);
        let total:number=0;
        if(this.product.length>0){
            for(var i=0;i<this.product.length;i++){
                total+=parseInt(this.product[i]['qty'])*parseInt(this.product[i]['amt']);
            }
        }
        console.log(total);
    }
}

let first_bill=new Bill("khushaboo");
first_bill.addproduct({"product_name":"sugar","qty":"2kg","amt":300});
first_bill.addproduct({"product_name":"rice","qty":"2kg","amt":500});
first_bill.printproduct();
