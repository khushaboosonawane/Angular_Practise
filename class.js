var Myclass = /** @class */ (function () {
    function Myclass() {
        this.a = 20;
    }
    Myclass.prototype.show = function () {
        document.write(this.a + "");
        return "End ";
    };
    return Myclass;
}());
var obj = new Myclass();
document.write(obj.a);
