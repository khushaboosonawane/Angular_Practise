var Bill = /** @class */ (function () {
    function Bill(cus_name) {
        this.product = [];
        this.customer_name = cus_name;
    }
    Bill.prototype.addproduct = function (obj) {
        this.product.push(obj);
    };
    Bill.prototype.printproduct = function () {
        // console.log(`${this.customer_name} Product = ${this.product}`);
        console.log(this.product);
        var total = 0;
        if (this.product.length > 0) {
            for (var i = 0; i < this.product.length; i++) {
                total += parseInt(this.product[i]['qty']) * parseInt(this.product[i]['amt']);
            }
        }
        console.log(total);
    };
    return Bill;
}());
var first_bill = new Bill("khushaboo");
first_bill.addproduct({ "product_name": "sugar", "qty": "2kg", "amt": 300 });
first_bill.addproduct({ "product_name": "rice", "qty": "2kg", "amt": 500 });
first_bill.printproduct();
