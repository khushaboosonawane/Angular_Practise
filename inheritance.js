var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.print_name = function () {
        document.write("<br>" + this.animal_name);
    };
    return Animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        var _this = _super.call(this) || this;
        _this.animal_name = "dog";
        _this.print_name();
        return _this;
    }
    return dog;
}(Animal));
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat() {
        var _this = _super.call(this) || this;
        _this.animal_name = "cat";
        _this.print_name();
        return _this;
    }
    return cat;
}(Animal));
var obj1 = new dog();
var obj2 = new cat();
