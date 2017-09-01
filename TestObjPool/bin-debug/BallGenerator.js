var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 球生成器
 */
var BallGenerator = (function () {
    function BallGenerator(val) {
        this._distributor = null;
        this.init(val);
    }
    BallGenerator.prototype.init = function (val) {
        this._distributor = val;
    };
    BallGenerator.prototype.getBall = function (type) {
        var ball = this._distributor.getVO(type);
        if (ball == null) {
            ball = this.createBall(type);
            this._distributor.addVO(ball);
            ball.reset();
        }
        return ball;
    };
    BallGenerator.prototype.createBall = function (type) {
        switch (type) {
            case BallType.baseball:
                return new BaseBall();
            case BallType.basketball:
                return new BasketBall();
            case BallType.football:
                return new FootBall();
        }
    };
    return BallGenerator;
}());
__reflect(BallGenerator.prototype, "BallGenerator");
//# sourceMappingURL=BallGenerator.js.map