var Passenger = /** @class */ (function () {
    function Passenger() {
        this.passenger = 0;
    }
    Passenger.prototype.in = function (user) {
        this.passenger += user;
        document.write("<br> In = ".concat(user, " total = ").concat(this.passenger, " "));
    };
    Passenger.prototype.out = function (user) {
        this.passenger -= user;
        document.write("<br> Out = ".concat(user, " Total = ").concat(this.passenger));
    };
    return Passenger;
}());
var obj1 = new Passenger();
obj1.in(10);
obj1.out(5);
obj1.out(2);
