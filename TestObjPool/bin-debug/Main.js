var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Main.prototype.init = function () {
        var dis = new Distributor();
        var gen = new BallGenerator(dis);
        var ball1 = gen.getBall(BallType.football);
        ball1.action();
        ball1.dispose();
        ball1 = null;
        dis.look();
        ball1 = gen.getBall(BallType.football);
        dis.look();
        var ball2 = gen.getBall(BallType.baseball);
        ball2.action();
        var ball3 = gen.getBall(BallType.baseball);
        ball3.action();
        dis.look();
        ball2.dispose();
        ball3.dispose();
        dis.look();
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map