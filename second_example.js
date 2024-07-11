var Second_example = /** @class */ (function () {
    function Second_example() {
        this.full_name = "khushaboo";
    }
    Second_example.prototype.showfullname = function (fname) {
        if (fname === void 0) { fname = ""; }
        this.full_name = fname;
        document.write(this.full_name);
    };
    return Second_example;
}());
var bb = new Second_example();
bb.showfullname("jesus");
