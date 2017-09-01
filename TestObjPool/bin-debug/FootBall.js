var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FootBall = (function (_super) {
    __extends(FootBall, _super);
    function FootBall() {
        var _this = _super.call(this) || this;
        _this._isIdle = true;
        _this._type = BallType.football;
        _this._distributor = null;
        _this._msg = "";
        return _this;
    }
    Object.defineProperty(FootBall.prototype, "hashc", {
        get: function () { return this.hashCode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FootBall.prototype, "type", {
        get: function () { return this._type; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FootBall.prototype, "isIdle", {
        get: function () { return this._isIdle; },
        enumerable: true,
        configurable: true
    });
    FootBall.prototype.action = function () {
        // todo: sth
        console.log(this._msg);
    };
    FootBall.prototype.reset = function () {
        this._isIdle = false;
        this._distributor.distribution(this);
        this._msg = "这个足球，很皮";
    };
    FootBall.prototype.setProtocol = function (val) {
        this._distributor = val;
    };
    FootBall.prototype.dispose = function () {
        this._isIdle = true;
        this._distributor.distribution(this);
    };
    FootBall.prototype.del = function () {
        this.dispose();
        this._distributor = null;
    };
    return FootBall;
}(egret.HashObject));
__reflect(FootBall.prototype, "FootBall", ["IBall"]);
//# sourceMappingURL=FootBall.js.map