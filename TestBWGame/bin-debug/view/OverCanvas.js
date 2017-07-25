var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OverCanvas = (function (_super) {
    __extends(OverCanvas, _super);
    function OverCanvas() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    OverCanvas.prototype.init = function () {
        this._bg = new egret.Shape();
        this._bg.graphics.beginFill(0);
        this._bg.graphics.drawRect(0, 0, GameData.getStageWidth(), GameData.getStageHeight());
        this._bg.graphics.endFill();
        this.addChild(this._bg);
        this._txtScore = new egret.TextField();
        this._txtScore.text = "Score: ";
        this._txtScore.size = 50;
        this._txtScore.textColor = 0xffffff;
        this._txtScore.x = 50;
        this._txtScore.y = 50;
        this.addChild(this._txtScore);
        this._btnAgain = new egret.TextField();
        this._btnAgain.text = "Again";
        this._btnAgain.size = 50;
        this._btnAgain.textColor = 0xffffff;
        this._btnAgain.x = 180;
        this._btnAgain.y = 200;
        this._btnAgain.touchEnabled = true;
        this.addChild(this._btnAgain);
        this._btnAgain.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAgain, this);
    };
    OverCanvas.prototype.showScore = function () {
        this._txtScore.text = "分数： " + GameData.getScore();
    };
    OverCanvas.prototype.onAgain = function (e) {
        console.log("Game Again");
        var event = new GameEvent(GameEvent.GAME_START);
        this.dispatchEvent(event);
    };
    OverCanvas.prototype.removeEvent = function () {
        this._txtScore.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onAgain, this);
    };
    OverCanvas.prototype.destroy = function () {
        this.removeEvent();
        this._txtScore = null;
    };
    return OverCanvas;
}(egret.Sprite));
__reflect(OverCanvas.prototype, "OverCanvas");
//# sourceMappingURL=OverCanvas.js.map