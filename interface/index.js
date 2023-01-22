var rect1 = {};
var rect2 = {};
var rect3 = {};
var rect4 = {
    id: "123",
    size: {
        width: 10,
        height: 10
    },
    getArea: function () {
        return this.size * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: "1px solid black",
    marginTop: "20px",
    borderRadius: "5px",
    width: 20
};
