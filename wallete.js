var Wallete = /** @class */ (function () {
    function Wallete(amt, person) {
        if (person === void 0) { person = ""; }
        this.pname = "";
        this.balance = amt;
        this.pname = person;
    }
    Wallete.prototype.credit = function (bal) {
        this.balance += bal;
    };
    Wallete.prototype.debit = function (bal) {
        this.balance -= bal;
    };
    Wallete.prototype.showamt = function () {
        document.write("<h1>Current Balance of ".concat(this.pname, " :- ").concat(this.balance, " </h1>"));
    };
    return Wallete;
}());
var aa = new Wallete(4000, "khushaboo");
aa.credit(2000);
aa.debit(1000);
aa.showamt();
