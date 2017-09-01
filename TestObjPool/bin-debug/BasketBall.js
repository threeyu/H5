var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BasketBall = (function (_super) {
    __extends(BasketBall, _super);
    function BasketBall() {
        var _this = _super.call(this) || this;
        _this._isIdle = true;
        _this._type = BallType.basketball;
        _this._distributor = null;
        _this._msg = "";
        return _this;
    }
    Object.defineProperty(BasketBall.prototype, "hashc", {
        get: function () { return this.hashCode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasketBall.prototype, "type", {
        get: function () { return this._type; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasketBall.prototype, "isIdle", {
        get: function () { return this._isIdle; },
        enumerable: true,
        configurable: true
    });
    BasketBall.prototype.action = function () {
        // todo: sth
        console.log(this._msg);
    };
    BasketBall.prototype.reset = function () {
        this._isIdle = false;
        this._distributor.distribution(this);
        this._msg = "这个篮球，很皮";
    };
    BasketBall.prototype.setProtocol = function (val) {
        this._distributor = val;
    };
    BasketBall.prototype.dispose = function () {
        this._isIdle = true;
        this._distributor.distribution(this);
    };
    BasketBall.prototype.del = function () {
        this.dispose();
        this._distributor = null;
    };
    return BasketBall;
}(egret.HashObject));
__reflect(BasketBall.prototype, "BasketBall", ["IBall"]);
//# sourceMappingURL=BasketBall.js.map