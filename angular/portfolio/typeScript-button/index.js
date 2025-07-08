var Counter = /** @class */ (function () {
    function Counter() {
        this.cnt = 0;
    }
    Counter.prototype.inc = function () {
        this.cnt++;
        this.updateUI();
    };
    Counter.prototype.dec = function () {
        if (this.cnt >= 1)
            this.cnt--;
        this.updateUI();
    };
    Counter.prototype.reset = function () {
        this.cnt = 0;
        this.updateUI();
    };
    Counter.prototype.updateUI = function () {
        var el = document.getElementById("counter");
        if (el)
            el.innerText = this.cnt.toString();
    };
    return Counter;
}());
var counter = new Counter();
window.onload = function () {
    var _a, _b, _c;
    counter.updateUI();
    (_a = document.getElementById("inc")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return counter.inc(); });
    (_b = document.getElementById("dec")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return counter.dec(); });
    (_c = document.getElementById("reset")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return counter.reset(); });
};
